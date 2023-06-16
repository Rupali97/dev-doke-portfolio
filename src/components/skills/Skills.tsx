import React, { MutableRefObject, useRef, LegacyRef } from "react";
import IsVisible from "react-is-visible";

import { Fade } from "react-reveal";
import SkillsData from "../../data/skills.json";
import useContainerDimensions from "../../hooks/useContainerDimesions";

const Skills = () => {
  const skillsWrapper: LegacyRef<HTMLUListElement> = React.useRef<any>();

  const { width } = useContainerDimensions(skillsWrapper);

  console.log("skillsWrapper", skillsWrapper);

  console.log("width", width);

  return (
    <Fade duration={1000}>
      <div style={{ position: "relative", width: "100%", maxWidth: 600 }}>
        <IsVisible once>
          {(isVisible: any) => (
            <div
              className="skills-wrapper"
              style={
                isVisible
                  ? {
                      transition: "1s opacity ease-in-out",
                      transform: `translateX(0)`,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <h2>Skills</h2>
              {
                //@ts-ignore
              }
              <ul className="skills" ref={skillsWrapper}>
                {SkillsData.skills.map((skills) => {
                  return (
                    <li className="skill-bar-wrapper" key={skills.skillName}>
                      <div
                        className="skill-bar"
                        style={
                          isVisible
                            ? {
                                transition: `${
                                  1 + skills.id / 10
                                }s width ease-in-out`,
                                width: width * (Number(skills.amount) / 100),
                              }
                            : {
                                width: 1,
                              }
                        }
                      ></div>
                      <div className="skill-name">{skills.skillName}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </IsVisible>
      </div>
    </Fade>
  );
};

export default Skills;
