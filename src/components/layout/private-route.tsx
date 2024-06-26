import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const token = cookies().get("token");
  if (!token) {
    redirect("/auth/login");
  }
  return children;
};

export default PrivateRoute;
