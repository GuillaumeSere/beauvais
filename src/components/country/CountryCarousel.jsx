import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CountryCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="carousel-container">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="responsive-banner"
                    />
                </div>
            ))}

            <button
                className="carousel-button prev"
                onClick={handlePrevious}
                aria-label="Image précédente"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                className="carousel-button next"
                onClick={handleNext}
                aria-label="Image suivante"
            >
                <ChevronRight size={24} />
            </button>

            <div className="carousel-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Aller à l'image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CountryCarousel; 