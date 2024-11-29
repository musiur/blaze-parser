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
    <div className="max-w-[600px] mx-auto border-none shadow-none space-y-8">
      <div className="flex flex-wrap justify-between gap-4">
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
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-xl md:text-3xl">
          Opening: {opening?.title}
        </h3>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Location</span> {opening?.location}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Salary</span> {opening?.salary} BDT
          </div>
        </div>
        <p>{opening?.description}</p>
      </div>
    </div>
  );
};
export default Page;
