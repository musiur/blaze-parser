import { Button } from "@/components/ui/button";
import { Pen, View } from "lucide-react";
import Link from "next/link";
import DeleteAction from "./delete-action";
import { DeleteOpening } from "../openings/opening.controller";

const TableAction = ({ data, path }: { data: any; path: string }) => {
  const { _id } = data;
  return (
    <td className="flex items-center gap-1">
      <Link href={`${path}/${_id}`}>
        <Button size="icon" variant="outline">
          <View className="w-4 h-4" />
        </Button>
      </Link>
      <Link href={`${path}/update/${_id}`}>
        <Button size="icon" variant="outline">
          <Pen className="w-4 h-4" />
        </Button>
      </Link>
      <DeleteAction action={DeleteOpening} _id={_id} />
    </td>
  );
};

export default TableAction;
