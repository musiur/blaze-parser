import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import NavbarVisibility from "./navbar-visibility";
import AvatarToggler from "./avatar-toggler";
import BrandLogo from "../molecules/brand-logo";
import NavLink from "./navlink";
import { ShinyButton } from "../molecules/shiny-button";

export default function Navbar() {
  const NavLinkItems = [
    {
      id: 1,
      text: "Home",
      link: "/",
    },
    {
      id: 2,
      text: "About",
      link: "/about-us",
    },
    {
      id: 3,
      text: "Contact",
      link: "/contact-us",
    },
  ];
  return (
    <NavbarVisibility>
      <header className="fixed top-4 px-4 w-full z-50">
        <nav className="bg-white/80 backdrop-blur-lg rounded-2xl px-4 max-w-3xl mx-auto shadow-lg">
          <div className="flex items-center justify-between h-16 ">
            <BrandLogo />
            <nav className="hidden items-center font-medium md:flex gap-4 ">
              {NavLinkItems.map(
                (item: { id: number; text: string; link: string }) => {
                  const { id, text, link } = item;
                  return (
                    <NavLink key={id} data={{ id, name: text, href: link }} />
                  );
                }
              )}
            </nav>
            <div className="flex items-center space-x-2">
              <Link href="/auth/login">
                <ShinyButton className="hidden sm:inline-flex">
                  Get Started
                </ShinyButton>
              </Link>
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
                          <Link key={id} className="" href={link}>
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
      </header>
    </NavbarVisibility>
  );
}
