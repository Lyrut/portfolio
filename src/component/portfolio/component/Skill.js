import React from "react";
import "../scss/skill.scss";

function Skill(props) {
  const language = props.Language.map((data, i) => {
    console.log(data.name);
    return (
      <li className="language" key={i}>
        {progressbar(data)}
      </li>
    );
  });
  const framework = props.Framework.map((data, i) => {
    return (
      <li className="framework" key={i}>
        {progressbar(data)}
      </li>
    );
  });

  function progressbar(data) {
    let percentId, progressColor, progessParameter;
    percentId = data.percent + "-percent";
    progressColor = "progressbar progress-" + data.color;
    progessParameter = "progress-" + data.parameter;

    return (
      <>
        <div className="progressbarTitle">
          <h3>{data.name}</h3>
          <span className="percent" id={percentId}></span>
        </div>
        <div className="barContainer">
          <span className={progressColor} id={progessParameter}></span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="languages">{language}</div>
      <div className="frameworks">{framework}</div>
    </>
  );
}

export default Skill;
