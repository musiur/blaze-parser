import AvatarDropdown from "@/components/layout/avatar-dropdown";
import { Package2Icon } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";

const Header = () => {
  const user: { _id: string; role: string } = JSON.parse(
    cookies().get("user")?.value || "null"
  );
  return (
    <div className="flex h-14 sm:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-4 sm:px-6 dark:bg-gray-800/40">
      <Link className="sm:hidden" href="#">
        <Package2Icon className="h-6 w-6" />
        <span className="sr-only">Home</span>
      </Link>
      <div className="w-full flex-1">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      {user?.role ? <AvatarDropdown data={user} /> : null}
    </div>
  );
};

export default Header;
