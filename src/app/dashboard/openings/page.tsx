import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import Link from "next/link";
import { GetOpeningsRecruiter } from "../_utils/openings/opening.controller";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TableAction from "../_utils/components/table-action";

const Page = async () => {
  let openings: any[] = [];
  try {
    const result = await GetOpeningsRecruiter();
    // console.log("------", result);
    openings = result?.data || [];
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Openings</CardTitle>
        </CardHeader>
        <CardContent className="overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th>Role</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {openings.length
                ? openings.map((opening) => {
                    const { _id, title, salary, location } = opening;
                    return (
                      <tr key={_id} className="border-b">
                        <td>{title}</td>
                        <td>{location}</td>
                        <td>{salary}</td>
                        <TableAction
                          data={opening}
                          path="/dashboard/openings"
                        />
                      </tr>
                    );
                  })
                : "No data found!"}
            </tbody>
          </table>
        </CardContent>
      </Card>
      <div className="flex justify-end">
        <Link href="/dashboard/openings/open">
          <Button>Open</Button>
        </Link>
      </div>
    </div>
  );
};
export default Page;
