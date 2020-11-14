import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./index.scss";

import Portfolio from "./component/portfolio/Portfolio";
import Home from "./component/Home";

function Main() {
  const [showHome, setShowHome] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const showHomeClass = showHome ? "fade-in" : "fade-out";
  const showPortfolioClass = showPortfolio ? "fade-in" : "fade-out";

  return (
    <>
      {showHome && (
        <Home
          onClick={() => setShowPortfolio(true)}
          HomeClass={showHomeClass}
        />
      )}
      <CSSTransition
        in={showPortfolio}
        timeout={300}
        classNames="portfolio"
        unmountOnExit
        onEnter={() => setShowHome(false)}
        onExited={() => setShowHome(true)}
      >
        <Portfolio
          onClick={() => setShowPortfolio(false)}
          PortfolioClass={showPortfolioClass}
        />
      </CSSTransition>
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
