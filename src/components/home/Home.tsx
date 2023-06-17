import React, { useState, useCallback } from "react";
import "./Home.css";
import { Bounce, Fade } from "react-reveal";
import { Link } from "react-scroll";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import Navbar from "../navbar/Navbar";
import profile from "../../assets/images/rupali.png";
import linkedin from "../../assets/images/social/linkedin.png";
import github from "../../assets/images/social/github.png";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles
          id="tsparticles"
          init={particlesInit}
          // loaded={particlesLoaded}
          className="particles"
          canvasClassName="particles-canvas"
          options={{
            particles: {
              number: { value: 20 },
              color: { value: ["#600743", "#7f3868", "#af83a1"] },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: true,
                  speed: 0.2,
                  opacity_min: 0.3,
                  sync: true,
                },
              },
              size: {
                value: 30,
                random: true,
              },
              line_linked: {
                enable: true,
                distance: 450,
                color: "#ffffff",
                opacity: 0.1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                bounce: true,
              },
            },
            retina_detect: true,
          }}
        />
        <div className={`greeting${!imageLoaded ? " hide" : ""}`}>
          <Fade bottom distance="50px">
            <img
              className="profile"
              alt="m.jigalin profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, I'm <span>Rupali Doke</span>.{" "}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h5>
              <Typewriter
                options={{
                  strings: [
                    "I love to develop and animate ui.",
                    "I love learning new tech.",
                    "I like to create unique digital experiences.",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: "<",
                  delay: 120,
                }}
              />
            </h5>
            <Bounce cascade>
              <div className="links">
                <a
                  href="https://github.com/Rupali97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={"m-r-16"}
                >
                  <img src={github} alt="Github Logo" width="40px" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rupali-doke-472b09b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin Logo" width="50px" />
                </a>
              </div>
            </Bounce>
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-93}
                duration={500}
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{ pointerEvents: "fill", cursor: "pointer" }}
                />
              </Link>
            </div>
          </Fade>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
