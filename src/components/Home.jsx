import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import spain from "../assets/spain.svg";
import uk from "../assets/UK.svg"

export const Home = () => {

    const [t, i18n] = useTranslation("global");

    const [selectedOption, setSelectedOption] = useState({
        text: "Español",
        img: spain
    });

    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption({
            text: option.text,
            img: option.img
        });
        setIsOpen(false);
    };

    return (
        <section className='section-home' id='home'>
            <div className="main-content">
                <h3>{t("home.h3")}</h3>
                <h1>{t("home.h1")}</h1>
                <h2>{t("home.h2")}</h2>
                <p>
                    {t("home.p")}
                </p>
                <div className="container-lang">
                    <div className="selectbox">
                        <div className={`select ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                            <div className="content-select">
                                <img src={selectedOption.img} alt="" />
                                <div className="texts">
                                    <span className="title">{selectedOption.text}</span>
                                </div>
                            </div>
                            <i className="fas fa-angle-down"></i>
                        </div>

                        <div className={`options ${isOpen ? 'active' : ''}`}>
                            <button className="option" onClick={() => handleOptionClick({ text: "English", img: uk })}>
                                <div className="content-option" onClick={() => i18n.changeLanguage("en")}>
                                    <img src={uk} alt="" />
                                    <div className="texts">
                                        <span className="title">English</span>
                                    </div>
                                </div>
                            </button>
                            <button href="#" className="option" onClick={() => handleOptionClick({ text: "Español", img: spain })}>
                                <div className="content-option" onClick={() => i18n.changeLanguage("es")}>
                                    <img src={spain} alt="" />
                                    <div className="texts">
                                        <span className="title">Español</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <input type="hidden" name="pais" id="inputSelect" value={selectedOption.text} />
                </div>
            </div>
        </section>
    )
}
