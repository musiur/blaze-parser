"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { A_LoginUser } from "../_utils/auth.controller";

const FormSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(8),
});

export default function LoginForm() {
  const [showPass, setShowPass] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result: any = await A_LoginUser(data.email, data.password);

    toast({
      title: "Login",
      variant: result?.success ? "default" : "destructive",
      description: <p>{result?.message}</p>,
    });

    if (result.success && typeof window !== "undefined") {
      window.location.replace("/dashboard");
    }
  }

  return (
    <div className="container section flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[520px] min-w-[280px] w-[460px] space-y-6 p-4 md:p-6 border shadow-xl rounded-lg"
        >
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold">Login</h3>
            <p className="text-gray-400">
              Enter your email and password to access your account.
            </p>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. john@example.xyz" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input {...field} type={showPass ? "text" : "password"} />
                    <div
                      role="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute top-[6px] right-1 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center [&>svg]:w-3 [&>svg]:h-3 [&>svg]:storke-[1.2px]"
                    >
                      {showPass ? <Eye /> : <EyeOff />}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Login..." : "Login"}
          </Button>

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
