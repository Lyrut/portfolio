import React from "react";

import "../scss/container.scss";

function Container(props) {
  function renderSection(name) {
    switch (name) {
      case "skills":
        return (
          <div className="development">
            <ul className="skillsBarContainer">{props.Data}</ul>
          </div>
        );
      case "workExperience":
        return <div className="listWorks">{props.Data}</div>;
      case "education":
        return <div className="listEducations">{props.Data}</div>;
      default:
        return props.Data;
    }
  }

  return (
    <div className={props.SectionName + "Container"}>
      {props.SectionName !== "personal" ? (
        <div className="titleContainer">{props.ContainerName}</div>
      ) : null}

      <div className="contentContainer">{renderSection(props.SectionName)}</div>
    </div>
  );
}

export default Container;
