import { NavbarSimple } from "./components/NavbarSimple";
import Typewriter from "./components/Typewriter";
import About from "./components/About";
import { Button } from "@material-tailwind/react";
import Particle from "./components/Particle";
import Projects from "./components/Projects";
import { FooterWithLogo } from "./components/Footer";
import { Link } from "react-scroll";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <>
      <div className=" flex min-h-screen flex-col">
        <header>
          <div>
            <NavbarSimple />
          </div>
        </header>
        <div className="flex-grow">
          <Particle />
          <div className=" mt-10 flex h-screen w-full flex-col items-center justify-self-auto bg-bottom">
            <Typewriter />
            <div>
              <a href="#about">
                <Button
                  size="md"
                  variant="gradient"
                  ripple={true}
                  className="mt-5 font-customFont font-thin"
                >
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Know More
                  </Link>
                </Button>
              </a>
            </div>
            <div className="absolute bottom-0 left-0 mb-5 mt-10 w-screen">
              <div className="m-5 text-center text-xl font-bold">
                Tech Stack
              </div>
              <ul className="flex flex-wrap justify-center gap-6 ">
                <li>
                  <img
                    src="/static/images/tech/bootstrap.png"
                    className="max-h-16 max-w-16 rounded-xl shadow-xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  />
                </li>
                <li>
                  <img
                    src="/static/images/tech/css.png"
                    className="max-h-16 max-w-16 rounded-xl shadow-xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  />
                </li>
                <li>
                  <img
                    src="/static/images/tech/express.png"
                    className="max-h-16 max-w-16 rounded-xl shadow-xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  />
                </li>
                <li>
                  <img
                    src="/static/images/tech/github.png"
                    className="max-h-16 max-w-16 rounded-xl shadow-xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  />
                </li>
                <li>
                  <img
                    src="/static/images/tech/html5.png"
                    className="max-h-16 max-w-16 rounded-xl shadow-xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  />
                </li>
                <li>
                  <img
                    src="/static/images/tech/java.png"
                    className="max-h-16 max-w-16 rounded-xl shadow-xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  />
                </li>
                <li>
                  <img
                    src="/static/images/tech/javascript.png"
                    className="max-h-16 max-w-16 rounded-xl shadow-xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  />
                </li>
                <li>
                  <img
                    src="/static/images/tech/nodejs.png"
                    className="max-h-16 max-w-16 rounded-xl shadow-xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  />
                </li>
                <li>
                  <img
                    src="/static/images/tech/react.png"
                    className="max-h-16 max-w-16 rounded-xl shadow-xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  />
                </li>
                <li>
                  <img
                    src="/static/images/tech/sql.png"
                    className="max-h-16 max-w-16 rounded-xl shadow-xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  />
                </li>
                <li>
                  <img
                    src="/static/images/tech/tailwind.png"
                    className="max-h-16 max-w-16 rounded-xl shadow-xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div id="about">
            <About />
          </div>
          <section id="project">
            <Projects />
          </section>
          <footer>
            <div>
              <ScrollToTopButton />
            </div>
            <div id="footer">
              <FooterWithLogo />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
