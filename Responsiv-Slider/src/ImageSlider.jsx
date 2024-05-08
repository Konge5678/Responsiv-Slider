import React, { useState, useEffect } from 'react';

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { type: 'image', content: 'https://i.pinimg.com/474x/db/c7/63/dbc7636bb173ffb38acb503d8ee44995.jpg' },
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
    <div className="flex items-center justify-center bg-gray-200 p-5">
      <button className="mr-5 py-2 px-4 text-white bg-blue-500 rounded-md" onClick={prevSlide}>Previous</button>
      <div className="w-96 h-96 rounded-md bg-blue-600">
        {slides[currentSlide].type === 'image' && <img src={content} alt="" className="w-full h-full" />}
        {slides[currentSlide].type === 'api' && content}
        {slides[currentSlide].type === 'video' && <video src={content} className="w-full h-full" autoPlay loop />}
      </div>
      <button className="ml-5 py-2 px-4 text-white bg-blue-500 rounded-md" onClick={nextSlide}>Next</button>
    </div>
  );
}

export default ImageSlider;
