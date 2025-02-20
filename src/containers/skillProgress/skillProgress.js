import React from "react";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={500} distance="35px" ssrFadeout>
        <div className="skills-container">
          {/* Left Side: Proficiency */}
          <div className="skills-left">
            <div className="skills-bar">
              <h1 className="skills-heading">Proficiency</h1>
              {techStack.proficiency.map((exp, i) => {
                const progressStyle = {
                  width: exp.progressPercentage
                };
                return (
                  <div key={i} className="skill">
                    <p>{exp.Stack}</p>
                    <div className="meter">
                      <span style={progressStyle}></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Image + Additional Skills */}
          <div className="skills-right">
            <div className="skills-image">
              {illustration.animated ? (
                <DisplayLottie animationData={Build} />
              ) : (
                <img alt="Skills" src={require("../../assets/images/skill.svg")} />
              )}
            </div>

            {/* Additional Skills Section */}
            <div className="additional-skills">
              <h1 className="skills-heading">Additional Skills</h1>
              {techStack.additionalSkills.map((skill, i) => (
                <div key={i} className="skill">
                  <p>{skill.Stack}</p>
                  <div className="meter">
                    <span style={{ width: skill.progressPercentage }}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
