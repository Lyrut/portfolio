import React from "react";

import "../scss/personal.scss";

function Personal(props) {
  return (
    <div className="message">
      <div className="welcome">{props.Welcome}</div>
      <div className="name">{props.Name}</div>
      <div className="description">{props.Description1}</div>
      <div className="subdescription">{props.Description2}</div>
    </div>
  );
}

export default Personal;
