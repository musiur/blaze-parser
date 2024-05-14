import { ReactElement } from "react";
import { AuthProvider } from "./auth.context";

const ContextWrapper = ({ children }: { children: ReactElement }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ContextWrapper;
