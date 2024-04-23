"use client";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Menu } from "lucide-react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import NLP from "compromise";

type TLink = { id: number; text: string; link: string };

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const router = useRouter();
  const Links: TLink[] = [
    {
      id: 0,
      text: "How it works",
      link: "/how-it-works",
    },
    {
      id: 2,
      text: "About",
      link: "#about",
    },
    {
      id: 3,
      text: "Source Code",
      link: "#sourcecode",
    },
  ];
  // console.log(
  //   NLP(
  //     "Natural Language Processing with JavaScript -Tokenization,Parts of Speech & Entity Recognition"
  //   )
  //     .sentences()
  //     .terms()
  //     .out("array")
  // );
  return (
    <Fragment>
      <header className="bg-white/60 backdrop-blur-md [&>*]:text-primary sticky top-0 z-50 border-b">
        <nav className="container py-6 z-50 flex items-center justify-between gap-10">
          <Link href="/" className="text-xl md:text-2xl font-bold">
            BlazeParser
          </Link>
          <ul className="hidden md:flex items-center justify-end gap-8">
            {Links.map((item: TLink) => {
              const { id, text, link } = item;
              return (
                <li key={id} className="hover:text-primary hover:underline">
                  <Link href={link}>{text}</Link>
                </li>
              );
            })}
          </ul>
          <Menu
            role="button"
            onClick={() => setShowMobileNav(true)}
            className="flex md:hidden"
          />
        </nav>
      </header>
      <div
        className={clsx(
          "fixed top-0 left-0 w-full h-[100dvh] bg-white/60 backdrop-blur z-50 transition ease-in-out duration-500",
          {
            "translate-y-[-100dvh]": !showMobileNav,
            "translate-y-[0] flex md:hidden": showMobileNav,
          }
        )}
        onClick={() => {
          setShowMobileNav(false);
        }}
      >
        <ul className="space-y-8 container section">
          {Links.map((item: TLink) => {
            const { id, text, link } = item;
            return (
              <li key={id} className="hover:text-primary hover:underline">
                <span
                  role="button"
                  onClick={() => {
                    router.push(link);
                    setShowMobileNav(false);
                  }}
                >
                  {text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
