import React from "react";
import "./portfolio.scss";

import DataPortfolio from "./data/portfolio_fr.json";

import SocialNetworks from "../SocialNetworks";
import Container from "./component/Container";

import DataPersonal from "./component/data/personal_fr.json";
import DataSkills from "./component/data/web-lang.json";
import DataWorks from "./component/data/works_fr.json";
import DataEducation from "./component/data/education_fr.json";

import Personal from "./component/Personal";
import Skill from "./component/Skill";
import Works from "./component/Works";
import Education from "./component/Education";

import { IconContext } from "react-icons";
import { FaTimes } from "react-icons/fa";
import { AiOutlineFilePdf } from "react-icons/ai";

function Portfolio(props) {
  const personal = DataPersonal.map((data, i) => {
    return (
      <Personal
        key={i}
        Welcome={data.welcome}
        Name={data.name}
        Description1={data.description1}
        Description2={data.description2}
      />
    );
  });

  const skills = DataSkills.map((data, i) => {
    return (
      <Skill key={i} Language={data.language} Framework={data.framework} />
    );
  });

  const works = DataWorks.map((data, i) => {
    return (
      <Works
        key={i}
        Year={data.year}
        CompanyWebsite={data.company.website}
        CompanyLogo={data.company.logo.link}
        Class={data.company.logo.class}
        CompanyName={data.company.name}
        CompanyLocation={data.company.location}
        JobDescription={data.job.description}
        JobDuration={data.job.duration}
        Subjob={data.subjob}
      />
    );
  });

  const educations = DataEducation.map((data, i) => {
    return (
      <Education
        key={i}
        Years={data.years}
        TitleName={data.title.name}
        TitleSpeciality={data.title.speciality}
        TitleAcronym={data.title.acronym}
        WorkType={data.work.type}
        WorkPeriod={data.work.period}
        SchoolName={data.school.name}
        SchoolLocation={data.school.location}
      />
    );
  });

  const topInfo = (
    <div className="fixedTop">
      <div className="name">Vissarut Ly</div>
      <div className="btnHideInfo" onClick={props.onClick}>
        <IconContext.Provider value={{ size: 26, className: "faTimes" }}>
          <FaTimes />
        </IconContext.Provider>
      </div>
      <div className="snList">
        <SocialNetworks PageName="portfolioP" />
      </div>
    </div>
  );

  const portfolio = () => {
    return (
      <>
        <Container
          ContainerName={DataPortfolio.personal}
          SectionName="personal"
          Data={personal}
        />
        <Container
          ContainerName={DataPortfolio.skills}
          SectionName="skills"
          Data={skills}
        />
        <Container
          ContainerName={DataPortfolio.workExperience}
          SectionName="workExperience"
          Data={works}
        />
        <Container
          ContainerName={DataPortfolio.education}
          SectionName="education"
          Data={educations}
        />
      </>
    );
  };

  return (
    <div id="portfolio">
      <article>
        <div className="pageTop">{topInfo}</div>

        <section>
          {topInfo}
          {portfolio()}

          <div className="cv">
            <div className="cv-info">Mon CV pour plus d'information</div>

            <a
              href={process.env.PUBLIC_URL + "assets/document/cv_vl.pdf"}
              download="Vissarut LY"
            >
              <IconContext.Provider
                value={{
                  size: 36,
                  className: "aiOutlineFilePdf",
                }}
              >
                <AiOutlineFilePdf />
              </IconContext.Provider>
              <div className="file-name">CV</div>
            </a>
          </div>

          <div className="footer">
            <div className="snList">
              <SocialNetworks PageName="portfolioP" />
            </div>
            <div className="mail">vissarut.ly@gmail.com</div>
          </div>
        </section>
      </article>
    </div>
  );
}

export default React.memo(Portfolio);
