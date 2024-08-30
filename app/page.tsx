import DynamicSlideshow from 'components/hero/dynamicSlideshow';
import Footer from 'components/layout/footer';
import CollectionPanel from 'components/hero/CollectionPanel';
import TrendingProducts from 'components/featureditems/TrendingItems';
export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <DynamicSlideshow />
      <CollectionPanel />
      <TrendingProducts />
      <Footer />
    </>
  );
}
