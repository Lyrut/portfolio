import React from "react";

function Container(props) {
  function renderSection(name) {
    switch (name) {
      case "WorkExperience":
        return props.Data;
      case "Skills":
        return (
          <div className="Development">
            <ul className="SkillsBarContainer">{props.Data}</ul>
          </div>
        );
      case "Education":
        return <div className="ListEducation">{props.Data}</div>;
      default:
        return props.Data;
    }
  }

  return (
    <div className={props.SectionName + "Container"}>
      <div className="TitleContainer">{props.ContainerName}</div>

      <div className="ContentContainer">{renderSection(props.SectionName)}</div>
    </div>
  );
}

export default Container;
