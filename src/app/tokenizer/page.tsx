"use client";

import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

const Tokenizer = () => {
  const [file, setFile] = useState<any>(null);
  const [fileReadText, setFileReadText] = useState("");
  return (
    <div className="section container">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Tokenization
      </h1>
      <form>
        <input
          type="file"
          onChange={(event) => {
            event.preventDefault();
            setFile(event.target.files![0]);

            // Call the utility function to get text from PDF
            getPdfText(event.target.files![0])
              .then((text) => setFileReadText(text))
              .catch((error) => console.error("Error:", error));
          }}
        />
      </form>
    </div>
  );
};

export default Tokenizer;

async function getPdfText(pdfPath: any) {
  // Load the PDF document
  const loadingTask = pdfjsLib.getDocument(pdfPath);
  const pdf = await loadingTask.promise;

  // Initialize an empty string to store text content
  let textContent = "";

  // Iterate through each page of the PDF
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    // Get the page
    const page = await pdf.getPage(pageNum);

    // Extract text content from the page
    const pageText = await page.getTextContent();

    // Concatenate text from this page to the overall text content
    pageText.items.forEach((item: any) => {
      textContent += item.str + " ";
    });
  }

  // Return the concatenated text content
  return textContent;
}
