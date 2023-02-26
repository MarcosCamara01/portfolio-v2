import React from 'react';
import { useTranslation } from "react-i18next";

export const Contact = () => {

    const [t] = useTranslation("global");

    return (
        <section className='section-contact' id='contact'>
            <h2 className='title-content'>{t("contact.h2")}</h2>
            <div className="container-contact">
                <div className="content">
                    <form action="https://formsubmit.co/contact@portfoliomarcos.com" method="POST">
                        <div className="topic">{t("contact.msg")}</div>
                        <div className="input-box">
                            <input type="text" id="name" required autoComplete="nope" name="name" />
                            <label>{t("contact.name")}</label>
                        </div>
                        <div className="input-box">
                            <input type="email" id="email" required autoComplete="off" name="email" />
                            <label>{t("contact.email")}</label>
                        </div>
                        <div className="message-box">
                            <textarea type="text" id="message" required name="message"></textarea>
                            <label>{t("contact.message")}</label>
                        </div>
                        <div className="input-box">
                            <input type="submit" value={t("contact.button")} />
                        </div>
                        <input type="hidden" name="_next" value="https://portfoliomarcos.com/#contact" />
                        <input type="hidden" name="_captcha" value="false"></input>
                    </form>
                </div>
            </div>
        </section>
    )
}
