"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Sun } from "lucide-react";
import { useState } from "react";
import { PostApplication } from "../actions/applications/application.controller";
import ResponseX from "@/components/molecules/response.x";

const Apply = ({ _id }: { _id: string }) => {
  const [pending, setPending] = useState(false);
  console.log(_id);
  const applyNow = async () => {
    setPending(true);

    const result = await PostApplication({ openingId: _id });
    ResponseX({ title: "Applying", result });
    setPending(false);
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
