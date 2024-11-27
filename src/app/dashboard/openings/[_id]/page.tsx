import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { GetOpening } from "../../_utils/actions/openings/opening.controller";
import { cookies } from "next/headers";
import Apply from "../../_utils/components/apply";

const Page = async ({ params }: { params: { _id: string } }) => {
  let opening: any = {};
  let userdata = null;
  try {
    userdata = JSON.parse(cookies().get("user")?.value || "");
    const result = await GetOpening(params?._id);
    if (result?.success) {
      opening = result.data;
    }
  } catch (error) {
    throw new Error("User role not found");
  }
  return (
    <Card className="max-w-[400px] mx-auto border-none shadow-none">
      <CardHeader>
        <CardTitle>Opening: {opening?.title}</CardTitle>
        <CardDescription>{opening?.description?.slice(0, 350)}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Location</span> {opening?.location}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Salary</span> {opening?.salary} BDT
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between gap-4">
        <Link href="/dashboard/openings">
          <Button size="icon" variant="outline">
            <ChevronLeft className="w-4 h4" />
          </Button>
        </Link>
        {userdata?.role === "recruiter" ? (
          <Link href={`/dashboard/openings/update/${params._id}`}>
            <Button variant="default">
              Update
              <ArrowUpRight className="w-4 h4" />
            </Button>
          </Link>
        ) : (
          <Apply
            _id={params?._id}
            noApply={
              opening?.applications?.includes(userdata?._id) ? true : false
            }
          />
        )}
      </CardFooter>
    </Card>
  );
};
export default Page;
