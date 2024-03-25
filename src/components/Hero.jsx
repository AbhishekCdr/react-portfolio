import React from "react";
import Type from "./Type";
import { Typography } from "@material-tailwind/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <div className="mb-8 ml-5 mr-5 mt-8 flex flex-row items-center lg:flex-row ">
        <div className="flex w-screen flex-col items-center sm:w-11/12 lg:flex-row">
          <div className="relative mb-5 flex justify-center sm:justify-stretch">
            <img
              src="/static/images/profile.png"
              alt="profile"
              className=" absolute z-10 mb-5 w-56 rounded-full p-8 lg:w-3/4 xl:w-1/2 "
            />
            <img
              src="/static/images/back1.png"
              alt="back"
              className="mb-5 w-56 animate-spin-slow1 rounded-full lg:w-3/4 xl:w-1/2"
            />
          </div>
          <div className="flex flex-col text-start text-2xl font-medium sm:text-3xl md:text-3xl lg:text-3xl">
            <h1 className="text-nowrap">Hey, my name is Abhishek</h1>
            <div className="flex gap-1 text-nowrap">
              <h1>I'm a </h1>
              <Type />
            </div>
          </div>
        </div>

        <div className="absolute right-0 mr-1 hidden items-center bg-white text-center sm:block md:block">
          <ul className="flex flex-col items-center gap-5">
            <li>
              <Typography
                as="a"
                href="https://www.linkedin.com/in/abhishekumar2/"
                target="_blank"
                rel="noopener noreferrer"
                color="blue-gray"
                className=" transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                <FaLinkedinIn className="size-10" />
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="https://github.com/AbhishekCdr/"
                target="_blank"
                rel="noopener noreferrer"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                <FiGithub className="size-10" />
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="mailto:abhikr.ak.2001@gmail.com"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                <IoMailOutline className="size-10" />
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
