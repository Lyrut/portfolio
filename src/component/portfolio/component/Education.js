import React from "react";
import "../scss/education.scss";

import { IconContext } from "react-icons";
import { FaRegQuestionCircle } from "react-icons/fa";

function Education(props) {
  let tooltip, work;

  if (props.TitleAcronym !== null) {
    tooltip = (
      <span className="tooltip">
        <sup>
          <IconContext.Provider value={{ size: 12 }}>
            <FaRegQuestionCircle />
          </IconContext.Provider>
        </sup>
        <div className="tooltipTop">
          {props.TitleAcronym}
          <i></i>
        </div>
      </span>
    );
  }

  if (props.WorksType !== null && props.WorkPeriod !== null) {
    work = (
      <div className="educationWork">
        <span className="bold">{props.WorkType}</span>: {props.WorkPeriod}
      </div>
    );
  }

  return (
    <div className="education">
      <div className="leftColumn">
        <div className="years">{props.Years}</div>
      </div>
      <div className="rightColumn">
        <div className="title">
          <div>{props.TitleName}</div>
          <div>
            {props.TitleSpeciality}
            {tooltip}
          </div>
        </div>
        {work}
        <div className="school">
          {props.SchoolName} - {props.SchoolLocation}
        </div>
      </div>
    </div>
  );
}

export default Education;
