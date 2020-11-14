import React from "react";
import "../scss/skill.scss";

function Skill(props) {
  let percentId, progressColor, progessParameter;
  percentId = props.Percent + "-percent";
  progressColor = "progressbar progress-" + props.Color;
  progessParameter = "progress-" + props.Parameter;

  return (
    <li className="language">
      <div className="progressbarTitle">
        <h3>{props.LangName}</h3>
        <span className="percent" id={percentId}></span>
      </div>
      <div className="barContainer">
        <span className={progressColor} id={progessParameter}></span>
      </div>
    </li>
  );
}

export default Skill;
