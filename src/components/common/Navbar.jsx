import { useEffect, useState } from "react";
import BurguerButton from "./BurguerButton";
import { useTranslation } from "react-i18next";

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

    return (
        <header>
            <div className="logo-bx">
                <a href="#home"><i className='bx bx-code-alt'></i></a>
            </div>
            <nav className={clicked ? "responsive_nav" : ""}>
                <a href="#home" onClick={() => setClicked(false)}>{t("header.home")}</a>
                <a href="#projects" onClick={() => setClicked(false)}>{t("header.work")}</a>
                <a href="#skills" onClick={() => setClicked(false)}>{t("header.skills")}</a>
                <a href="#contact" onClick={() => setClicked(false)}>{t("header.contact")}</a>
            </nav>

            <button className="nav-btn">
                <BurguerButton clicked={clicked} handleClick={handleClick} />
            </button>
        </header>
    );
}