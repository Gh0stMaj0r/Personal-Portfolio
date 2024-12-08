import React from "react";

import SEO from "../Components/SEO";
import { GoRocket } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SlSocialSteam } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

import '../Css/Home.scss'
import '../Css/Common.scss'

const Page = () => {
  return (
    <main>
      <section className="home-flex">
      <div className="home-left">
        <p className="intro">
          I'm 22-years old Full-Stack Developer from Finland. Currently working as an Software Developer at&nbsp;
          <mark className="marked-text">M-Technology Oy</mark>
        </p>
        <div className="home-links-flex">
          <a href="/Projects" rel="noreferrer noopener nofollow" className="home-link">
            <div className="home-link-left">
              <GoRocket className="link-icon"/>
              <span>Personal Projects</span>
            </div>
            <div className="home-link-right">
              <IoIosArrowRoundForward className="link-icon"/>
            </div>
          </a>
          <a href="/CV.pdf" rel="noreferrer noopener nofollow" className="home-link" target="_blank">
            <div className="home-link-left">
              <FaFilePdf className="link-icon"/>
              <span>Download CV (.PDF)</span>
            </div>
            <div className="home-link-right">
              <IoIosArrowRoundForward className="link-icon"/>
            </div>
          </a>
        </div>
      </div>
      <div className="home-center">
        <hr className="hr-home"></hr>
      </div>
      <div className="home-right-flex">
          <hgroup className="home-right">
            <h1 className="heading">Arttu Suhonen</h1>
            <h4 className="heading-small">Software Developer / Full-Stack Developer</h4>
          </hgroup>
          <div className="socials">
            <a href="https://github.com/Gh0stMaj0r" className="social-media" target="_blank">
              <div className="tooltip"><FiGithub/>
                <span className="tooltiptext">Github</span>
              </div>
            </a>
            <a href="https://steamcommunity.com/id/Gh0stMaj0r/" className="social-media" target="_blank">
              <div className="tooltip"><SlSocialSteam/>
                <span className="tooltiptext">Steam</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/arttu-suhonen" className="social-media" target="_blank">
              <div className="tooltip"><AiOutlineLinkedin/>
                <span className="tooltiptext">Linkedin</span>
              </div>
            </a>
          </div>    
        </div>
      </section>
    </main>
  )
}

export const Head = () => {
  return <SEO/>
}

export default Page;
