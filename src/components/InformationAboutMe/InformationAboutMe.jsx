import React from "react";
import "./InformationAboutMe.scss";
function InformationAboutMe() {
  return (
    <div >
      <h1 className="main-title">
        Bohdan Chokhlenko
        <br />
        <span className="main-title__span">
          Full-stack Developer
     
        </span>
      </h1>

      <div className="indicator">
        <div className="indicator__color"></div>
        <p className="work_indicator__text">Open for new opportunities</p>
      </div>
      <div className="section-block-text">
        <p className="main-taxt-color">
          I'm currently doing some web design stuff at GitHub. I'm used to working in fast-paced environments and collaborating
          with interdisciplinary teams. My specialty is web design but have been enjoying creating all sorts of visuals like
          icons, illustrations and prototypes.
          <br />
          <br />
          I'm a generalist focused on craft. My formula is doing the work, it's that simple (and hard). I'd label my design
          approach as realistic, supported by skills in frontend development — all that to say that I (roughly) know how to
          translate designs into code and understand the constraints of the digital ecosystem. You can follow my work on
          dribbble or (very occasional) case study on Behance.
        </p>
      </div>
    </div>
  );
}

export default InformationAboutMe;
