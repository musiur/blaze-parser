"use client";

import { A_Logout } from "@/app/auth/_utils/auth.controller";
import { toast } from "../ui/use-toast";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const logout = async () => {
    const result = await A_Logout();
    toast({
      title: "Logout",
      description: result?.message,
    });
    router.push("/auth/login");
  };
  return (
    <span
      role="button"
      className="px-2 rounded-md text-center text-pink-600 bg-gray-100 inline-flex w-full py-1 items-center justify-start gap-1"
      onClick={logout}
    >
      <LogOut className="w-4 h-4" /> Logout
    </span>
  );
};

export default Logout;
