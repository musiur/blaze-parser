"use client";

import { PdfParser } from "@/app/_utils/components/pdf-parser";
import { Badge } from "@/components/ui/badge";

const ResumeUpload = ({ resumeData }: { resumeData: string }) => {
  return (
    <div className="space-y-40">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg md:text-xl">My Resume</h3>
            <Badge>Extracted</Badge>
          </div>
          <p className="text-gray-500 text-sm">
            {resumeData
              ? "This is your resume data that we have extracted"
              : "You don't have a resume yet"}
            , you can upload a new one to update it.
          </p>
        </div>
        {resumeData ? (
          <div className="bg-gray-100 p-4 rounded-lg border-b-4 border-green-800 break-words">
            {resumeData?.slice(0, 100)}...
          </div>
        ) : null}
      </div>
      <PdfParser reupload={resumeData ? true : false} />
    </div>
  );
};

export default ResumeUpload;
