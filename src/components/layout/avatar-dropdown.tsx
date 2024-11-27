"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import Logout from "./logout";

const AvatarDropdown = ({ data }: { data: any }) => {
  const { name } = data;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 mr-2"
          size="icon"
          variant="ghost"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href={`/dashboard`}>
          <DropdownMenuLabel>{name}</DropdownMenuLabel>
        </Link>
        <DropdownMenuSeparator />
        <Link href={`/dashboard/`}>
          <DropdownMenuItem>Overview</DropdownMenuItem>
        </Link>
        <Link href={`/dashboard/settings`}>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Logout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
