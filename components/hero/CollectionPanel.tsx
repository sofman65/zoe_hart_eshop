import Link from 'next/link';
import Image from 'next/image';

const CollectionPanel = () => {
    const collections = [
        { title: 'Just In', imageUrl: '/assets/placeholder1.jpg', link: '/collections/new-in' },
        { title: 'Necklaces', imageUrl: '/assets/placeholder2.jpg', link: '/collections/necklaces' },
        { title: 'Rings', imageUrl: '/assets/placeholder3.jpg', link: '/collections/rings' },
        { title: 'Earrings', imageUrl: '/assets/placeholder4.jpg', link: '/collections/earrings' },
    ];



    return (
        <div className="flex flex-wrap justify-between ">
            {collections.map((collection, index) => (
                <Link className="relative w-full md:w-1/4 p-2 flex-shrink-0 min-h-[400px]" href={collection.link} key={index}>



                    <div className="aspect-w-3 aspect-h-4">
                        <Image
                            src={collection.imageUrl}
                            alt={collection.title}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
                        <h3 className="text-lg font-bold">{collection.title}</h3>
                    </div>

                </Link>
            ))}
        </div>
    );
};

export default CollectionPanel;
