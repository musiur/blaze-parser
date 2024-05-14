/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mniPp3TYiuJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  BellIcon,
  CalendarIcon,
  CircleCheckIcon,
  CircleXIcon,
  ClockIcon,
  FileTextIcon,
  HomeIcon,
  Package2Icon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SideNav from "./_utils/sidenav";
import Statistics from "./_utils/statistics";
import RecentApplicationsTable from "./_utils/recent-applications-table";
import ApplicantUpdates from "./_utils/applicants-update";
import Header from "./_utils/header";

export default function RecruiterDashboard() {
  const tabs = [
    {
      id: 1,
      text: "Dashboard",
      link: "/dashboard/recruiter",
    },
    {
      id: 2,
      text: "My Profile",
      link: "/dashboard/my-profile",
    },
    {
      id: 3,
      text: "Applications",
      link: "/dashboard/applications",
    },
    {
      id: 4,
      text: "Calendar",
      link: "/dashboard/calendar",
    },
    {
      id: 5,
      text: "Settings",
      link: "/dashboard/settings",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <SideNav />

      <div className="w-full">
        <Header />
        <div className="flex flex-1 flex-col p-8 gap-8">
          <Statistics />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 sm:gap-4">
            <RecentApplicationsTable />
            <ApplicantUpdates />
          </div>
        </div>
      </div>
    </div>
  );
}
