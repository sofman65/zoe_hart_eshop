import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import logo from "public/logo/logo.svg";
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';


import ShopByDropdown from './ShopByDropdown';

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  const shopByMenu = await getMenu('shop-by-menu');  // This should match the handle in Shopify

  console.log('Navbar rendered');
  console.log('menu:', menu);
  console.log('shopByMenu:', shopByMenu);

  // Map shopByMenu to the correct format
  const formattedShopByMenu = shopByMenu.map(item => ({
    ...item,
    url: item.path // Add this line to map 'path' to 'url'
  }));

  console.log('formattedShopByMenu:', formattedShopByMenu);

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-24 bg-white">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full">
          <Link
            href="/"
            prefetch={true}
            className='pr-16'
          >
            <Image
              src={logo}
              width={60}
              height={70}
              alt='logo'
            />
          </Link>
          {menu.length ? (
            <ul className="hidden text-sm md:flex md:items-center gap-8">
              {menu.map((item: Menu) => (
                <li key={item.title} className="grid place-items-center">
                  {item.title === 'SHOP BY' ? (
                    <ShopByDropdown menuItems={shopByMenu} />
                  ) : (
                    <Link
                      href={item.path}
                      prefetch={true}
                      className={` tracking-wider underline-offset-8 hover:text-black font-light transition-all duration-300 ease-in-out hover:underline ${item.title === 'SALES' ? 'text-red-500 hover:text-red-500' : 'text-black/60'
                        }`}
                    >
                      <span className="block w-full text-center">
                        {item.title}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="flex justify-end md:w-1/3">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}