"use client";
import { SignUpInput, SignUpSchema } from "@/utils/validations/signUpSchema";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorText from "./ErrorText";
import { TextField } from "./TextField";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInput>({
    resolver: zodResolver(SignUpSchema),
  });
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-400 to-blue-100 p-12">
      <div className="w-full max-w-xl rounded-xl bg-gray-50 shadow-lg">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-2xl font-bold text-gray-900">Sign up</h1>
            <div className="mt-4 w-full">
              <TextField
                {...register("name")}
                label="name"
                error={errors.name?.message}
              />
            </div>

            {/* Email */}
            <div className="mt-4 w-full">
              <TextField
                {...register("email")}
                type="email"
                label="Email"
                error={errors.email?.message}
              />
            </div>

            {/* Password */}
            <div className="mt-4 w-full">
              <TextField
                {...register("password")}
                type="password"
                label="Password"
                error={errors.password?.message}
              />
            </div>
            {/* Password Confirmation */}
            <div className="mt-4 w-full">
              <TextField
                {...register("confirmPassword")}
                type="password"
                label="Confirm Password"
                error={errors.confirmPassword?.message}
              />
            </div>
            <div className="mt-4 w-full">
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full rounded-md bg-blue-500 hover:bg-blue-600 transition-colors ease-in-out delay-100 px-3 py-4 text-white focus:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
