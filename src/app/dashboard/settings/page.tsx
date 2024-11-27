import { A_GetUser } from "@/app/auth/_utils/actions/user.controller";
import ResumeUpload from "../_utils/components/resume-upload";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Page = async () => {
  const result: any = await A_GetUser();
  console.log(result)
  return (
    <div className="space-y-8 max-w-lg mx-auto grid grid-cols-1 gap-4">
      <div className="space-y-2">
      <h2 className="text-2xl font-semibold">Hello there!</h2>
      <div className="p-4 rounded-lg border flex items-center gap-4 bg-gradient-to-tl from-white via-white to-secondary">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{result?.data?.name?.slice(0, 2)}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span>{result?.data?.name}</span>
            <Badge>{result?.data?.role}</Badge>
          </div>
          <div className="text-gray-500">{result?.data?.email}</div>
        </div>
      </div>
      </div>
      {result?.data?.role === "recruiter" ? null : (
        <ResumeUpload resumeData={result?.data?.resumeData} />
      )}
    </div>
  );
};
export default Page;
