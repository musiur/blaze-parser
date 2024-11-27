"use client";
import { ReactElement, useEffect, useState } from "react";
import SideNav from "./sidenav";
import Header from "./header";
import { usePathname } from "next/navigation";

const NavsWrapper = ({ children }: { children: ReactElement }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <SideNav open={open} setOpen={setOpen} />
      <div className="w-full">
        <Header open={open} setOpen={setOpen} />
        <div className="flex flex-1 flex-col p-8 gap-8">{children}</div>
      </div>
    </div>
  );
};

export default NavsWrapper;
