"use client";
import React from "react";
import Link from "next/link";
const CustomNavbar = () => {
  return (
    <nav className="bg-blue-600 h-12 py-2 px-3 flex justify-between">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <a href="#!">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          <li>
            <Link href={"/"} className="hover:text-blue-200">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/add-task"} className="hover:text-blue-200">
              Add Task
            </Link>
          </li>
          <li>
            <Link href={"/show-tasks"} className="hover:text-blue-200">
              Show Task
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-5">
          <li>
            <a href="#!">Login</a>
          </li>
          <li>
            <Link href={"/signup"}>SignUp</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
