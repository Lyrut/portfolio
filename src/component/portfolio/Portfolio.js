import React from "react";
import "./portfolio.scss";

import DataPortfolio from "./data/portfolio_fr.json";

import SocialNetworks from "../SocialNetworks";
import PageTop from "./component/PageTop";
import Container from "./component/Container";

import "./scss/personal-details.scss";
import "./scss/list-skills.scss";
import "./scss/work-experience.scss";
import "./scss/list-education.scss";

import DataSkills from "./component/data/web-lang.json";
import DataWorks from "./component/data/works_fr.json";
import DataEducation from "./component/data/education_fr.json";

import Skill from "./component/Skill";
import Works from "./component/Works";
import Education from "./component/Education";

import { IconContext } from "react-icons";
import { FaTimes } from "react-icons/fa";

function Portfolio(props) {
  const skills = DataSkills.map((data, i) => {
    return (
      <Skill
        key={i}
        LangName={data.name}
        Percent={data.percent}
        Color={data.color}
        Parameter={data.parameter}
      />
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
    <div className="FixedTop">
      <div className="Name">Vissarut Ly</div>
      <div className="BtnHideInfo" onClick={props.onClick}>
        <IconContext.Provider value={{ size: 26, className: "FaTimes" }}>
          <FaTimes />
        </IconContext.Provider>
      </div>
      <div className="SNList">
        <SocialNetworks PageName="PortfolioP" />
      </div>
    </div>
  );

  const portfolio = DataPortfolio.map((data, i) => {
    return (
      <div key={i}>
        <Container
          ContainerName={data.personalDetail}
          SectionName="PersonalDetail"
        />
        <Container
          ContainerName={data.skills}
          SectionName="Skills"
          Data={skills}
        />
        <Container
          ContainerName={data.workExperience}
          SectionName="WorkExperience"
          Data={works}
        />
        <Container
          ContainerName={data.education}
          SectionName="Education"
          Data={educations}
        />
      </div>
    );
  });

  return (
    <div id="portfolio">
      <article>
        <div className="pageTop">
          {topInfo}
          <PageTop />
        </div>

        <section>
          {topInfo}
          {portfolio}

          <div className="footer">
            <div className="Mail">vissarut.ly@gmail.com</div>
          </div>
        </section>
      </article>
    </div>
  );
}

export default Portfolio;
