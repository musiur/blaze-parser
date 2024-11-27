import { cookies } from "next/headers";
import TableAction from "../_utils/components/table-action";
import {
  GetApplicationsApplicant,
  GetApplicationsRecruiters,
} from "../_utils/actions/applications/application.controller";
import NoFile from "@/components/molecules/nofile";
import { Badge } from "@/components/ui/badge";

const Page = async () => {
  let applications: any[] = [];
  let userdata: any = null;
  try {
    userdata = JSON.parse(cookies().get("user")?.value || "");
    const result =
      userdata?.role === "recruiter"
        ? await GetApplicationsRecruiters()
        : await GetApplicationsApplicant();
    applications =
      result?.data?.sort((a: any, b: any) => b.similarity - a.similarity) || [];
  } catch (error) {
    // need to console to see error
  }

  return (
    <div className="space-y-8">
      {!applications?.length ? (
        <NoFile />
      ) : (
        <div className="rounded-xl overflow-auto border">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th>Role</th>
                <th>Location</th>
                <th>Type</th>
                <th>Status</th>
                <th>Similarity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.length ? (
                applications.map((application) => {
                  const { _id, openingId, title, jobType, location, status, similarity } =
                    application;
                  const similarityPercentage =
                    similarity < 10 ? (similarity * 10).toFixed(2) : similarity;
                  return (
                    <tr
                      key={_id}
                      className="border-b hover:bg-gradient-to-r from-white via-white to-secondary hover:opacity-100 transition duration-300 ease-in-out"
                    >
                      <td className="">{title}</td>
                      <td className="">{location}</td>
                      <td className="min-w-[200px]">
                        <Badge variant="outline">{jobType}</Badge>
                      </td>
                      <td className="">
                        <Badge
                          variant={
                            status === "accepted"
                              ? "default"
                              : status === "rejected"
                              ? "destructive"
                              : "secondary"
                          }
                          className="uppercase"
                        >
                          {status}
                        </Badge>
                      </td>
                      <td className="">{similarityPercentage}%</td>
                      <TableAction
                        data={application}
                        id={openingId}
                        path="/dashboard/applications"
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
      )}
    </div>
  );
};
export default Page;
