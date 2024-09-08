import Link from 'next/link';
import Image from 'next/image';
import logo from 'public/logo/logo.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left section */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-center md:text-left">
              <Link href="/contact" className="hover:text-white transition-colors block">
                zwires.dhmiourgies@gmail.com
              </Link>
              <address className="not-italic mt-2">
                Klapanara 4, Drapetsona
                <br />
                18648, Pireas
              </address>
            </div>
            <div className="hidden md:block border-l border-gray-600 h-10"></div>
            <div className="text-center md:text-left">
              <Link href="/privacy-policy" className="hover:text-white transition-colors block">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Center section */}
          <div className="flex flex-col items-center">
            <Link href="/" prefetch={true}>
              <Image src={logo} width={60} height={70} alt="logo" />
            </Link>
            <p className="text-center mt-2">© {currentYear} Zoe Hart. All rights reserved.</p>
          </div>

          {/* Right section */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div>
              <Link href="https://instagram.com" className="hover:text-white transition-colors block">
                Instagram
              </Link>
              <Link href="https://tiktok.com" className="hover:text-white transition-colors block">
                TikTok
              </Link>
              <Link href="https://pinterest.com" className="hover:text-white transition-colors block">
                Pinterest
              </Link>
              <Link href="https://facebook.com" className="hover:text-white transition-colors block">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
