import React from "react";
import "./social-networks.scss";

import { IconContext } from "react-icons";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialNetwork(props) {
  let PageName = "socialNetworks";

  if (
    props.PageName !== "" &&
    props.PageName !== null &&
    props.PageName !== undefined
  ) {
    PageName += " " + props.PageName;
  }

  return (
    <div className={PageName}>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/vissarut.ly"
            target="_blank"
            rel="noopener noreferrer"
            id="facebook"
          >
            <IconContext.Provider value={{ className: "icons" }}>
              <FaFacebook />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/_Lyrut"
            target="_blank"
            rel="noopener noreferrer"
            id="twitter"
          >
            <IconContext.Provider value={{ className: "icons" }}>
              <FaTwitter />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/_lyrut/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            id="instagram"
          >
            <IconContext.Provider value={{ className: "icons" }}>
              <FaInstagram />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialNetwork;
