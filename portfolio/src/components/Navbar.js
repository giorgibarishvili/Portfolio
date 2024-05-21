import { useState } from "react";
import "../styles/Navbar.css"
import Button from "./Button.js";
import i18n from "./i18n/i18n";
import { useTranslation } from "react-i18next";
import {ReactComponent as GithubLogo} from "../images/github-mark-white.svg"
function Navbar() {
    const {t} = useTranslation();
    const [lang, setLang] = useState('en')
    function changeBetweenLanguages() {
        const newLang = lang === 'en' ? 'ka' : 'en';
        setLang(newLang);
        i18n.changeLanguage(newLang);
      }
    
    return (
        <div className="navbar">
            <Button onClick={changeBetweenLanguages}>{t("language")}</Button>
            <a href="https://github.com/giorgibarishvili" target="_blank" rel="noopener noreferrer" className="github-link ms-5">
            <GithubLogo />
            </a>
        </div>
    )
    
}
export default Navbar;