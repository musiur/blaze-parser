/**
 * @author: github.com/musiur
 * date: 29 May, 2024
 *
 * @description Unified & reusable INPUT component
 *
 * @params form, name, type, label, placeholder
 * form: react-hook-form
 * name: input name
 * type: input types
 * placeholder: input placeholder
 */

"use client";
import { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Eye, EyeOff } from "lucide-react";
import clsx from "clsx";

type inputType = "text" | "password" | "textarea";

const InputX = ({
  form,
  name = "input",
  type = "text",
  label = "Input Field",
  placeholder = "",
}: {
  form: any;
  name: string;
  type?: inputType;
  label: string;
  placeholder?: string;
}) => {
  /**
   * State to manage showing password fields input as text or, password
   */
  const [showPass, setShowPass] = useState(false);

  /**
   * All Input fields in an Object Scaffold
   */

  const inputFields = {
    text: (field: any) => (
      <Input placeholder={placeholder} {...field} type={type} />
    ),
    textarea: (field: any) => (
      <Textarea placeholder={placeholder} {...field} type={type} rows="8" />
    ),
    password: (field: any) => (
      <div className="relative">
        <Input
          placeholder={placeholder}
          {...field}
          type={!showPass ? type : "text"}
        />
        <div
          className="inline-flex w-8 h-8 items-center justify-center absolute top-[2px] right-2"
          role="button"
          onClick={() => setShowPass(!showPass)}
        >
          <Eye
            className={clsx(
              "h-4 text-gray-400 dark:text-gray-500 transition-all duration-300",
              {
                "opacity-100 w-4": showPass,
                "opacity-0 w-0": !showPass,
              }
            )}
          />
          <EyeOff
            className={clsx(
              "h-4 text-gray-400 dark:text-gray-500 transition-all duration-300",
              {
                "opacity-100 w-4": !showPass,
                "opacity-0 w-0": showPass,
              }
            )}
          />
        </div>
      </div>
    ),
  };
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {
              // @ts-ignore
              inputFields[type](field)
            }
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputX;
