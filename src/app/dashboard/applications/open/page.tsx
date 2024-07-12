"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import ResponseX from "@/components/molecules/response.x";
import InputX from "@/components/molecules/input.x";
import SubmitX from "@/components/molecules/submit.x";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {
  OpeningSchema,
  T_OpeningSchema,
} from "../../_utils/actions/openings/opening.schema";
import { PostOpening } from "../../_utils/actions/openings/opening.controller";

const Page = () => {
  const router = useRouter();
  const form = useForm<T_OpeningSchema>({
    resolver: zodResolver(OpeningSchema),
    defaultValues: {
      title: "",
      description: "",
      jobType: "full-time",
      salary: 0,
      location: "",
      recruiter: "ddd",
      applications: [],
    },
  });

  async function onSubmit(data: T_OpeningSchema) {
    const result = await PostOpening(data);
    console.log(result);
    ResponseX({ title: "New opening", result });
    result?.success && router.push("/dashboard/openings");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[640px]">
        <Card>
          <CardHeader>
            <CardTitle>New opening</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputX form={form} name="title" label="Title" />
            <InputX form={form} name="salary" label="Salary" type="number" />
            <InputX
              form={form}
              name="description"
              label="Description"
              type="textarea"
            />
            <InputX
              form={form}
              name="location"
              label="Location"
              type="textarea"
            />
          </CardContent>
          <CardFooter>
            <SubmitX pending={form.formState.isSubmitting} text="Open" />
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default Page;
