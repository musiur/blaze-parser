"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { ChevronRight, Package2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SideNavLinks from "./sidenav-links";
import BrandLogo from "@/components/molecules/brand-logo";

const SideNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="fixed top-16 right-0 w-10 h-10 rounded-l-full border border-r-0 z-50 flex items-center justify-center min-[1000px]:hidden"
        role="button"
        onClick={() => setOpen(!open)}
      >
        <ChevronRight />
      </div>
      <div
        className={clsx(
          "fixed top-0 z-50 left-0 w-auto border-r bg-white/60 backdrop-blur-xl min-[1000px]:bg-gray-100/40 dark:bg-gray-800/40 min-h-[100vh] min-[1000px]:relative min-w-[200px] transition-all duration-300",
          {
            "translate-x-[-100%] min-[1000px]:translate-x-0": !open,
            "translate-x-0": open,
          }
        )}
      >
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <BrandLogo />
          </div>
          <div className="flex-1 overflow-auto py-2">
            <SideNavLinks />
          </div>
          <div className="mt-auto p-4">
            <Card className="border-border shadow-none">
              <CardHeader className="pb-4">
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Contact our support team for any questions or issues.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/contact-us">
                  <Button className="w-full">
                    Contact Support
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
