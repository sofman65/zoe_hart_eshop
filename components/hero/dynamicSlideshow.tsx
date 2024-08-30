"use client";

import { useEffect, useState } from 'react';
import Slideshow from './slideshow';

export default function DynamicSlideshow() {
  const [slides, setSlides] = useState<{ image: string; title: string }[]>([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('/api/files');
        const data = await response.json();

        // Map the API response to the slides format
        const mappedSlides = data.map((item: any) => ({
          image: item.image.originalSrc,
          title: item.alt || 'Slide Image'
        }));

        setSlides(mappedSlides);
      } catch (error) {
        console.error('Error fetching slides:', error);
      }
    };

    fetchSlides();
  }, []);

  return <Slideshow slides={slides} />;
}
