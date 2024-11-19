import Link from "next/link";
import { cookies } from "next/headers";
import AvatarDropdown from "./avatar-dropdown";
import { ShinyButton } from "../molecules/shiny-button";

const AvatarToggler = () => {
  const user: { _id: string; role: string } = JSON.parse(
    cookies().get("user")?.value || "null"
  );
  return !user?.role ? (
    <Link href="/auth/login">
      <ShinyButton>Get Started</ShinyButton>
    </Link>
  ) : (
    <AvatarDropdown data={user} />
  );
};

export default AvatarToggler;
