import React, { InputHTMLAttributes, forwardRef } from "react";
import ErrorText from "./ErrorText";

type TextFieldParams = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  label: string;
  error?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldParams>(
  function Comp({ label, error, ...inputParams }, ref) {
    return (
      <>
        <label
          htmlFor="password"
          className="block text-xs md:text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <input
          ref={ref}
          {...inputParams}
          className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        <ErrorText>{error}</ErrorText>
      </>
    );
  }
);
