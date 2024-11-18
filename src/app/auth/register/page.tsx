"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { A_CreateUsers } from "../_utils/actions/auth.controller";
import { T_UserSchema } from "../_utils/actions/user.schema";
import { useRouter } from "next/navigation";
import InputX from "@/components/molecules/input.x";
import SubmitX from "@/components/molecules/submit.x";
import ResponseX from "@/components/molecules/response.x";

const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().min(2),
  password: z.string().min(8),
  role: z.boolean().default(false).optional(),
});

export default function RegisterForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: false,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const payload: T_UserSchema = {
      ...data,
      role: data.role ? "recruiter" : "applicant",
    };

    const result = await A_CreateUsers(payload);

    ResponseX({ title: "Register", result });

    if (result.success) {
      router.push("/auth/login");
      return;
    }
  }

  return (
    <div className="container section hero-gap flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[560px] min-w-[280px] w-[500px] space-y-6 p-4 md:p-6"
        >
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold">Register</h3>
            <p className="text-gray-400">
              Your data will be store for future usages
            </p>
          </div>
          <InputX
            form={form}
            name="name"
            type="text"
            label="Name"
            placeholder="e.g John Doe"
          />
          <InputX
            form={form}
            name="email"
            type="text"
            label="Email"
            placeholder="e.g john@foo.bar"
          />
          <InputX
            form={form}
            name="password"
            type="password"
            label="Password"
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-2 leading-none">
                  <FormLabel>Are you a recruiter/employer?</FormLabel>
                  <FormDescription>
                    By choosing this you will open an account as an
                    recruiter/employer.&nbsp;
                    <Link href="/examples/forms">Learn more</Link>
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <SubmitX
            pending={form.formState.isSubmitting}
            text="Register"
            className="w-full"
          />

          <div className="py-4">
            Already have account?&nbsp;
            <Link href="/auth/login" className="underline hover:text-blue-600">
              Login Now!
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
