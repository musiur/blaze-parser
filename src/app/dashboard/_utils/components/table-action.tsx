import { Button } from "@/components/ui/button";
import { Eye, Pen } from "lucide-react";
import Link from "next/link";
import DeleteAction from "./delete-action";
import Apply from "./apply";
import { DeleteOpening } from "../actions/openings/opening.controller";

const TableAction = ({
  data,
  id,
  path,
  role = "applicant",
  tableType = "applications",
  noApply = false
}: {
  data: any;
  id?: string;
  path: string;
  role?: string;
  tableType?: "applications" | "openings";
  noApply?: boolean;
}) => {
  const { _id } = data;
  return (
    <div className="flex items-center justify-center gap-2 py-2">
      <Link href={`${path}/${id || _id}`}>
        <Button  variant="outline">
          View
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
      ) : tableType === "openings" ? (
        <Apply _id={_id} noApply={noApply} />
      ) : null}
    </div>
  );
};

export default TableAction;
