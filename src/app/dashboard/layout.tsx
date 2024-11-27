import PrivateRoute from "@/components/layout/private-route";
import { ReactElement } from "react";
import NavsWrapper from "./_utils/components/navs-wrapper";

const DashboardLayout = ({ children }: { children: ReactElement }) => {
  return (
    <PrivateRoute>
      <NavsWrapper>{children}</NavsWrapper>
    </PrivateRoute>
  );
};

export default DashboardLayout;
