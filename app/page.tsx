import Link from "next/link";
import { ArrowRight, Shield, Users, Zap, Coins, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Навигация */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              CryptoHub
            </div>
            <div className="space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-white px-3 py-2">
                Войти
              </Link>
              <Link 
                href="/register" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
              >
                Начать бесплатно
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Социальная сеть для
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent block">
              Крипто-сообщества
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к крупнейшему комьюнити крипто-энтузиастов, блогеров и проектов. Без цензуры, с реальной верификацией.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-2 transition"
            >
              Начать бесплатно <ArrowRight size={20} />
            </Link>
            <Link 
              href="#pricing" 
              className="border border-gray-700 hover:border-gray-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
            >
              Для проектов
            </Link>
          </div>
        </div>
      </section>

      {/* Тарифы (Pricing) */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Выберите свой план</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Бесплатный тариф */}
          <div className="bg-gray-800/50 backdrop-blur rounded-3xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-2">Community</h3>
            <p className="text-gray-400 mb-6">Для читателей и энтузиастов</p>
            <div className="text-3xl font-bold mb-6">Бесплатно</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Shield className="text-green-400" size={20} />
                <span>Чтение ленты новостей</span>
              </li>
              <li className="flex items-center gap-3">
                <Users className="text-green-400" size={20} />
                <span>Комментарии к постам</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Zap className="text-gray-500" size={20} />
                <span className="line-through">Создание постов</span>
              </li>
            </ul>
            <Link 
              href="/register" 
              className="block text-center border border-gray-600 hover:border-gray-500 text-white py-3 rounded-xl transition"
            >
              Зарегистрироваться
            </Link>
          </div>

          {/* Premium тариф - $25 */}
          <div className="bg-gradient-to-b from-blue-600/20 to-purple-600/20 backdrop-blur rounded-3xl p-8 border-2 border-blue-500 relative">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
              Популярное
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="text-gray-300 mb-6">Для блогеров и проектов</p>
            <div className="text-3xl font-bold mb-6">$25 <span className="text-lg text-gray-400">/ месяц</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Shield className="text-green-400" size={20} />
                <span>Всё из бесплатного плана</span>
              </li>
              <li className="flex items-center gap-3">
                <Zap className="text-green-400" size={20} />
                <span>Создание постов и статей</span>
              </li>
              <li className="flex items-center gap-3">
                <Coins className="text-green-400" size={20} />
                <span>Прием донатов в профиль</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-green-400" size={20} />
                <span>Верификация (синяя галочка)</span>
              </li>
            </ul>
            <Link 
              href="/register?plan=premium" 
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition font-semibold"
            >
              Выбрать Premium
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
