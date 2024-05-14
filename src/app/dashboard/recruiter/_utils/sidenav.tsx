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
import {
  BellIcon,
  CalendarIcon,
  ChevronRight,
  FileTextIcon,
  HomeIcon,
  Package2Icon,
  SettingsIcon,
  UserIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SideNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="fixed top-16 right-0 w-10 h-10 rounded-l-full bg-white border border-r-0 z-50 flex items-center justify-center min-[1000px]:hidden"
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
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Applicant Tracking</span>
            </Link>
            <Button
              className="inline-flex min-[1000px]:hidden ml-auto h-8 w-8"
              size="icon"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4 stroke-destructive" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <UserIcon className="h-4 w-4" />
                My Profile
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <FileTextIcon className="h-4 w-4" />
                Applications
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CalendarIcon className="h-4 w-4" />
                Calendar
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Contact our support team for any questions or issues.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/contact-us">
                  <Button className="w-full" size="sm">
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
