import PrivateRoute from "@/components/layout/private-route";
import { ReactElement } from "react";
import Header from "./_utils/components/header";
import SideNav from "./_utils/components/sidenav";

const DashboardLayout = ({ children }: { children: ReactElement }) => {
  return (
    <PrivateRoute>
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        <SideNav />
        <div className="w-full">
          <Header />
          <div className="flex flex-1 flex-col p-8 gap-8">{children}</div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default DashboardLayout;
