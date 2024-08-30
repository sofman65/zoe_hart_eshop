import React from 'react';
import Image from 'next/image';

interface KSIProps {
    imageSrc: string;
    title: string;
    className?: string; // Accept className prop for custom styling
}

const KSItem: React.FC<KSIProps> = ({ imageSrc, title, className }) => {
    return (
        <div className={`flex flex-col items-center text-center p-4 hover:bg-gray-800 rounded-lg transition-colors duration-300 ${className}`}>
            <div className="w-16 h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32 mb-4 shadow-lg">
                <Image
                    src={imageSrc}
                    alt={title}
                    className="rounded-full"
                    width={128}
                    height={128}
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
            <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-white">{title}</h3>
        </div>
    );
};

export default KSItem;
