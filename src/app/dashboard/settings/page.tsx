import { PdfParser } from "@/app/_utils/components/pdf-parser";
import { A_GetUser } from "@/app/auth/_utils/actions/user.controller";

const Page = async () => {
  const result = await A_GetUser();
  console.log(result);
  return (
    <div className="">
      {result?.data?.resumeData ? (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg md:text-xl">Your resume</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            {result?.data?.resumeData}
          </div>
        </div>
      ) : (
        <PdfParser />
      )}
    </div>
  );
};
export default Page;
