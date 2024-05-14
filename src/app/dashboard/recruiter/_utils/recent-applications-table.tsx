import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileTextIcon } from "lucide-react";

const RecentApplicationsTable = () => {
  return (
    <Card className="col-span-2 sm:col-span-1">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">
          Recent Applications
        </CardTitle>
        <FileTextIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Applicant</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">John Doe</TableCell>
              <TableCell>Software Engineer</TableCell>
              <TableCell>
                <Badge>Accepted</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Jane Smith</TableCell>
              <TableCell>Product Manager</TableCell>
              <TableCell>
                <Badge variant="secondary">Pending</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Bob Johnson</TableCell>
              <TableCell>UI/UX Designer</TableCell>
              <TableCell>
                <Badge variant="destructive" className="strike-out">
                  Rejected
                </Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Sarah Lee</TableCell>
              <TableCell>Data Analyst</TableCell>
              <TableCell>
                <Badge>Accepted</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Tom Wilson</TableCell>
              <TableCell>Sales Representative</TableCell>
              <TableCell>
                <Badge variant="secondary">Pending</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentApplicationsTable;
