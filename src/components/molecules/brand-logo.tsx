import { MountainIcon } from "lucide-react";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2">
        <MountainIcon className="h-6 w-6" />
        <p className="text-xl md:text-2xl font-bold text-black">BlazeParser</p>
      </div>
    </Link>
  );
};

export default BrandLogo;
