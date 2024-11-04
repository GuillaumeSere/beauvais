import React, { useState, useEffect } from 'react';
import './scrollToTopButton.css';

const ScrollToTopButton = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    console.log("Scroll to top clicked");
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? 'show' : 'hide'}`} onClick={scrollToTop}>
      ^
    </div>
  );
};

export default ScrollToTopButton;