import { MountainIcon } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

const BrandLogo = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2">
        <Logo className="h-6 w-6" />
        <p className="text-xl font-bold ">BlazeParser</p>
      </div>
    </Link>
  );
};

export default BrandLogo;
