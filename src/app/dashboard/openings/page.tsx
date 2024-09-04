import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import Link from "next/link";
import TableAction from "../_utils/components/table-action";
import {
  GetOpenings,
  GetOpeningsRecruiter,
} from "../_utils/actions/openings/opening.controller";

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
    <div className="space-y-8">
      <div className="flex justify-between">
        <h2 className="text-lg md:text-xl font-semibold">Openings</h2>
        {userdata?.role === "recruiter" ? (
          <Link href="/dashboard/openings/open">
            <Button>Open</Button>
          </Link>
        ) : null}
      </div>

      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-secondary text-primary">
              <th>Role</th>
              <th>Location</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {openings.length ? (
              openings.map((opening) => {
                const { _id, title, salary, location } = opening;
                console.log(_id);
                return (
                  <tr key={_id} className="border-b border-r">
                    <td className="border-l">{title}</td>
                    <td className="border-l">{location}</td>
                    <td className="border-x">{salary}</td>
                    <TableAction
                      data={opening}
                      path="/dashboard/openings"
                      role={userdata?.role || ""}
                      tableType="openings"
                    />
                  </tr>
                );
              })
            ) : (
              <tr className="text-center">
                <td className="w-full text-center py-8f">No data found!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Page;
