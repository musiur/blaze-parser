import { FileWarning } from "lucide-react";

const NoFile = () => {
  return (
    <div className="flex flex-col items-center justify-center section gap-4">
      <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full text-primary">
        <FileWarning className="h-10 w-10" />
      </div>
      <p className="text-lg font-semibold">No data found!</p>
    </div>
  );
};

export default NoFile;
