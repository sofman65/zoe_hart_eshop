import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getTrendingProducts } from 'lib/shopify';


export default async function TrendingProductsPage() {
    const products = await getTrendingProducts({
        sortKey: 'BEST_SELLING',
        reverse: false
    });

    const resultsText = products.length > 1 ? 'products' : 'product';

    return (
        <>
            <p className="mb-4">
                {products.length === 0
                    ? 'There are no trending products available at the moment.'
                    : `Showing ${products.length} trending ${resultsText}.`}
            </p>
            {products.length > 0 ? (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductGridItems products={products} />
                </Grid>
            ) : null}
        </>
    );
}
