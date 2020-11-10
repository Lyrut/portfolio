import React from "react";
import "../scss/skill.scss";

function Skill(props) {
  let percentId, progressColor, progessParameter;
  percentId = props.Percent + "-percent";
  progressColor = "Progressbar Progress-" + props.Color;
  progessParameter = "Progress-" + props.Parameter;

  return (
    <li className="language">
      <div className="ProgressbarTitle">
        <h3>{props.LangName}</h3>
        <span className="Percent" id={percentId}></span>
      </div>
      <div className="BarContainer">
        <span className={progressColor} id={progessParameter}></span>
      </div>
    </li>
  );
}

export default Skill;
