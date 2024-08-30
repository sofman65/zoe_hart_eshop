import React from 'react';
import Image from 'next/image';

const SocialMedia = () => {
    const images = [
        '/assets/instagram1.jpg', // Replace with your actual paths
        '/assets/instagram2.jpg',
        '/assets/instagram3.jpg',
        '/assets/instagram4.jpg',
    ];

    return (
        <div className="bg-[#faf4ee] py-16">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Instagram</h2>
                <p className="text-gray-700">Tag us in your pictures @yourinstagramhandle</p>
            </div>
            <div className="flex overflow-x-auto gap-4 px-4">
                {images.map((src, index) => (
                    <div key={index} className="min-w-[250px]">
                        <Image
                            src={src}
                            alt={`Instagram image ${index + 1}`}
                            width={250}
                            height={250}
                            className="rounded-lg object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-4 mt-8">
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                    Follow us
                </button>
            </div>
        </div>
    );
};

export default SocialMedia;
