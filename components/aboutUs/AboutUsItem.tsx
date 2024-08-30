import React from 'react';
import { Icons } from '../icons/icons'; // Import your Icons object

interface AboutUsItemProps {
    iconKey: keyof typeof Icons; // This ensures iconKey matches a valid icon from Icons
    title: string;
    className?: string; // To handle custom ordering
    imageSrc?: string; // To handle custom images
}

const AboutUsItem: React.FC<AboutUsItemProps> = ({ iconKey, title, className }) => {
    const IconComponent = Icons[iconKey];

    return (
        <div className={`flex flex-col items-center text-center p-4 hover:bg-gray-800 rounded-lg transition-colors duration-300 ${className}`}>
            <div className="flex justify-center items-center w-16 h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-4 shadow-lg">
                <IconComponent className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-white" aria-label={title} />
            </div>
            <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-white">{title}</h3>
        </div>
    );
};

export default AboutUsItem;
