import Link from "next/link";

type TLink = { id: number; text: string; link: string };

const Navbar = () => {
  const Links: TLink[] = [
    {
      id: 0,
      text: "How it works",
      link: "#howitworks",
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
  return (
    <header className="bg-white/60 backdrop-blur-md [&>*]:text-primary sticky top-0 z-50 border-b">
      <nav className="container py-6 z-50 flex items-center justify-between gap-10">
        <Link href="/" className="text-xl md:text-2xl font-bold">
          BlazeParser
        </Link>
        <ul className="flex items-center justify-end gap-8">
          {Links.map((item: TLink) => {
            const { id, text, link } = item;
            return (
              <li key={id} className="hover:text-primary hover:underline">
                <Link href={link}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
