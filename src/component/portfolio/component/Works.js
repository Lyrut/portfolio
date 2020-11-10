import React from "react";
import "../scss/work.scss";

function Works(props) {
  let job;
  if (props.jobDescription !== null)
    job = (
      <div className="Job">
        <div className="JobDescription">{props.JobDescription}</div>
        <div className="JobDuration">{props.JobDuration}</div>
      </div>
    );

  return (
    <div className="Work">
      <div className="Year">{props.Year}</div>
      <div className="Company">
        <div className="Logo">
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
