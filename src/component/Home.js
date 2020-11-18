import React from "react";
import "./home.scss";

import { IconContext } from "react-icons";
import SocialNetworks from "./SocialNetworks";

import { FaAngleDown } from "react-icons/fa";

function Home(props) {
  return (
    <div id="home">
      <div className={"content " + props.HomeClass}>
        <div className="name">
          <SocialNetworks PageName="home" />
          Vissarut Ly
          <div className="btnShowPortfolio" onClick={props.onClick}>
            <IconContext.Provider value={{ className: "faAngleDownIcon" }}>
              <FaAngleDown />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
