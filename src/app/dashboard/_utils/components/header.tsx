"use client"

import { GET___COOKIE } from "@/app/_utils/actions/cookies";
import AvatarDropdown from "@/components/layout/avatar-dropdown";
import BrandLogo from "@/components/molecules/brand-logo";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const Header = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const [user, setUser] = useState<{ _id: string; role: string } | null>(null);
  const getUserData = async () => {
    const result = await GET___COOKIE("user");
    if(result?.success && result?.data) {
      setUser(result.data || null)
    }
  }
  useEffect(() => {
    getUserData();
  }, [])
  return (
    <div className="flex h-14 sm:h-[60px] items-center justify-between gap-4 border-b px-4 sm:px-6 sticky top-0 z-10 bg-white/80 backdrop-blur-sm">
      <BrandLogo className="lg:hidden"/>
      <div className="flex items-center gap-4">
        {user?.role ? <AvatarDropdown data={user} /> : null}
        <div className="border p-1 rounded-lg lg:hidden" role="button" onClick={() => setOpen(!open)}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
