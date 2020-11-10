import React from "react";
import "./home.scss";

import { IconContext } from "react-icons";
import SocialNetworks from "./SocialNetworks";

import { FaAngleDown } from "react-icons/fa";

function Home(props) {
  return (
    <div id="Home">
      <div className="Content">
        <div className="Name">
          <SocialNetworks PageName="Home" />
          Vissarut Ly
          <div className="BtnShowInfo" onClick={props.onClick}>
            <IconContext.Provider value={{ className: "FaAngleDownIcon" }}>
              <FaAngleDown />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
