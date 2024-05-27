import PublicRoute from "@/components/layout/public-route";
import { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return <PublicRoute>{children}</PublicRoute>;
};

export default Layout;
