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
import { X } from "lucide-react";
import Link from "next/link";
import SideNavLinks from "./sidenav-links";
import BrandLogo from "@/components/molecules/brand-logo";

const SideNav = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div
      className={clsx(
        "fixed top-0 z-50 left-0 w-auto border-r bg-white/60 backdrop-blur-xl lg:bg-gray-100/40 dark:bg-gray-800/40 min-h-[100vh] lg:relative min-w-[200px] transition-all duration-300",
        {
          "translate-x-[-100%] lg:translate-x-0": !open,
          "translate-x-0": open,
        }
      )}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center justify-between border-b px-6">
          <BrandLogo />
          <div
            className="border p-1 rounded-lg sm:hidden"
            role="button"
            onClick={() => setOpen(!open)}
          >
            <X />
          </div>
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
                <Button className="w-full">Contact Support</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
