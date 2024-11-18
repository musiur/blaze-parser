"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type Type___Navlink = { id: number; name: string; href: string }

const NavLink = ({
  data,
}: {
  data: Type___Navlink;
}) => {
  const { id, name, href } = data;
  const pathname = usePathname();
  return (
    <Link key={id} href={href}>
      <div className="hover:text-green-700 relative transition ease-in-out duration-500">
        {name}
        <div
          className={clsx(
            "w-1 h-1 absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full transition ease-in-out duration-500",
            {
              "bg-green-700": pathname === href,
              "bg-gray-300 dark:bg-gray-600": pathname !== href,
            }
          )}
        ></div>
      </div>
    </Link>
  );
};

export default NavLink;
