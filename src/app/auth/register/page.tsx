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
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { A_CreateUsers } from "../_utils/auth.controller";
import { T_UserSchema } from "../_utils/user.schema";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().min(2),
  password: z.string().min(8),
  role: z.boolean().default(false).optional(),
});

export default function RegisterForm() {
  const router = useRouter();
  const [showPass, setShowPass] = useState<boolean>(false);
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
    console.log(payload);
    const result = await A_CreateUsers(payload);
    console.log(result);

    toast({
      title: "Registration",
      variant: result.success ? "default" : "destructive",
      description: <p>{result.message}</p>,
    });

    if (result.success) {
      router.push("/auth/login");
      return;
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
            <h3 className="text-xl md:text-2xl font-bold">Register</h3>
            <p className="text-gray-400">
              Your data will be store for future usages
            </p>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. jahidul Islam" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. jahidul@islam.xyz" {...field} />
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
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Registering..." : "Register"}
          </Button>

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
