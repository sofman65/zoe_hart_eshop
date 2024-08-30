import React from 'react';
import KSItem from './KSItem';
import Grid from 'components/grid';

const KSI = () => {
    const sections = [
        {
            title: 'Fair Pricing',
            imageSrc: '/assets/placeholder_image1.jpg', // Update the path to your placeholder image
        },
        {
            title: 'Quality Products',
            imageSrc: '/assets/placeholder_image1.jpg', // Update the path to your placeholder image
        },
        {
            title: 'Made with Love',
            imageSrc: '/assets/placeholder_image1.jpg', // Update the path to your placeholder image
        },
        {
            title: '30-Day Returns',
            imageSrc: '/assets/placeholder_image1.jpg', // Update the path to your placeholder image
        },
        {
            title: 'Fast Deliveries',
            imageSrc: '/assets/placeholder_image1.jpg', // Update the path to your placeholder image
        },
    ];

    return (
        <div className="flex justify-center mt-10">
            <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {sections.map((section, index) => (
                    <KSItem
                        key={index}
                        imageSrc={section.imageSrc}
                        title={section.title}
                        className={`${index === 3 || index === 4 ? 'lg:ml-12 xl:ml-0' : ''
                            }`} // Adjust margin for 4th and 5th items
                    />
                ))}
            </Grid>
        </div>
    );
};

export default KSI;
