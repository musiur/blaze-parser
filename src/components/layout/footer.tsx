/**
 * Author : Musiur Alam Opu
 * Date: 4/29/24
 */

import Link from "next/link";
import BrandLogo from "../molecules/brand-logo";
import FooterVisibility from "./footer-visibility";

const Footer = () => {
  return (
    <FooterVisibility>
      <>
        <footer className="container mx-auto bg-white border-t py-12 md:py-16 lg:py-20">
          <div className="px-4 md:px-6 flex flex-col items-center gap-8 md:gap-12">
            <BrandLogo />
            <div className="flex items-center space-x-2">
              <Link className="text-gray-500 hover:text-gray-700" href="#">
                <TwitterIcon className="h-5 w-5 stroke-[1.5px]" />
              </Link>
              <Link className="text-gray-500 hover:text-gray-700" href="#">
                <FacebookIcon className="h-5 w-5 stroke-[1.5px]" />
              </Link>
              <Link className="text-gray-500 hover:text-gray-700" href="#">
                <InstagramIcon className="h-5 w-5 stroke-[1.5px]" />
              </Link>
              <Link className="text-gray-500 hover:text-gray-700" href="#">
                <LinkedinIcon className="h-5 w-5 stroke-[1.5px]" />
              </Link>
            </div>
          </div>
        </footer>
        <div className="w-full bg-gray-100 text-gray-600 py-4 text-center text-sm">
          All rights reserved @{new Date().getFullYear()}
        </div>
      </>
    </FooterVisibility>
  );
};

export default Footer;

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
