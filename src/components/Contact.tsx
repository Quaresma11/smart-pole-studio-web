import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-yellow-400">Контакты</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить 
            на ваши вопросы и помочь с выбором программы тренировок
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Как с нами связаться</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-gray-300">+7 (999) 123-45-67</p>
                    <p className="text-gray-400 text-sm">Звонки принимаем с 9:00 до 22:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">info@smartpole.ru</p>
                    <p className="text-gray-400 text-sm">Отвечаем в течение 24 часов</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-gray-300">Москва, ул. Спортивная, 15</p>
                    <p className="text-gray-400 text-sm">5 минут от метро "Спортивная"</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Режим работы</h4>
                    <p className="text-gray-300">Понедельник - Воскресенье</p>
                    <p className="text-gray-300">9:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Мы в социальных сетях</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-110">
                  <Instagram className="w-6 h-6 text-black" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-110">
                  <MessageCircle className="w-6 h-6 text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/50 p-8 rounded-xl border border-yellow-400/20">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Записаться на занятие</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Телефон</label>
                <input
                  type="tel"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Тип занятия</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors">
                  <option>Пробное занятие</option>
                  <option>Pole Sport для начинающих</option>
                  <option>Pole Sport средний уровень</option>
                  <option>Pole Sport продвинутый</option>
                  <option>Индивидуальное занятие</option>
                  <option>Растяжка и гибкость</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Сообщение (необязательно)</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  placeholder="Расскажите о своем опыте или задайте вопрос"
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105">
                Отправить заявку
              </button>
            </form>

            <div className="mt-6 p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
              <p className="text-yellow-400 text-sm">
                <strong>Быстрая запись:</strong> Напишите нам в WhatsApp или Telegram, 
                и мы поможем выбрать удобное время для занятия!
              </p>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-yellow-400/20">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Карта проезда</h3>
              <p className="text-gray-300">
                Мы находимся в центре Москвы, рядом с метро "Спортивная"
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Точный адрес: ул. Спортивная, 15, 2-й этаж
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
