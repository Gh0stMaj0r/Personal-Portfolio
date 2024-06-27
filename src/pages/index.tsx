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
          I'm 21-years old Full-Stack Developer from Finland. Currently working as an Intern at&nbsp;
          <mark className="marked-text">M-Technology Oy</mark>
        </p>
        <div className="home-links-flex">
          <a rel="noreferrer noopener nofollow" className="home-link" target="_blank">
            <div className="home-link-left">
              <GoRocket className="link-icon"/>
              <span>Personal Projects</span>
            </div>
            <div className="home-link-right">
              <IoIosArrowRoundForward className="link-icon"/>
            </div>
          </a>
          <a rel="noreferrer noopener nofollow" className="home-link" target="_blank">
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
            <a className="social-media" target="_blank">
              <FiGithub/>
            </a>
            <a className="social-media" target="_blank">
              <SlSocialSteam/>
            </a>
            <a className="social-media" target="_blank">
              <AiOutlineLinkedin/>
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
