/* eslint-disable react-hooks/exhaustive-deps */
"use client";

//@ts-ignore
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
//@ts-ignore
import pdfToText from "react-pdftotext";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Sun, Upload } from "lucide-react";
import { UploadResumeAction } from "../actions/resume-upload";

const FormSchema = z.object({
  pdfFile: z.string().min(10),
});

export function PdfParser({ reupload = false }: { reupload?: boolean }) {
  const [pdfFileText, setPdfFileText] = useState("");
  const [selectdPdfFileName, setSelectdPdfFileName] =
    useState("No file selected");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pdfFile: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    data.pdfFile = pdfFileText;

    try {
      const result = await UploadResumeAction(pdfFileText);
      if (result.success) {
        window.location.reload();
      }
    } catch (error) {
      throw new Error("Could not update resume content in user");
    }

    if (!data.pdfFile) {
      form.setError(
        "pdfFile",
        {
          type: "manual",
          message: "No file selected!",
        },
        { shouldFocus: true }
      );
    }
  };

  return (
    <div className="space-y-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 bg-gray-200 p-4 rounded-2xl"
        >
          <FormField
            control={form.control}
            name="pdfFile"
            render={({ field }) => (
              <FormItem className="bg-white rounded-lg p-4">
                <FormLabel>
                  Upload your Resume/CV&nbsp;
                  <span className="text-pink-600">* pdf only</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="application/pdf"
                    name={selectdPdfFileName}
                    onChange={(e: any) => {
                      const file = e.target.files[0];
                      if (file) {
                        // getting file text extraction
                        pdfToText(file)
                          .then((text: any) => {
                            setPdfFileText(text);
                            form.setValue("pdfFile", text);
                            setSelectdPdfFileName(file.name);
                          })
                          .catch((error: any) => {
                            console.error("Failed to extract text from pdf");
                          });
                      }
                    }}
                  />
                </FormControl>
                <FormDescription>We will extract information</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={!pdfFileText || form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Sun className="w-4 h-4 animate-spin" />
              ) : (
                <Upload className="w-4 h-4" />
              )}
              {form.formState.isSubmitting
                ? reupload
                  ? "Reuploading"
                  : "Uploading"
                : reupload
                ? "Reupload"
                : "Upload"}
            </Button>
          </div>
        </form>
      </Form>
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="font-bold">Extracted data</p>
          <div className="flex flex-wrap items-center gap-2">
            {["raw", "pdf-to-text", "parser"].map((tag) => {
              return (
                <code
                  key={tag}
                  className="px-2 rounded-md border bg-gray-200 text-gray-600 font-semibold"
                >
                  {tag}
                </code>
              );
            })}
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-2xl mt-10 border">
          {pdfFileText
            ? pdfFileText.replaceAll("_", "")?.slice(0, 100) + "..."
            : "No file chosen and information found!"}
        </div>
      </div>
    </div>
  );
}
