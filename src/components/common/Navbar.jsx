import React from 'react';
import { useEffect, useState } from "react";
import BurguerButton from "./BurguerButton";
import { useTranslation } from "react-i18next";
import { HiOutlineCode } from "react-icons/hi";

export const Navbar = () => {

    const [t] = useTranslation("global");

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked);
    }

    useEffect(() => {
        if (clicked) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [clicked]);

    const link = (section) => {
        return (
            <a href={`#${section}`} onClick={() => setClicked(false)}>{t(`header.${section}`)}</a>
        )
    }

    return (
        <header>
            <div className="logo-bx">
                <a href="#home"><HiOutlineCode /></a>
            </div>
            <nav className={clicked ? "responsive_nav" : ""}>
                {link("home")}
                {link("projects")}
                {link("skills")}
                {link("contact")}
            </nav>

            <button className="nav-btn">
                <BurguerButton clicked={clicked} handleClick={handleClick} />
            </button>
        </header>
    );
}