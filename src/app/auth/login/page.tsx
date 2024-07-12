"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import Link from "next/link";
import { A_LoginUser } from "../_utils/actions/auth.controller";
import InputX from "@/components/molecules/input.x";
import SubmitX from "@/components/molecules/submit.x";
import ResponseX from "@/components/molecules/response.x";

const FormSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(8),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result: any = await A_LoginUser(data.email, data.password);

    ResponseX({ title: "Login", result });

    if (result.success && typeof window !== "undefined") {
      window.location.replace("/dashboard");
    }
  }

  return (
    <div className="container section flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[320px] min-w-[280px] w-[460px] space-y-6 p-4 md:p-6 border shadow-xl rounded-lg"
        >
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold">Login</h3>
            <p className="text-gray-400">
              Enter your email and password to access your account.
            </p>
          </div>
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
          <SubmitX
            pending={form.formState.isSubmitting}
            text="Login"
            className="w-full"
          />

          <div className="py-4">
            Don&apos;t have account?&nbsp;
            <Link
              href="/auth/register"
              className="underline hover:text-blue-600"
            >
              Register Now!
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
