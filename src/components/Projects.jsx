import React from 'react';
import { useTranslation } from "react-i18next";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

export const Projects = () => {

    const { t } = useTranslation("global");

    return (
        <section className='section-projects' id='projects'>
            <h2 className='title-content'>{t("projects.h2")}</h2>
            <div className="project-container">
                {t("projects.content", { returnObjects: true }).map((project, index) => (
                    <div key={project.h4} className="project">
                        <div className={`project-content ${index % 2 === 0 ? '' : 'project-reverse'}`}>
                            <div className="project-label">{t(project.project_type)}</div>
                            <h4 className="project-title">{t(project.h4)}</h4>
                            <div className="project-details">
                                <p>{t(project.p)}</p>
                                <ul>
                                    {project.technologies.map(tech => (
                                        <li key={tech}>{t(tech)}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='projects-links'>
                                <a href={t(project.link_web)} target="_blank"><FiExternalLink /></a>
                                <a href={t(project.link_git)} target="_blank"><FiGithub /></a>
                            </div>
                        </div>
                        <a href={t(project.link_web)} target="_blank" rel="noopener noreferrer" className={`project-img ${index % 2 === 0 ? '' : 'img-reverse'}`}>
                            <img src={'./img/' + t(project.img) + '.png'} alt={project.h4} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};