
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "/lovable-uploads/b263d2dc-0522-493c-a52f-d392ada05c34.png",
      alt: "Групповое фото команды Smart Pole",
      title: "Наша дружная команда"
    },
    {
      src: "/lovable-uploads/a7f36d9f-6db3-4a39-bae9-98f9f130ce3e.png",
      alt: "Акробатические упражнения на пилоне",
      title: "Мастерство в движении"
    },
    {
      src: "/lovable-uploads/3aa84462-c552-4048-be20-476c3c484f8d.png",
      alt: "Художественная композиция группы",
      title: "Искусство pole dance"
    },
    {
      src: "/lovable-uploads/6ce2215c-b1a0-4ba2-b429-d8bb4509a028.png",
      alt: "Командная работа и поддержка",
      title: "Единство и грация"
    },
    {
      src: "/lovable-uploads/5e3202b4-d329-47be-a899-12fdd474cb5e.png",
      alt: "Сложные элементы на пилоне",
      title: "Высший пилотаж"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Наша <span className="text-yellow-400">Галерея</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Погрузитесь в мир pole sport через наши фотографии. Каждый снимок — это история о достижениях, 
            красоте движений и невероятной команде Smart Pole
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => openModal(index)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-yellow-400">Нажмите для просмотра</p>
                </div>
              </div>

              {/* Border effect */}
              <div className="absolute inset-0 border-2 border-yellow-400/0 group-hover:border-yellow-400/50 transition-colors duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 border border-yellow-400/20 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-600">Довольных учеников</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-600">Проведенных мастер-классов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
              <div className="text-gray-600">Года успешной работы</div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image */}
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 text-white bg-black/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-1">{images[selectedImage].title}</h3>
                <p className="text-sm text-gray-300">{images[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
