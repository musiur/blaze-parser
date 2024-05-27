import Statistics from "./_utils/statistics";
import RecentApplicationsTable from "./_utils/recent-applications-table";
import ApplicantUpdates from "./_utils/applicants-update";

export default function RecruiterDashboard() {
  return (
    <div className="space-y-4">
      <Statistics />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 sm:gap-4">
        <RecentApplicationsTable />
        <ApplicantUpdates />
      </div>
    </div>
  );
}
