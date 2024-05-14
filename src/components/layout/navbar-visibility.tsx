"use client";

import { usePathname } from "next/navigation";
import { ReactElement } from "react";

const NavbarVisibility = ({ children }: { children: ReactElement }) => {
  const pathname = usePathname();

  return pathname.includes("/dashboard") ? null : children;
};

export default NavbarVisibility;
