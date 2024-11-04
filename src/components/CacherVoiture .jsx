import React, { useState, useEffect } from 'react';

const CacherVoiture = () => {
  const voitures = [
    { id: 1, image: '/images/v1.jpeg' },
    { id: 3, image: '/images/V3.jpeg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * voitures.length)
  );
  const [isVisible, setIsVisible] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === voitures.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, voitures.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === voitures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? voitures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center p-4 max-w-xl mx-auto">
      <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
        {isVisible && (
          <img
            src={voitures[currentIndex].image}
            alt={`Voiture ${voitures[currentIndex].id}`}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setIsVisible(false)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Cacher
        </button>
        <button
          onClick={() => setIsVisible(true)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Voir
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={goToPrevious}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Précédent
        </button>
        <button
          onClick={goToNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Suivant
        </button>
      </div>

      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className={`px-4 py-2 rounded ${
          isAutoPlay 
            ? 'bg-yellow-500 hover:bg-yellow-600' 
            : 'bg-purple-500 hover:bg-purple-600'
        } text-white`}
      >
        {isAutoPlay ? 'Arrêter le défilement' : 'Démarrer le défilement'}
      </button>
    </div>
  );
};

export default CacherVoiture;