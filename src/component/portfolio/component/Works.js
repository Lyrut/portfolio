import React from "react";
import "../scss/work.scss";

function Works(props) {
  let job;
  if (props.jobDescription !== null)
    job = (
      <div className="job">
        <div className="jobDescription">{props.JobDescription}</div>
        <div className="jobDuration">{props.JobDuration}</div>
      </div>
    );

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
      {job}
    </div>
  );
}

export default Works;
