import React from "react";
import "../scss/work.scss";

function Works(props) {
  let job, subjob;

  if (props.jobDescription !== null) {
    job = (
      <div className="job">
        <div className="jobDescription">{props.JobDescription}</div>
        <div className="jobDuration">{props.JobDuration}</div>
      </div>
    );
  }

  if (props.Subjob !== null) {
    subjob = props.Subjob.map((subjob, i) => {
      let customClass = subjob.class ? "subjob " + subjob.class : "";

      return (
        <div className={customClass} key={i}>
          <a href={subjob.website} target="_blank" rel="noopener noreferrer">
            <img src={subjob.logo.link} alt={subjob.logo.class}></img>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="work">
      <div className="year">{props.Year}</div>
      <div className="company">
        <div className="logo">
          <a
            href={props.CompanyWebsite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={props.CompanyLogo}
              alt={props.CompanyName}
              className={props.Class}
            ></img>
          </a>
        </div>
        {props.CompanyLocation}
      </div>
      <div className="job">{job}</div>
      <div className="subjob">{subjob}</div>
    </div>
  );
}

export default Works;
