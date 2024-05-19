/* eslint-disable react/no-unescaped-entities */
import { Button } from "@material-tailwind/react";

const About = () => {
  return (
    <div className="mb-10 grid h-screen w-full">
      <div
        className=" flex flex-col bg-cover bg-top"
        style={{ backgroundImage: "url('/static/images/about.png')" }}
      >
        <div className="mt-10 flex flex-col items-center justify-self-auto">
          <div className="text-4xl font-bold">ABOUT ME</div>
        </div>
        <div className="ml-5 mr-5 mt-8 flex flex-col items-center lg:flex-row lg:justify-between">
          <div className=" relative mb-10 flex w-1/2 justify-center">
            <img
              src="/static/images/stack.png"
              alt="profile"
              className="z-10 animate-spin-slow rounded-full md:w-1/2 lg:w-3/4 xl:w-1/2"
            />
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-7xl md:text-8xl lg:text-8xl">
              🧑‍💻
            </h1>
          </div>

          <div className="z-10 flex w-2/3 flex-col justify-center lg:h-auto ">
            <p className=" mb-7 text-start font-customFont1 text-lg font-bold sm:text-xl md:text-xl lg:text-2xl xl:text-2xl ">
              Hi, my name is Abhishek Kumar, and I'm a Full Stack Developer. I'm
              outgoing, dedicated, and open-minded. I work great with people and
              adjust to changes with ease.
            </p>
            <p className=" mb-7 text-start font-customFont1 text-lg font-bold sm:text-xl md:text-xl lg:text-2xl xl:text-2xl ">
              I believe that a person should work on developing their
              professional skills and learning new things all the time.
            </p>
          </div>
        </div>

        <div className="flex justify-center py-10">
          <a
            href="https://drive.google.com/file/d/1nyvklu_-I6RPLHqz5E7NANucHzrX7CpQ/view?usp=sharing"
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
