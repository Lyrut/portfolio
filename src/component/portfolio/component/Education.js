import React from "react";
import "../scss/education.scss";

import { IconContext } from "react-icons";
import { FaRegQuestionCircle } from "react-icons/fa";

function Education(props) {
  let tooltip, work;

  if (props.TitleAcronym !== null) {
    tooltip = (
      <span className="Tooltip">
        <IconContext.Provider value={{ size: 12, verticalAlign: "sup" }}>
          <FaRegQuestionCircle />
        </IconContext.Provider>
        <div className="TooltipTop">
          {props.TitleAcronym}
          <i></i>
        </div>
      </span>
    );
  }

  if (props.WorksType !== null && props.WorkPeriod !== null) {
    work = (
      <div className="EducationWork">
        <span className="Bold">{props.WorkType}</span>: {props.WorkPeriod}
      </div>
    );
  }

  return (
    <div className="Education">
      <div className="LeftColumn">
        <div className="Years">{props.Years}</div>
      </div>
      <div className="RightColumn">
        <div className="Title">
          <div>{props.TitleName}</div>
          <div>
            {props.TitleSpeciality}
            {tooltip}
          </div>
        </div>
        {work}
        <div className="School">
          {props.SchoolName} - {props.SchoolLocation}
        </div>
      </div>
    </div>
  );
}

export default Education;
