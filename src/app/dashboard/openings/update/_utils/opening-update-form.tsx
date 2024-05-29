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
import { UpdateOpening } from "@/app/dashboard/_utils/openings/opening.controller";
import {
  OpeningSchema,
  T_OpeningSchema,
} from "@/app/dashboard/_utils/openings/opening.schema";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const OpeningUpdateForm = ({
  _id,
  defaultValues,
}: {
  _id: string;
  defaultValues: any;
}) => {
  const router = useRouter();
  const form = useForm<T_OpeningSchema>({
    resolver: zodResolver(OpeningSchema),
    defaultValues,
  });

  async function onSubmit(data: T_OpeningSchema) {
    const result = await UpdateOpening(data, _id);
    console.log(result);
    ResponseX({ title: "Update opening", result });
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
          <CardFooter className="flex items-center gap-2 flex-wrap">
            <Link href="/dashboard/openings">
              <Button size="icon" variant="outline">
                <ChevronLeft className="w-4 h4" />
              </Button>
            </Link>
            <SubmitX
              pending={form.formState.isSubmitting}
              text="Save changes"
            />
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default OpeningUpdateForm;
