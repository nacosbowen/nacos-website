import React, { useState, useEffect } from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Effect to add/remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-darkorange text-white fixed bottom-5 right-5 rounded-md text-xl transition-all ease-linear duration-300 ${isVisible ? 'translate-y-0 block' : 'translate-y-16'}`}>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='p-2'>
        <IoMdArrowRoundUp />
      </button>
    </div>
  );
}

export default ScrollToTop;