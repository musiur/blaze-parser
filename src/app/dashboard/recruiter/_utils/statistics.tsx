import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CircleCheckIcon,
  CircleXIcon,
  ClockIcon,
  FileTextIcon,
} from "lucide-react";

const Statistics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Total Applications
          </CardTitle>
          <FileTextIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">342</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Pending Applications
          </CardTitle>
          <ClockIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">87</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            +12.3% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Accepted Applications
          </CardTitle>
          <CircleCheckIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">154</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            +15% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Rejected Applications
          </CardTitle>
          <CircleXIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">101</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            +8.2% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Statistics;
