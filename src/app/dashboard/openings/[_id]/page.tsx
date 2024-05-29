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
import { GetOpening } from "../../_utils/openings/opening.controller";

const Page = async ({ params }: { params: { _id: string } }) => {
  let userdata: any = {};
  try {
    const result = await GetOpening(params?._id);
    // console.log("->", result);
    if (result?.success) {
      userdata = result.data;
    }
  } catch (error) {
    console.log(error);
  }
  return (
    <Card className="max-w-[400px]">
      <CardHeader>
        <CardTitle>Opening: {userdata?.title}</CardTitle>
        <CardDescription>
          {userdata?.description?.slice(0, 350)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Location</span> {userdata?.location}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Salary</span> {userdata?.salary} BDT
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-end gap-4">
        <Link href="/dashboard/openings">
          <Button size="icon" variant="outline">
            <ChevronLeft className="w-4 h4" />
          </Button>
        </Link>
        <Link href={`/dashboard/openings/update/${params._id}`}>
          <Button variant="default">
            Update
            <ArrowUpRight className="w-4 h4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default Page;
