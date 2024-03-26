import { NavbarSimple } from "./components/NavbarSimple";
import About from "./components/About";
import Particle from "./components/Particle";
import Projects from "./components/Projects";
import { FooterWithLogo } from "./components/Footer";
import { Element } from "react-scroll";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <>
      <div className=" box-border flex min-h-screen flex-col">
        <header>
          <div>
            <NavbarSimple />
          </div>
        </header>
        <div className="flex-grow ">
          <Particle />
          <Element className="mt-3 flex h-screen w-full flex-col items-center bg-bottom ">
            <Hero />
            <TechStack />
            {/* <div>
              <a href="#about">
                <Button
                  size="md"
                  variant="gradien8"
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
            </div> */}
          </Element>

          <Element id="about">
            <About />
          </Element>
          <Element id="project">
            <Projects />
          </Element>
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
