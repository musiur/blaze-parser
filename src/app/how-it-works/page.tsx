import { TextExtractionFromPDF } from "../_utils/components/extract-text-from-pdf";

const GetStarted = () => {
  return (
    <div className="container section hero-gap space-y-10">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold">Raw Data Extraction</h1>
        <p>
          At first, we get the Resume/CV in pdf format and extract whather data
          available in the document
        </p>
      </div>
      <TextExtractionFromPDF />
    </div>
  );
};

export default GetStarted;
