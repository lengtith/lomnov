"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import axiosInstance from "@/libs/axios";
import { API_ENDPOINTS } from "@/libs/const/api-endpoints";
import withAuthRedirect from '../withAuth';
const InputField = dynamic(()=>import("../../../../../../../packages/ui-components/src/components/inputfield/InputField"));
const Google = dynamic(()=> import("@/icons").then((icon)=>icon.Google));
const Facebook = dynamic(()=> import("@/icons").then((icon)=>icon.Facebook));

// Define the Zod schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type LoginData = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await axiosInstance.post(API_ENDPOINTS.SIGN_IN, {
        email: data.email,
        password: data.password,
      })
      console.log('response', response)
      if (response.status === 200) {
        window.location.href = "/"
      }
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="w-full sm:w-[500px] lg:w-[550px] mx-auto bg-white rounded-[30px] border border-neutral py-10">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-coolvetica text-helvetica-h2 text-charcoal tracking-coolvetica-tight mb-4">
          Login to your account
        </h2>
        <p className="mb-6 text-charcoal font-helvetica text-helvetica-text">
          Please enter your credentials to continue.
        </p>
      </div>

      {/* Social Login Buttons */}
      <div className="flex justify-center mb-8 space-x-4 mx-[45px] font-helvetica text-helvetica-h4">
        <button className="flex items-center justify-center w-1/2 h-[50px] border border-charcoal hover:border-olive-green rounded-[15px]">
          <Google props="w-5 h-5 mr-2" />
          Google
        </button>
        <button className="flex items-center justify-center w-1/2 h-[50px] border border-charcoal hover:border-olive-green rounded-[15px]">
          <Facebook props="w-5 h-5 mr-2" />
          Facebook
        </button>
      </div>

      <div className="flex items-center mb-8 mx-[45px]">
        <div className="flex-grow h-px bg-charcoal"></div>
        <span className="px-2 text-charcoal font-helvetica text-helvetica-text">
          or continue with email
        </span>
        <div className="flex-grow h-px bg-charcoal"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          {/* Email Input */}
          <InputField
            label="Email"
            type="email"
            register={register("email")}
            error={errors.email?.message}
            isFocused={emailFocused}
            setIsFocused={setEmailFocused}
          />

          {/* Password Input */}
          <InputField
            label="Password"
            type={passwordVisible ? "text" : "password"}
            register={register("password")}
            error={errors.password?.message}
            isFocused={passwordFocused}
            setIsFocused={setPasswordFocused}
            hasToggleIcon={true}
            toggleVisibility={togglePasswordVisibility}
            visible={passwordVisible}
          />
        </fieldset>

        {/* Remember Me and Forgot Password */}
        <div className="flex justify-between items-center mb-8 mx-[45px]">

          <Link href="/forgot-password" className="text-olive-green">
            Forgot Password?
          </Link>
        </div>

        {/* Sign In Button */}
        <div className="mx-[45px] mb-4">
          <button
            type="submit"
            className="w-full h-[50px] font-helvetica text-helvetica-h5 font-bold bg-neutral hover:bg-olive-green text-white rounded-[15px]"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Signup Link */}
      <div className="text-center font-helvetica text-helvetica-text mt-4">
        <p className="text-charcoal">
          Do not have an account?
          <a href="/signup" className="ml-[10px] text-olive-green">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default withAuthRedirect(LoginForm);
