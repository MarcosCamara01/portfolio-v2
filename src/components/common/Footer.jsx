import React from 'react';
import { useTranslation } from "react-i18next";

export const Footer = () => {

  const [t] = useTranslation("global");

  return (
    <div className='content-footer'><a href="https://github.com/MarcosCamara01">{t("footer")}</a></div>
  )
}
