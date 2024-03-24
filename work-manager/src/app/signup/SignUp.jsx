"use client";
import React from "react";
import signupSVG from "../../assets/signup.svg";
import Image from "next/image";
const SignUp = () => {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-4 col-start-5   ">
        <div className="py-5">
          <div className="flex justify-center m-5">
            <Image
              src={signupSVG}
              alt="signup banner"
              style={{ width: "50%" }}
            ></Image>
          </div>
          <h1 className="text-3xl text-center">Signup Here</h1>
          <form action="#!" className="mt-5">
            {/*name*/}
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className=" block text-sm font-medium mb-2 ps-2"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                placeholder="Enter Here"
                id="user_name"
              ></input>
            </div>
            {/*User Email */}
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className=" block text-sm font-medium mb-2 ps-2"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                placeholder="muqtu@xyz.com"
                id="user_email"
              ></input>
            </div>
            {/*Password */}
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className=" block text-sm font-medium mb-2 ps-2"
              >
                New Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                placeholder="Enter Here"
                id="user_password"
              ></input>
            </div>
            {/*About */}
            <div className="mt-3">
              <label
                htmlFor="user_about"
                className=" block text-sm font-medium mb-2 ps-2"
              >
                About
              </label>
              <textarea
                type="text"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                placeholder="Enter Here"
                id="user_about"
                rows={8}
              ></textarea>
            </div>
            <div className="mt-3 text-center">
              <button className="px-2 py-3 bg-green-600 rounded hover:bg-green-400">
                Signup
              </button>
              <button className="px-2 py-3 bg-orange-600 ms-3 rounded hover:bg-orange-400">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
