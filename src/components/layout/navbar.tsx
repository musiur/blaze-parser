import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { MenuIcon, MountainIcon } from "lucide-react";
import NavbarVisibility from "./navbar-visibility";
import AvatarToggler from "./avatar-toggler";

export default function Navbar() {
  const NavLinkItems = [
    {
      id: 1,
      text: "Home",
      link: "/",
    },
    {
      id: 2,
      text: "About us",
      link: "/about-us",
    },
    {
      id: 3,
      text: "Contact us",
      link: "/contact-us",
    },
  ];
  return (
    <NavbarVisibility>
      <nav className="bg-white shadow-sm dark:bg-gray-950">
        <div className="container flex items-center justify-between h-16 ">
          <Link
            className="flex items-center text-lg font-semibold space-x-2"
            href="/"
          >
            <MountainIcon className="h-6 w-6" />
            <span className="font-bold">BlazeParser</span>
          </Link>
          <nav className="hidden items-center text-sm font-medium md:flex">
            {NavLinkItems.map(
              (item: { id: number; text: string; link: string }) => {
                const { id, text, link } = item;
                return (
                  <Link
                    key={id}
                    className="relative inline-block rounded-none bg-transparent text-gray-900 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-gradient-to-b   before:transition-all before:duration-300 hover:before:w-full hover:bg-gradient-to-b from-white to-gray-100 hover:text-gray-900 dark:text-gray-50 dark:before:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 p-4"
                    href={link}
                  >
                    {text}
                  </Link>
                );
              }
            )}
          </nav>
          <div className="flex items-center space-x-2">
            <AvatarToggler />
            <Sheet>
              <SheetTrigger asChild>
                <Button className="sm:hidden" size="icon" variant="ghost">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 p-4">
                  {NavLinkItems.map(
                    (item: { id: number; text: string; link: string }) => {
                      const { id, text, link } = item;
                      return (
                        <Link
                          key={id}
                          className="relative inline-block rounded-none bg-transparent text-gray-900 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-gradient-to-b   before:transition-all before:duration-300 hover:before:w-full hover:bg-gradient-to-b from-white to-gray-100 hover:text-gray-900 dark:text-gray-50 dark:before:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 p-4"
                          href={link}
                        >
                          {text}
                        </Link>
                      );
                    }
                  )}
                  <div className="flex flex-col space-y-2">
                    <AvatarToggler />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </NavbarVisibility>
  );
}
