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
        <div className="flex justify-center ">
            <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {sections.map((section, index) => (
                    <AboutUsItem
                        iconKey={section.iconKey}
                        key={index}
                        title={section.title}
                        className={`${index === 3 || index === 4 ? 'lg:ml-[350px] xl:ml-0' : ''
                            }`} // Adjust margin for 4th and 5th items
                    />
                ))}
            </Grid>
        </div>
    );
};

export default AboutUs;
