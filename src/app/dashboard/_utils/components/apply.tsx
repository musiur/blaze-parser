"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Sun } from "lucide-react";
import { useState } from "react";

const Apply = ({ _id }: { _id: string }) => {
  const [pending, setPending] = useState(false);
  const applyNow = async () => {
    setPending(true);
    // setPending(false);
    setTimeout(() => setPending(false), 2000);
    console.log(_id);
  };
  return (
    <Button onClick={applyNow} disabled={pending} className="gap-0">
      <Sun
        className={clsx("h-4 animate-spin", {
          "w-0 opacity-0": !pending,
          "w-4 opacity-100": pending,
        })}
      />
      {pending ? null : "Apply"}
    </Button>
  );
};

export default Apply;
