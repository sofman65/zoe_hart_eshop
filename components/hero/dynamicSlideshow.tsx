import { getFilteredMediaImages } from 'lib/shopify';
import Slideshow from './slideshow';

export default async function DynamicSlideshow() {
  const slidesData = await getFilteredMediaImages();

  const slides = slidesData.map((item) => ({
    image: item.image.originalSrc,
    title: item.alt || 'Slide Image',
  }));

  return <Slideshow slides={slides} />;
}
