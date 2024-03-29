import { Typography } from "@material-tailwind/react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

export function FooterWithLogo() {
  return (
    <footer className="w-full bg-white p-8">
      <li>
        <Typography
          as="a"
          color="blue-gray"
          className="p-5 text-center font-customFont text-2xl font-bold transition-colors"
        >
          Contact
        </Typography>
      </li>
      <div className="flex flex-row items-center justify-center gap-x-12 gap-y-6 bg-white text-center">
        <ul className="flex flex-wrap items-center gap-x-16 gap-y-2">
          <li>
            <Typography
              as="a"
              href="https://www.linkedin.com/in/abhishekumar2/"
              target="_blank"
              rel="noopener noreferrer"
              color="blue-gray"
              className=" transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <FaLinkedin className="size-10" />
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
              <IoLogoGithub className="size-10" />
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="mailto:abhikr.ak.2001@gmail.com"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <IoMdMail className="size-10" />
            </Typography>
          </li>
          {/* <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li> */}
        </ul>
      </div>
      <hr className="my-7 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-customFont2">
        &copy; 2024 Abhishek Kumar
      </Typography>
    </footer>
  );
}
