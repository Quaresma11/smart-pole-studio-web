
import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50 border-b border-yellow-400/20">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-yellow-400" />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span>Москва, ул. Спортивная, 15</span>
            </div>
          </div>
          <div className="text-yellow-400">Работаем с 9:00 до 22:00</div>
        </div>

        {/* Main header */}
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">
            <span className="text-yellow-400">Smart</span>
            <span className="text-white"> Pole</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Главная</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">О нас</a>
            <a href="#services" className="hover:text-yellow-400 transition-colors">Услуги</a>
            <a href="#trainers" className="hover:text-yellow-400 transition-colors">Тренеры</a>
            <a href="#gallery" className="hover:text-yellow-400 transition-colors">Галерея</a>
            <a href="#schedule" className="hover:text-yellow-400 transition-colors">Расписание</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Контакты</a>
          </nav>

          <button className="hidden md:block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105">
            Записаться
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-yellow-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block py-2 hover:text-yellow-400 transition-colors">Главная</a>
            <a href="#about" className="block py-2 hover:text-yellow-400 transition-colors">О нас</a>
            <a href="#services" className="block py-2 hover:text-yellow-400 transition-colors">Услуги</a>
            <a href="#trainers" className="block py-2 hover:text-yellow-400 transition-colors">Тренеры</a>
            <a href="#gallery" className="block py-2 hover:text-yellow-400 transition-colors">Галерея</a>
            <a href="#schedule" className="block py-2 hover:text-yellow-400 transition-colors">Расписание</a>
            <a href="#contact" className="block py-2 hover:text-yellow-400 transition-colors">Контакты</a>
            <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-lg font-semibold mt-4">
              Записаться
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
