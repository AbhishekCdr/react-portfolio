import React from "react";
import { Button } from "@material-tailwind/react";

const About = () => {
  return (
    <div className="grid w-full">
      <div
        className=" flex flex-col bg-cover bg-top"
        style={{ backgroundImage: "url('/static/images/about.png')" }}
      >
        <div className="mt-10 flex flex-col items-center justify-self-auto">
          <div className="text-4xl font-bold">ABOUT ME</div>
        </div>
        <div className="ml-5 mr-5 mt-8 flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="flex w-1/2 justify-center ">
            <img
              src="/static/images/profile.png"
              alt="profile"
              className="z-10 mb-5 lg:w-3/4 xl:w-1/2"
            />
          </div>
          <div className="z-10 flex w-2/3 justify-center lg:h-auto ">
            <p className=" mb-7 text-center font-customFont1 text-2xl font-bold">
              I am outgoing, dedicated, and open-minded. I work great with
              people and adjust to changes with ease. I believe that a person
              should work on developing their professional skills and learning
              new things all the time.
            </p>
          </div>
        </div>

        <div className="flex justify-center py-10">
          <a
            href="https://drive.google.com/file/d/1jJLUCwSISCtomKawnQCjYY-niOO2lIiF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="gradient"
              ripple={true}
              className="font-customFont font-thin duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            >
              Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
