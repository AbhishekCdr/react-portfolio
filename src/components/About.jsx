import React from "react";
import { Button } from "@material-tailwind/react";

const About = () => {
  return (
    <div className="grid w-full">
      <div
        className="flex flex-col bg-cover bg-top m-3"
        style={{ backgroundImage: "url('src/assets/about.png')" }}
      >
        <div className="flex flex-col justify-self-auto items-center mt-10">
          <div className="text-4xl font-bold">ABOUT ME</div>
        </div>
        <div className="ml-5 mt-8 mr-5 flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="w-1/2 flex justify-center">
            <img
              src="src\assets\profile.png"
              alt="profile"
              className="w-full lg:w-3/4 xl:w-1/2  mr-8 z-10 mb-5 "
            />
          </div>
          <div className="w-1/2 lg:h-auto flex justify-center z-10">
            <p className="text-2xl text-center font-customFont1 font-bold">
              I am outgoing, dedicated, and open-minded. I work great with
              people and adjust to changes with ease. I believe that a person
              should work on developing their professional skills and learning
              new things all the time.
            </p>
          </div>
        </div>

        <div className="py-10 flex justify-center">
          <a href="#buttons-with-link">
            <Button
              size="lg"
              variant="gradient"
              ripple={true}
              className="hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-customFont font-thin"
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
