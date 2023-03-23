import React from "react";
import CV from "../../assets/cv.pdf";
const CTA = ({setActiveNav}) => {
  return (
    <div className="cta">
      <a className="btn" href={CV} download>
        Download CV
      </a>
      <a onClick={()=>setActiveNav('contact')} className="btn btn-primary" href="#contact">
        Hey! Let's Talk
      </a>
    </div>
  );
};

export default CTA;
