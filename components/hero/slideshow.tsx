'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

export interface Slide {
    image: string;
    title: string;
  }

export interface SlideshowProps {
    slides: Slide[];
    showIndicators?: boolean;

  }
  

const Slideshow: React.FC<SlideshowProps> = ({
  slides,
  showIndicators = false,
}) => {
  const [current, setCurrent] = useState(0);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (isManual) return;
    const timer = setTimeout(() => {
      setCurrent((current + 1) % slides.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [current, isManual, slides.length]);

  const nextSlide = () => {
    setIsManual(true);
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsManual(true);
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setIsManual(true);
    setCurrent(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <div className={`relative w-full h-screen flex overflow-hidden`}>
      <div className={`relative overflow-hidden flex-grow`} {...handlers}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-end justify-center transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              quality={100}
              className="z-0 object-cover"
            />
          </div>
        ))}
        <div className="hidden md:block">
          <button
            className="absolute z-10 left-0 top-0 h-full flex items-center justify-center text-background px-4 md:px-8 lg:px-12"
            onClick={prevSlide}
          >
            <ChevronLeft
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              strokeWidth={1}
            />
          </button>
          <button
            className="absolute z-10 right-0 top-0 h-full flex items-center justify-center text-background px-4 md:px-8 lg:px-12"
            onClick={nextSlide}
          >
            <ChevronRight
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              strokeWidth={1}
            />
          </button>
        </div>
        {showIndicators && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  index === current ? 'bg-background' : 'bg-background/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Slideshow;
