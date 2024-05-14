import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BellIcon } from "lucide-react";

const ApplicantUpdates = () => {
  return (
    <Card className="w-full ">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Applicant Updates</CardTitle>
        <BellIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3].map((item: number) => {
            return (
              <div key={item} className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Submitted a new application for the Software Engineer role.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    2 hours ago
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicantUpdates;
