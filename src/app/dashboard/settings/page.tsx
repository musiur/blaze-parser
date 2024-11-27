import { PdfParser } from "@/app/_utils/components/pdf-parser";
import { A_GetUser } from "@/app/auth/_utils/actions/user.controller";

const Page = async () => {
  const result: any = await A_GetUser();
  return (
    <div className="space-y-8">
      <div className="p-4 rounded-lg border inline-block">
        <h3 className="font-semibold text-lg md:text-xl">About Me</h3>
        <div>Name: {result?.data?.name}</div>
        <div>Email: {result?.data?.email}</div>
        <div className="capitalize">Role: {result?.data?.role}</div>
      </div>
      {result?.data?.role === "recruiter" ? null : (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg md:text-xl">My Resume</h3>
          {result?.data?.resumeData ? (
            <div className="bg-gray-100 p-4 rounded-lg border-b-4 border-primary/30 break-words">
              {result?.data?.resumeData}
            </div>
          ) : null}
          <PdfParser reupload={result?.data?.resumeData ? true : false} />
        </div>
      )}
    </div>
  );
};
export default Page;
