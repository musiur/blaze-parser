import { Button } from "@/components/ui/button";
import { Pen, View } from "lucide-react";
import Link from "next/link";
import DeleteAction from "./delete-action";
import Apply from "./apply";
import { DeleteOpening } from "../actions/openings/opening.controller";

const TableAction = ({
  data,
  path,
  role = "applicant",
}: {
  data: any;
  path: string;
  role?: string;
}) => {
  const { _id } = data;
  return (
    <td className="flex items-center gap-2">
      <Link href={`${path}/${_id}`}>
        <Button size="icon" variant="outline">
          <View className="w-4 h-4" />
        </Button>
      </Link>
      {role === "recruiter" ? (
        <>
          <Link href={`${path}/update/${_id}`}>
            <Button size="icon" variant="outline">
              <Pen className="w-4 h-4" />
            </Button>
          </Link>
          <DeleteAction action={DeleteOpening} _id={_id} />
        </>
      ) : (
        <Apply _id={_id} />
      )}
    </td>
  );
};

export default TableAction;
