import React from 'react';
import AboutUsItem from './AboutUsItem';
import { Icons } from '../icons/icons';
import Grid from 'components/grid';

type IconKey = 'FairPricingIcon' | 'QualityProductsIcon' | 'MadeWithLoveIcon' | 'ReturnsIcon' | 'FastDeliveriesIcon';

const AboutUs = () => {
    const sections: { iconKey: IconKey; title: string; }[] = [
        {
            iconKey: 'FairPricingIcon',
            title: 'Fair Pricing',
        },
        {
            iconKey: 'QualityProductsIcon',
            title: 'Quality Products',
        },
        {
            iconKey: 'MadeWithLoveIcon',
            title: 'Made with Love',
        },
        {
            iconKey: 'ReturnsIcon',
            title: '30-Day Returns',
        },
        {
            iconKey: 'FastDeliveriesIcon',
            title: 'Fast Deliveries',
        },
    ];

    return (
        <div className="flex justify-center py-12 bg-white">
            <div className="container mx-auto items">
                <h2 className="text-4xl font-bold text-center text-black mb-8 pb-2 border-b-2 border-red-500 ">Why Choose Us</h2>
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {sections.map((section, index) => (
                        <AboutUsItem
                            iconKey={section.iconKey}
                            key={index}
                            title={section.title}
                        />
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default AboutUs;
