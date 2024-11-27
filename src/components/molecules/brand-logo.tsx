import { MountainIcon } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";
import clsx from "clsx";

const BrandLogo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <div className={clsx(className, "flex items-center space-x-2")}>
        <Logo className="h-6 w-6" />
        <p className="text-xl font-bold ">BlazeParser</p>
      </div>
    </Link>
  );
};

export default BrandLogo;
