import { EmblaCarousel } from "./components/Embla/Carousel";
import { Fade } from "react-awesome-reveal";
import "./styles/Homepage.css";
import Appear from "./components/animations/Appear";
import Reveal from "./components/animations/Reveal";
import { ReactComponent as Programmer } from "./images/computer-programmer.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
function HomePage() {
  const { t } = useTranslation();
  const [messageBox, setMessageBox] = useState("");
  const [userName, setUserName] = useState("");
  const [eMail, setEMail] = useState("");
  const [eMailTouched, setEmailTouched] = useState(false);
  const [userNameTouched, setUserNameTouched] = useState(false);
  const [messageBoxTouched, setMessageBoxTouched] = useState(false);
  return (
    <div className="container main">
      {/* <EmblaCarousel /> */}
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
      <div className="form d-flex">
        <div
          className="me-5 align-items-center d-flex"
          //aq gavcherdi
        >
          <Appear>
            lets connect <br />
            my email is asdas@aSd,.asr
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
              <label htmlFor="floatingInput">Your name</label>
              {userNameTouched && !userName && (
                <span class="text-danger error-validation-text">
                  This field is mandatory
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
              <label htmlFor="floatingInput">Your EMail</label>
              {eMailTouched && !eMail && (
                <span class="text-danger error-validation-text">
                  This field is mandatory
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
              <label htmlFor="floatingInput">Enter text</label>
              {messageBoxTouched && !messageBox && (
                <span class="text-danger error-validation-text">
                  This field is mandatory
                </span>
              )}
            </div>
          </Reveal>
          <Reveal>
            <button
              className="mb-5"
              type="submit"
              disabled={!eMail || !userName || !messageBox}
            >
              Submit
            </button>
          </Reveal>
          {/* <input
              style={{
                height: "400px",
                width: "500px",
                // margin: "auto",
                backgroundColor: "black",
                color: "white",
              }}
              //aq gavcherdi inputebis damatebaze
              className={"form-control active-input mx-auto"}
              value={messageBox}
              onChange={(e) => setMessageBox(e.target.value)}
            ></input> */}
        </form>
      </div>
    </div>
  );
}
export default HomePage;
