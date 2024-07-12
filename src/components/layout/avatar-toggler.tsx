import Link from "next/link";
import { Button } from "../ui/button";
import { cookies } from "next/headers";
import AvatarDropdown from "./avatar-dropdown";

const AvatarToggler = () => {
  const user: { _id: string; role: string } = JSON.parse(
    cookies().get("user")?.value || "null"
  );
  return !user?.role ? (
    <>
      <Link href="/auth/login">
        <Button className="hidden sm:inline-flex" variant="outline">
          Sign In
        </Button>
      </Link>
      <Link href="/auth/register">
        <Button className="hidden sm:inline-flex">Sign Up</Button>
      </Link>
    </>
  ) : (
    <AvatarDropdown data={user} />
  );
};

export default AvatarToggler;
