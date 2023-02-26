import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

export const OtherProjects = () => {
    const { t } = useTranslation("global");
    const [projectsToShow, setProjectsToShow] = useState(3);

    const showMoreProjects = () => {
        setProjectsToShow(projectsToShow + 3);
    };

    return (
        <section className='section-proyects2'>
            <h2 className='title-content'>{t("other_projects.h2")}</h2>
            <div className='projects-grid'>
                {t("other_projects.content", { returnObjects: true })
                    .slice(0, projectsToShow)
                    .map(project => (
                        <div className='other-projects' key={project.h3}>
                            <a href={t(project.link)} target="_blank">
                                <div className='project-top'>
                                    <div className='folder'>
                                        <i className='bx bx-folder'></i>
                                    </div>
                                    <div className='project-links'>
                                        <i className='bx bxl-github'></i>
                                    </div>
                                </div>
                                <div className='project-mid'>
                                    <h3>{t(project.h3)}</h3>
                                    <p>{t(project.p)}</p>
                                </div>
                                <div className='project-bottom'>
                                    <ul>
                                        {project.technologies.map(tech => (
                                            <li key={tech}>{t(tech)}</li>
                                        ))}
                                    </ul>
                                </div>
                            </a>
                        </div>
                    ))}
            </div>
            {projectsToShow < t("other_projects.content", { returnObjects: true }).length && (
                <button onClick={showMoreProjects} className="seeMore-btn">{t("other_projects.view_more_button")}</button>
            )}
        </section>
    );
};