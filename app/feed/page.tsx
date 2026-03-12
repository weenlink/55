"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Heart, MessageCircle, Share2, Wallet } from "lucide-react";

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  comments: number;
  createdAt: string;
}

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Шапка */}
      <header className="border-b border-gray-800 sticky top-0 bg-gray-900/80 backdrop-blur z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            CryptoHub
          </h1>
          <div className="flex items-center gap-4">
            {session?.user?.plan === "premium" ? (
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Premium
              </span>
            ) : (
              <button className="border border-blue-600 text-blue-400 px-3 py-1 rounded-full text-sm hover:bg-blue-600/20 transition">
                Купить Premium
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Лента */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Форма создания поста (только для Premium) */}
        {session?.user?.plan === "premium" && (
          <div className="bg-gray-800/50 rounded-2xl p-4 mb-8 border border-gray-700">
            <textarea
              placeholder="Что у вас нового в криптомире?"
              className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 mb-3"
              rows={3}
            />
            <div className="flex justify-end">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition">
                Опубликовать
              </button>
            </div>
          </div>
        )}

        {/* Посты */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post._id} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">{post.author[0]}</span>
                </div>
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-sm text-gray-400">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.content}</p>
              
              <div className="flex gap-6 text-gray-400">
                <button className="flex items-center gap-2 hover:text-red-400 transition">
                  <Heart size={20} /> {post.likes}
                </button>
                <button className="flex items-center gap-2 hover:text-blue-400 transition">
                  <MessageCircle size={20} /> {post.comments}
                </button>
                <button className="flex items-center gap-2 hover:text-green-400 transition">
                  <Share2 size={20} />
                </button>
                {session?.user?.plan === "premium" && (
                  <button className="flex items-center gap-2 hover:text-yellow-400 transition ml-auto">
                      <Wallet size={20} /> Задонатить
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
