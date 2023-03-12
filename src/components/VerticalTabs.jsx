import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

function VerticalTabs() {

  const [t] = useTranslation("global");

  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className='section-tabs' id='skills'>
      <h2 className='title-content'>{t("verticaltabs.h2")}</h2>
      <div className="container">
        <div className="tabs">
          <span className={`tab tab-1 ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>JavaScript</span>
          <span className={`tab tab-2 ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>React</span>
          <span className={`tab tab-3 ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>NodeJs</span>
          <span className={`tab tab-4 ${activeTab === 4 ? 'active' : ''}`} onClick={() => setActiveTab(4)}>HTML & CSS</span>
          <span className="highlighter"></span>
        </div>

        <div className="content">
          <h3>{t("verticaltabs.h3")}</h3>
          <div className={`content__section ${activeTab === 1 ? 'visible' : ''}`}>
            <div>
              <ul>
                <li><a href={'./pdf/' + "js1" + '.pdf'} target="_blank" >{t("verticaltabs.js0")}</a></li>
                <li><a href={'./pdf/' + "js2" + '.pdf'} target="_blank" >{t("verticaltabs.js1")}</a></li>
                <li><a href={'./pdf/' + "js3" + '.pdf'} target="_blank" >{t("verticaltabs.js2")}</a></li>
                <li><a href={'./pdf/' + "jsErrors" + '.pdf'} target="_blank" >{t("verticaltabs.js3")}</a></li>
                <li><a href={'./pdf/' + "asyncJavaScript" + '.pdf'} target="_blank" >{t("verticaltabs.js4")}</a></li>
              </ul>
            </div>
          </div>
          <div className={`content__section ${activeTab === 2 ? 'visible' : ''}`}>
            <div>
              <ul>
                <li><a href={'./pdf/' + "react1" + '.pdf'} target="_blank" >{t("verticaltabs.react0")}</a></li>
                <li><a href={'./pdf/' + "react2" + '.pdf'} target="_blank" >{t("verticaltabs.react1")}</a></li>
              </ul>
            </div>
          </div>
          <div className={`content__section ${activeTab === 3 ? 'visible' : ''}`}>
            <div>
              <ul>
                <li><a href={'./pdf/' + "node1" + '.pdf'} target="_blank" >{t("verticaltabs.node")}</a></li>
                <li><a href={'./pdf/' + "react2" + '.pdf'} target="_blank" >{t("verticaltabs.react1")}</a></li>
              </ul>
            </div>
          </div>
          <div className={`content__section ${activeTab === 4 ? 'visible' : ''}`}>
            <div>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=kN1XP-Bef7w&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW">{t("verticaltabs.html")}</a></li>
                <li><a href="https://www.youtube.com/watch?v=OWKXEJN67FE&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=2">{t("verticaltabs.css")}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;