import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getTrendingProducts } from 'lib/shopify';

export default async function TrendingProductsPage() {
    const products = await getTrendingProducts({
        sortKey: 'BEST_SELLING',
        reverse: false,
    });

    return (
        <div className='container ml-5'>
            <p className="mb-6 space-y-10 text-3xl font-bold text-left text-white">
                {products.length === 0
                    ? 'There are no trending products available at the moment.'
                    : `Trending Now`}
            </p>
            {products.length > 0 ? (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductGridItems products={products} />
                </Grid>
            ) : null}
        </div>
    );
}
