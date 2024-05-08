import React, { useState, useEffect } from 'react';

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { type: 'image', content: 'https://cataas.com/cat' },
    { type: 'api', content: async () => {
      // Fetch data from API and return JSX
    }},
    { type: 'video', content: 'url3' }
  ];

  const [content, setContent] = useState(null);

  useEffect(() => {
    if (slides[currentSlide].type === 'api') {
      slides[currentSlide].content().then(data => setContent(data));
    } else {
      setContent(slides[currentSlide].content);
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center bg-gray-200 p-5 space-x-0 sm:space-x-5">
      <div className="hidden sm:flex justify-between items-center w-full">
        <button className="py-2 px-4 text-white bg-blue-500 rounded-md" onClick={prevSlide}>Previous</button>
        <div className="w-full sm:w-96 h-64 sm:h-96 rounded-md bg-blue-600">
          {slides[currentSlide].type === 'image' && <img src={content} alt="" className="w-full h-full" />}
          {slides[currentSlide].type === 'api' && content}
          {slides[currentSlide].type === 'video' && <video src={content} className="w-full h-full" autoPlay loop />}
        </div>
        <button className="py-2 px-4 text-white bg-blue-500 rounded-md" onClick={nextSlide}>Next</button>
      </div>
      <div className="sm:hidden flex flex-col items-center w-full mt-5">
        <div className="w-full h-64 rounded-md bg-blue-600">
          {slides[currentSlide].type === 'image' && <img src={content} alt="" className="w-full h-full" />}
          {slides[currentSlide].type === 'api' && content}
          {slides[currentSlide].type === 'video' && <video src={content} className="w-full h-full" autoPlay loop />}
        </div>
        <div className="flex justify-around w-full mt-5">
          <button className="py-2 px-4 text-white bg-blue-500 rounded-md" onClick={prevSlide}>Previous</button>
          <button className="py-2 px-4 text-white bg-blue-500 rounded-md" onClick={nextSlide}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;