import { NavbarSimple } from "./components/NavbarSimple";
import Typewriter from "./components/Typewriter";
import About from "./components/About";
import { Button } from "@material-tailwind/react";
import Particle from "./components/Particle";
import Projects from "./components/Projects";
import { FooterWithLogo } from "./components/Footer";
import { Link } from "react-scroll";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <div>
            <NavbarSimple />
          </div>
        </header>
        <div className="flex-grow">
          <Particle />
          <div
            className="relative w-full h-screen bg-bottom bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url('../public/tech.png')",
              backgroundRepeat: "no-repeat",
              objectFit: "none",
            }}
          >
            <div className="h-screen mt-10 flex flex-col justify-self-auto items-center bg-bottom">
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
            </div>
          </div>

          <div id="about">
            <About />
          </div>
          <section id="project">
            <Projects />
          </section>
          <footer>
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
