import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

function VerticalTabs() {

  const [t] = useTranslation("global");

  const [activeTab, setActiveTab] = useState(1);

  const verticaltabs = (content) => {
    return (
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
    )
  }

  return (
    <section className='section-tabs' id='skills'>
      <h2 className='title-content'>{t("verticaltabs.h2")}</h2>
      <div className="container">
        <div className="tabs">
          <span className={`tab tab-1 ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>JavaScript</span>
          <span className={`tab tab-2 ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>React</span>
          <span className={`tab tab-3 ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>TypeScript</span>
          <span className={`tab tab-4 ${activeTab === 4 ? 'active' : ''}`} onClick={() => setActiveTab(4)}>NodeJs</span>
          <span className="highlighter"></span>
        </div>

        <div className="content">
          <h3>{t("verticaltabs.h3")}</h3>
          <div className={`content__section ${activeTab === 1 ? 'visible' : ''}`}>
            <div>
              <ul>
                {verticaltabs("contentJS")}
              </ul>
            </div>
          </div>
          <div className={`content__section ${activeTab === 2 ? 'visible' : ''}`}>
            <div>
              <ul>
                {verticaltabs("contentReact")}
              </ul>
            </div>
          </div>
          <div className={`content__section ${activeTab === 3 ? 'visible' : ''}`}>
            <div>
              <ul>
                {verticaltabs("contentTS")}
              </ul>
            </div>
          </div>
          <div className={`content__section ${activeTab === 4 ? 'visible' : ''}`}>
            <div>
              <ul>
                {verticaltabs("contentNode")}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;