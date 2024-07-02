import React from "react";

import '../Css/Projects.scss'
import '../Css/Common.scss'

import { IoIosArrowRoundBack, IoIosLink, IoLogoGithub } from "react-icons/io";

import NexcentImage from '../images/nexcent.png';
import Powerpeak from '../images/powerpeak.png';
import Moviewebsite from '../images/movie-website.png';

const Page = () => {
  return (
    <main>
      <section className="projects-flex">
        <div className="projects-heading">
          <h4 className="head">Personal Projects</h4>
          <a href="/" className="head-right" rel="noreferrer noopener nofollow">
            <IoIosArrowRoundBack/>
            <span>Back</span>
          </a>
        </div>
        <div className="project-grid">
          <div className="project-card">
            <img src={NexcentImage} alt="Nexcent" className="project-image" draggable="false" decoding="async" loading="lazy"/>
            <div className="card-bottom">
              <p className="project-name">Nexcent</p>
              <p className="project-desc">Landing page example website</p>
              <div className="project-links">
                <a href="https://nexcent-website.vercel.app/" rel="noreferrer noopener nofollow" className="project-link" target="_blank">
                  <IoIosLink/>
                  <span>View Demo</span>
                </a>
                <a href="https://github.com/Gh0stMaj0r/React-example-website" rel="noreferrer noopener nofollow" className="project-link" target="_blank">
                  <IoLogoGithub/>
                  <span>View Source</span>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={Powerpeak} alt="Nexcent" className="project-image" draggable="false" decoding="async" loading="lazy"/>
            <div className="card-bottom">
              <p className="project-name">PowerPeak</p>
              <p className="project-desc">Gym website, school project</p>
              <div className="project-links">
                <a href="https://power-peak.vercel.app/" rel="noreferrer noopener nofollow" className="project-link" target="_blank">
                  <IoIosLink/>
                  <span>View Demo</span>
                </a>
                <a href="https://github.com/Gh0stMaj0r/Power-Peak" rel="noreferrer noopener nofollow" className="project-link" target="_blank">
                  <IoLogoGithub/>
                  <span>View Source</span>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={Moviewebsite} alt="Nexcent" className="project-image" draggable="false" decoding="async" loading="lazy"/>
            <div className="card-bottom">
              <p className="project-name">StreamX Movie</p>
              <p className="project-desc">Movie website, made with using API key</p>
              <div className="project-links">
                <a href="https://streamx-movie.vercel.app/" rel="noreferrer noopener nofollow" className="project-link" target="_blank">
                  <IoIosLink/>
                  <span>View Demo</span>
                </a>
                <a href="https://github.com/Gh0stMaj0r/Movie-Website" rel="noreferrer noopener nofollow" className="project-link" target="_blank">
                  <IoLogoGithub/>
                  <span>View Source</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page;

