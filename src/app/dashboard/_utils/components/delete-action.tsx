"use client";

import ResponseX from "@/components/molecules/response.x";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Sun, Trash } from "lucide-react";
import { useState } from "react";

const DeleteAction = ({ action, _id }: { action: Function; _id: string }) => {
  const [pending, setPending] = useState(false);
  const delAction = async () => {
    setPending(true);
    const result = await action(_id);
    setPending(false);
    ResponseX({ title: "Deletion", result });
  };
  return (
    <Button
      size="icon"
      variant="outline"
      onClick={delAction}
      disabled={pending}
      className="gap-0"
    >
      <Trash
        className={clsx("h-4 stroke-pink-700", {
          "w-0 opacity-0": pending,
          "w-4 opacity-100": !pending,
        })}
      />
      <Sun
        className={clsx("h-4 animate-spin", {
          "w-0 opacity-0": !pending,
          "w-4 opacity-100": pending,
        })}
      />
    </Button>
  );
};

export default DeleteAction;
