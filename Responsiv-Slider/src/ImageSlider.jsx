import React, { useState, useEffect } from 'react';

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { type: 'image', content: '/NorwayPicture.jpeg' },
    { type: 'api', content: async () => {
  
    }},
    { type: 'video', content: 'url3' }
  ];

  const [content, setContent] = useState(null);

  const updateContent = (slideIndex) => {
    if (slides[slideIndex].type === 'api') {
        slides[slideIndex].content().then(data => setContent(data));
    } else {
        setContent(slides[slideIndex].content);
    }
  }

  useEffect(() => {
    updateContent(currentSlide);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(prevSlide => {
        const newSlideIndex = (prevSlide + 1) % slides.length;
        updateContent(newSlideIndex);
        return newSlideIndex;
    });
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide => {
        const newSlideIndex = (prevSlide - 1 + slides.length) % slides.length;
        updateContent(newSlideIndex);
        return newSlideIndex;
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center bg-gray-200 p-5 space-x-0 sm:space-x-5">
      <div className="hidden sm:flex flex-col items-center w-full">
        <div className="flex justify-between items-center w-full">
          <button className="py-2 px-4 text-white bg-blue-500 rounded-md" onClick={prevSlide}>Previous</button>
          <div className="w-full sm:w-96 h-64 sm:h-96 rounded-md bg-blue-600 relative">
          <div className="w-full h-full relative">
            {slides[currentSlide].type === 'image' && (
              <> 
                <img src={content} alt="" className="w-full h-full object-cover rounded-md" />
                <p className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2">Couple on trolltunga in Norway by <a href="https://stock.adobe.com/no/contributor/201224144/alex-koch?load_type=author&prev_url=detail" target="_blank" rel="noopener noreferrer" className='text-blue-500'>Alex Koch</a></p>
              </>
            )}
            {slides[currentSlide].type === 'api' && (
              <>
                {content}
                <p>hei</p>
              </>
            )}
            {slides[currentSlide].type === 'video' && <video src={content} className="w-full h-full object-contain" autoPlay loop />}
          </div>
          </div>
          <button className="py-2 px-4 text-white bg-blue-500 rounded-md" onClick={nextSlide}>Next</button>
        </div>
        <div className="flex justify-center space-x-2 p-2">
          {slides.map((slide, index) => (
            <span key={index} className={`h-1 w-1 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}></span>
          ))}
        </div>
      </div>
      <div className="sm:hidden flex flex-col items-center w-full mt-5">
        <div className="w-full h-64 rounded-md bg-blue-600 relative">
        <div className="w-full h-full relative">
            {slides[currentSlide].type === 'image' && (
              <> 
                <img src={content} alt="" className="w-full h-full object-cover rounded-md" />
                <p className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2">Couple on trolltunga in Norway by <a href="https://stock.adobe.com/no/contributor/201224144/alex-koch?load_type=author&prev_url=detail" target="_blank" rel="noopener noreferrer" className='text-blue-500'>Alex Koch</a></p>
              </>
            )}
            {slides[currentSlide].type === 'api' && (
              <>
                {content}
                <p>hei</p>
              </>
            )}
            {slides[currentSlide].type === 'video' && <video src={content} className="w-full h-full object-contain" autoPlay loop />}
          </div>
        </div>
        <div className="flex justify-center space-x-2 p-2">
          {slides.map((slide, index) => (
            <span key={index} className={`h-1 w-1 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}></span>
          ))}
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