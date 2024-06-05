// import { Fade } from "react-awesome-reveal";
import "../styles/Homepage.css";
import Appear from "./animations/Appear";
import Reveal from "./animations/Reveal";
import { ReactComponent as Programmer } from "../images/computer-programmer.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion } from "framer-motion";
import ModalPop from "./ModalPop";

const pageTransition = {
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" },
};

function HomePage() {
  const { t } = useTranslation();
  const [messageBox, setMessageBox] = useState("");
  const [userName, setUserName] = useState("");
  const [eMail, setEMail] = useState("");
  const [eMailTouched, setEmailTouched] = useState(false);
  const [userNameTouched, setUserNameTouched] = useState(false);
  const [messageBoxTouched, setMessageBoxTouched] = useState(false);
  const [onClose, setOnClose] = useState(false);
  return (
    <motion.div
      className="container main"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: 0.5 }}
    >
      <div className="who-am-i mt-5 mb-5">
        <div className="greetings">
          <Appear>
            {t("greetings")}
            <br />
            {t("description")}
          </Appear>
        </div>
        <Reveal>
          <Programmer />
        </Reveal>
      </div>
      <button onClick={() => setOnClose(true)}>modal</button>
      {onClose && (
        <ModalPop onClose={setOnClose} size={"md"}>
          <div className="row text-center">
            <div className="col-12 mx-auto">
              <div className="visit-asked mt-5">{t("something")}</div>
              <div className="mx-auto mt-5 mb-3 d-flex justify-content-center">
                <div className="col-md-6 d-flex justify-content-end">
                  <button
                    className="no-btn me-3"
                    onClick={() => setOnClose(false)}
                  >
                    {t("no")}
                  </button>
                </div>
                <div className="col-md-6 d-flex ">
                  <button
                    className="yes-btn"
                    onClick={() => {
                      setOnClose(false);
                    }}
                  >
                    {t("yes")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalPop>
      )}
      <div className="form d-flex">
        <div
          className="me-5 align-items-center d-flex"
          style={{ width: "300px" }}
        >
          <Appear>
            {t("messageMe")} <br />
            {t("myMail")} Barishili2001@gmail.com
          </Appear>
        </div>
        <form className="ms-5">
          <Reveal>
            <div className="form-floating input-frame pb-5">
              <input
                type="text"
                className={`form-control${
                  userNameTouched && !userName ? " is-invalid" : ""
                }`}
                id="floatingInput"
                value={userName}
                placeholder=""
                onChange={(e) => setUserName(e.target.value)}
                onBlur={() => setUserNameTouched(true)}
                autoComplete="off"
                required
              />
              <label htmlFor="floatingInput">{t("nameInput")}</label>
              {userNameTouched && !userName && (
                <span class="text-danger error-validation-text">
                  {t("mandatory")}
                </span>
              )}
            </div>
          </Reveal>

          <Reveal>
            <div className="form-floating input-frame pb-5">
              <input
                type="text"
                className={`form-control${
                  eMailTouched && !eMail ? " is-invalid" : ""
                }`}
                id="floatingInput"
                value={eMail}
                placeholder=""
                onChange={(e) => setEMail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                autoComplete="off"
                required
              />
              <label htmlFor="floatingInput">{t("emailInput")}</label>
              {eMailTouched && !eMail && (
                <span class="text-danger error-validation-text">
                  {t("mandatory")}
                </span>
              )}
            </div>
          </Reveal>
          <Reveal>
            <div className="form-floating input-frame pb-3">
              <textarea
                className={`input-field textarea form-floating form-control ${
                  messageBoxTouched && !messageBox ? " is-invalid" : ""
                }`}
                id="floatingInput"
                placeholder=""
                value={messageBox}
                onChange={(e) => setMessageBox(e.target.value)}
                onBlur={() => setMessageBoxTouched(true)}
                required
              ></textarea>
              <label htmlFor="floatingInput">{t("textInput")}</label>
              {messageBoxTouched && !messageBox && (
                <span class="text-danger error-validation-text">
                  {t("mandatory")}
                </span>
              )}
            </div>
          </Reveal>
          <button
            className="mb-5"
            type="submit"
            disabled={!eMail || !userName || !messageBox}
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}
export default HomePage;
