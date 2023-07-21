import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

function VerticalTabs() {

  const [t] = useTranslation("global");

  const [activeTab, setActiveTab] = useState(1);

  const verticaltabs = (content, number) => {
    return (
      <div className={`content__section ${activeTab === number ? 'visible' : ''}`}>
        <div>
          <ul>
            {
              t(`verticaltabs.${content}`, { returnObjects: true }).map((course, index) => (
                <li key={index}>
                  <a
                    href={course.link}
                    target="_blank"
                  >
                    {course.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }

  const tab = (tech, number) => {
    return <span className={`tab tab-${number} ${activeTab === number ? 'active' : ''}`} onClick={() => setActiveTab(number)}>{tech}</span>
  }

  return (
    <section className='section-tabs' id='skills'>
      <h2 className='title-content'>{t("verticaltabs.h2")}</h2>
      <div className="container">
        <div className="tabs">
          {tab("JavaScript", 1)}
          {tab("React", 2)}
          {tab("TypeScript", 3)}
          {tab("NodeJs", 4)}
          <span className="highlighter"></span>
        </div>

        <div className="content">
          <h3>{t("verticaltabs.h3")}</h3>
          {verticaltabs("contentJS", 1)}
          {verticaltabs("contentReact", 2)}
          {verticaltabs("contentTS", 3)}
          {verticaltabs("contentNode", 4)}
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;