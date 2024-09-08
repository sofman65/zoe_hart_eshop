"use client";

import { getTrendingProducts } from 'lib/shopify';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Product } from 'lib/shopify/types';

export default function TrendingProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTrendingProducts() {
            const trendingProducts = await getTrendingProducts({
                sortKey: 'BEST_SELLING',
                reverse: false,
            });
            setProducts(trendingProducts);
            setLoading(false);
        }

        fetchTrendingProducts();
    }, []);

    return (
        <div className="mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg overflow-hidden flex flex-col">
                        <div className="relative aspect-square">
                            <Image
                                src={product.images[0]?.url || '/placeholder.jpg'}
                                alt={product.title}
                                layout="fill"
                                objectFit="cover"
                            />
                            <button className="absolute top-2 right-2 p-2">
                                <Heart className="w-6 h-6 text-gray-400" />
                            </button>
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <div>
                                <h3 className="text-lg font-semibold">{product.title}</h3>
                                <p className="text-sm text-gray-600">{product.variants[0]?.material || '18k gold plated brass'}</p>
                            </div>
                            <div>
                                <p className="text-lg font-bold mt-2">€{product.priceRange.minVariantPrice.amount}</p>
                                {!product.availableForSale && (
                                    <p className="text-sm text-gray-500 mt-1">Product will be shipped in 18 days</p>
                                )}
                                <button className="w-full mt-2 py-2 bg-white text-black border border-black text-sm">
                                    Add to bag
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
