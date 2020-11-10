import React from "react";
import "./social-networks.scss";

import { IconContext } from "react-icons";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialNetwork(props) {
  let PageName = "SocialNetworks";

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
            id="Facebook"
          >
            <IconContext.Provider value={{ className: "Icons" }}>
              <FaFacebook />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/_Lyrut"
            target="_blank"
            rel="noopener noreferrer"
            id="Twitter"
          >
            <IconContext.Provider value={{ className: "Icons" }}>
              <FaTwitter />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/_lyrut/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            id="Instagram"
          >
            <IconContext.Provider value={{ className: "Icons" }}>
              <FaInstagram />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialNetwork;
