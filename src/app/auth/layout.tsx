import PublicRoute from "@/components/layout/public-route";
import { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <PublicRoute>
      <div className="bg-gradient-to-t from-white via-white to-secondary">
        {children}
      </div>
    </PublicRoute>
  );
};

export default Layout;
