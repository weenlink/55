"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [plan, setPlan] = useState<"free" | "premium">("free");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Здесь будет API запрос к вашему бэкенду
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password, plan }),
      headers: { "Content-Type": "application/json" }
    });

    if (res.ok) {
      router.push("/feed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center p-4">
      <div className="bg-gray-800/50 backdrop-blur p-8 rounded-3xl border border-gray-700 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Создать аккаунт</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Выберите тариф</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPlan("free")}
                className={`p-3 rounded-xl border ${
                  plan === "free" 
                    ? "border-blue-500 bg-blue-600/20" 
                    : "border-gray-600 hover:border-gray-500"
                }`}
              >
                <div className="font-semibold">Бесплатно</div>
                <div className="text-sm text-gray-400">Читатель</div>
              </button>
              
              <button
                type="button"
                onClick={() => setPlan("premium")}
                className={`p-3 rounded-xl border ${
                  plan === "premium" 
                    ? "border-blue-500 bg-blue-600/20" 
                    : "border-gray-600 hover:border-gray-500"
                }`}
              >
                <div className="font-semibold">$25/мес</div>
                <div className="text-sm text-gray-400">Premium</div>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition mt-6"
          >
            Продолжить
          </button>
        </form>

        <div className="mt-6">
          <button
            onClick={() => {/* Интеграция с MetaMask */}}
            className="w-full border border-gray-600 hover:border-gray-500 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.3042 1.51367L19.8391 10.6112L22.1249 5.11042L32.3042 1.51367Z" fill="#E17726" stroke="#E17726" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
              {/* ... остальные пути иконки MetaMask ... */}
            </svg>
            Войти с MetaMask
          </button>
