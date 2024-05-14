/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAuth } from "@/lib/contexts/auth.context";
import { useRouter } from "next/navigation";
import { ReactElement, useEffect, useState } from "react";

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    !user && router.push("/auth/login");
  }, [user]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  return user && isClient ? children : <div>Authenticating...</div>;
};

export default PrivateRoute;
