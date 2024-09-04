import { cookies } from "next/headers";
import TableAction from "../_utils/components/table-action";
import {
  GetApplicationsApplicant,
  GetApplicationsRecruiters,
} from "../_utils/actions/applications/application.controller";

const Page = async () => {
  let openings: any[] = [];
  let userdata: any = null;
  try {
    userdata = JSON.parse(cookies().get("user")?.value || "");
    const result =
      userdata?.role === "recruiter"
        ? await GetApplicationsRecruiters()
        : await GetApplicationsApplicant();
    openings =
      result?.data?.sort((a: any, b: any) => b.similarity - a.similarity) || [];
  } catch (error) {
    // need to console to see error
  }
  console.log(openings);
  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <h2 className="text-lg md:text-xl font-semibold">Applications</h2>
      </div>

      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-secondary text-primary">
              <th>Role</th>
              <th>Location</th>
              <th>Type</th>
              <th>Status</th>
              <th>Similarity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {openings.length ? (
              openings.map((opening) => {
                const { _id, title, jobType, location, status, similarity } =
                  opening;
                return (
                  <tr key={_id} className="border-b border-r">
                    <td className="border-l">{title}</td>
                    <td className="border-l">{location}</td>
                    <td className="border-x">{jobType}</td>
                    <td className="border-x">{status}</td>
                    <td className="border-x">{similarity}%</td>
                    <TableAction
                      data={opening}
                      path="/dashboard/openings"
                      role={userdata?.role || ""}
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
