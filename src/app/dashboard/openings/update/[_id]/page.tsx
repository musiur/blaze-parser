import { GetOpening } from "@/app/dashboard/_utils/actions/openings/opening.controller";
import OpeningUpdateForm from "../_utils/opening-update-form";

const Page = async ({ params }: { params: { _id: string } }) => {
  const result = await GetOpening(params._id);

  return (
    <div>
      <OpeningUpdateForm
        _id={params._id}
        defaultValues={result?.data || defaultValues}
      />
    </div>
  );
};

export default Page;

const defaultValues = {
  title: "",
  description: "",
  jobType: "full-time",
  salary: 0,
  location: "",
  recruiter: "ddd",
  applications: [],
};
