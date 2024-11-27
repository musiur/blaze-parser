"use client";

import { GearIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { BriefcaseBusiness, Dock, SwatchBook, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

const SideNavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      {Links.map(
        (item: {
          id: number;
          text: string;
          link: string;
          icon: ReactElement;
        }) => {
          const { id, text, link, icon } = item;
          return (
            <Link
              key={id}
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-gray-900 [&>svg]:h-4 [&>svg]:w-4 font-medium",
                {
                  "bg-gradient-to-l from-white to-secondary text-primary": pathname === link,
                  "bg-none hover:bg-gray-200": pathname !== link,
                }
              )}
              href={link}
            >
              {icon}
              {text}
            </Link>
          );
        }
      )}
    </nav>
  );
};

export default SideNavLinks;

const Links = [
  {
    id: 1,
    text: "Overview",
    link: "/dashboard",
    icon: <SwatchBook />,
  },
  {
    id: 2,
    text: "Openings",
    link: "/dashboard/openings",
    icon: <BriefcaseBusiness />,
  },
  {
    id: 3,
    text: "Applications",
    link: "/dashboard/applications",
    icon: <Dock />,
  },
  {
    id: 4,
    text: "Settings",
    link: "/dashboard/settings",
    icon: <GearIcon />,
  },
];
