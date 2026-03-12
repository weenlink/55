import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password, plan } = await req.json();

    // Подключаемся к MongoDB
    const { db } = await connectToDatabase();

    // Проверяем, существует ли пользователь
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Пользователь уже существует" },
        { status: 400 }
      );
    }

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаем пользователя
    const result = await db.collection("users").insertOne({
      email,
      password: hashedPassword,
      plan, // "free" или "premium"
      createdAt: new Date(),
      verified: false,
      walletAddress: null,
    });

    return NextResponse.json(
      { message: "Пользователь создан", userId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка сервера" },
      { status: 500 }
    );
  }
}
