import { FaSquareGithub, FaLinkedinIn, FaDribbble } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { SiTypescript, SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import {
  LINKEDIN_ACCOUNT,
  DRIBBBLE_ACCOUNT,
  GITHUB_ACCOUNT,
} from "../../utils/constant";

const About = () => {
  return (
    <section style={{ backgroundColor: "#D5E7F7" }} id="about">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h3
            className="mb-4 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-white uppercase"
            style={{ color: "#2C88D9" }}
          >
            About Me
          </h3>
          <p className="text-justify max-w-xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            ✋🏻 Hello there! You may call me Irvan. I’m a highly motivated and
            results-driven professional, who then committed to delivering
            exceptional performance and adding value to every project and
            organization I work with. I have a demonstrated history working in
            information technology. I have developed a wide range of skills
            including programming, software design-analysis, and technical
            writing for software development, and I also have strong analytical
            and problem-solving solving, then having advantage skills in
            communication, presentation, public speaking, and cross-function
            collaboration. I am passionate about staying current with industry
            trends and utilizing my knowledge to drive innovation and growth.
            Besides the programming stuff, I also like to do any kind of sports
            activities such as jogging, cycling, football game,s and more.{" "}
            <br />
            😎🏃🏻🚴🏻💨
          </p>
        </div>
        <div
          className="lg:mt-0 lg:col-span-5 lg:"
          style={{ marginTop: "40px" }}
        >
          <div className="mb-10">
            <h1
              className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-xl dark:text-white uppercase"
              style={{ color: "#2C88D9" }}
            >
              Skills
            </h1>
            <div className="flex flex-wrap text-justify max-w-xl mb-6 font-semibold text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              <div>
                <p
                  className="rounded-lg"
                  style={{
                    background: "#2C88D9",
                    padding: "8px",
                    margin: "0px 5px 3px 5px",
                    color: "#FFF",
                  }}
                >
                  Software Development
                </p>
                <p
                  className="rounded-lg"
                  style={{
                    background: "#2C88D9",
                    padding: "8px",
                    margin: "0px 5px 3px 5px",
                    color: "#FFF",
                  }}
                >
                  Design
                </p>
              </div>
              <div>
                <p
                  className="rounded-lg"
                  style={{
                    background: "#2C88D9",
                    padding: "8px",
                    margin: "0px 5px 3px 5px",
                    color: "#FFF",
                  }}
                >
                  Data Analyst
                </p>
                <p
                  className="rounded-lg"
                  style={{
                    background: "#2C88D9",
                    padding: "8px",
                    margin: "0px 5px 3px 5px",
                    color: "#FFF",
                  }}
                >
                  Public Speaking
                </p>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h1
              className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-xl dark:text-white uppercase md:mt-5 lg:mt-5"
              style={{ color: "#2C88D9" }}
            >
              Tech Stack
            </h1>
            <div className="flex flex-wrap">
              <RiReactjsFill size={50} className="mr-4" style={{color: '#5ED3F3'}}/>
              <SiTypescript size={50} className="mr-4" style={{color: '#2F74C0'}}/>
              <SiMysql size={50} className="mr-4" />
              <FaGitAlt size={50} className="mr-4" style={{color: '#D74A34'}}/>
            </div>
          </div>

          <div>
            <h1
              className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-xl dark:text-white uppercase md:mt-5 lg:mt-5"
              style={{ color: "#2C88D9" }}
            >
              Lets Connect With Me
            </h1>
            <div className="flex flex-wrap">
              <a href={GITHUB_ACCOUNT}>
                <FaSquareGithub size={50} className="mr-4" />
              </a>
              <a href={LINKEDIN_ACCOUNT}>
                <FaLinkedinIn size={50} className="mr-4" style={{color: '#0270AD'}}/>
              </a>
              <a href={DRIBBBLE_ACCOUNT}>
                <FaDribbble size={50} className="mr-4" style={{color: '#DF4A82'}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
