import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import Link from "next/link";
import TableAction from "../_utils/components/table-action";
import {
  GetOpenings,
  GetOpeningsRecruiter,
} from "../_utils/actions/openings/opening.controller";
import { FileWarning } from "lucide-react";
import NoFile from "@/components/molecules/nofile";
import { Badge } from "@/components/ui/badge";

const Page = async () => {
  let openings: any[] = [];
  let userdata: any = null;
  try {
    userdata = JSON.parse(cookies().get("user")?.value || "");
    const result =
      userdata?.role === "recruiter"
        ? await GetOpeningsRecruiter()
        : await GetOpenings();
    openings = result?.data || [];
  } catch (error) {
    // need to console here to see the error
  }
  return (
    <div className="space-y-8 max-w-lg mx-auto">
      {openings?.length ? (
        <div className="grid grid-cols-1 gap-4 pb-16">
          {openings.length
            ? openings.map((opening) => {
                const { _id, title, salary, location, applications } = opening;

                return (
                  <div key={_id} className="p-4 rounded-lg border-4 border-white shadow-lg hover:border-primary bg-gradient-to-tl hover:bg-gradient-to-br from-white via-white to-gray-200 hover:to-secondary hover:opacity-100 transition duration-300 ease-in-out">
                    <h4 className="font-semibold text-md md:text-lg">
                      {title}
                    </h4>
                    <p className="text-gray-500">{location}</p>
                    <Badge>BDT {salary}</Badge>
                    <div className="flex justify-end">
                      <TableAction
                        data={opening}
                        path="/dashboard/openings"
                        role={userdata?.role || ""}
                        tableType="openings"
                        noApply={applications?.includes(userdata?._id) ? true : false}
                      />
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      ) : (
        <NoFile />
      )}
      {userdata?.role === "recruiter" ? (
        <div className="flex justify-end">
          <Link href="/dashboard/openings/open" className="w-full">
            <Button className="w-full uppercase">add a new opening</Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};
export default Page;
