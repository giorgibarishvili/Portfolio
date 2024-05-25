import { useState } from "react";
import "../styles/Navbar.css";
import Button from "./Button.js";
import i18n from "./i18n/i18n";
import { useTranslation } from "react-i18next";
import { ReactComponent as GithubLogo } from "../images/github-mark-white.svg";
import { ReactComponent as Linkedin } from "../images/icons8-linkedin.svg";
import { useEffect } from "react";
function Navbar() {
  const { t } = useTranslation();
  const [lang, setLang] = useState("en");
  function changeBetweenLanguages() {
    const newLang = lang === "en" ? "ka" : "en";
    setLang(newLang);
    i18n.changeLanguage(newLang);
  }

  const [itsOn, setItsOn] = useState(false);
  useEffect(() => {
    console.log(itsOn);
  }, [itsOn]);

  return (
    <div className="navbar container-fluid">
      <div className="ms-5">
        <Button className="me-3" onClick={() => setItsOn(!itsOn)}>
          Home
        </Button>
        {itsOn && <Button className="me-3">About</Button>}
        <Button className="me-3">Projects</Button>
      </div>
      <div className="asd me-5">
        <Button onClick={changeBetweenLanguages}>{t("language")}</Button>
        <a
          href="portfolio/src/images/Giorgi Barishvili.pdf"
          download="Giorgi Barishvili CV"
          target="_blank"
        >
          <Button className="ms-3">CV</Button>
        </a>
        <a
          href="https://github.com/giorgibarishvili"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link ms-5"
        >
          <GithubLogo />
        </a>
        <a
          href="https://www.linkedin.com/in/giorgi-b-125912ba/"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link ms-5"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  );
}
export default Navbar;
