import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import spain from "../assets/spain.svg";
import uk from "../assets/UK.svg"

export const Home = () => {

    const [t, i18n] = useTranslation("global");

    const [selectedOption, setSelectedOption] = useState({
        text: i18n.language === "en" ? "English" : "Español",
        img: i18n.language === "en" ? uk : spain
    });

    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption({
            text: option.text,
            img: option.img
        });
        setIsOpen(false);
    };

    const options = (img, text, lng) => {
        return (
            <button className="option" onClick={() => handleOptionClick({ text: text, img: img })}>
                <div className="content-option" onClick={() => i18n.changeLanguage(lng)}>
                    <img src={img} alt="" />
                    <div className="texts">
                        <span className="title">{text}</span>
                    </div>
                </div>
            </button>
        )
    }

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
                            {options(uk, "English", "en")}
                            {options(spain, "Español", "es")}
                        </div>
                    </div>
                    <input type="hidden" name="pais" id="inputSelect" value={selectedOption.text} />
                </div>
            </div>
        </section>
    )
}
