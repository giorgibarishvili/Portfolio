import { EmblaCarousel } from "./components/Embla/Carousel";
import { Fade } from "react-awesome-reveal";
import "./styles/Homepage.css";
import Appear from "./components/animations/Appear";
import Reveal from "./components/animations/Reveal";
import { ReactComponent as Programmer } from "./images/computer-programmer.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
function HomePage() {
  const [messageBox, setMessageBox] = useState("");
  const [userName, setUserName] = useState("");
  const [eMail, setEMail] = useState("");
  const { t } = useTranslation();
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
          lets connect <br />
          my email is asdas@aSd,.asr
        </div>
        <form className="ms-5">
          <Appear>
            <div className="form-floating input-frame pb-5">
              <input
                type="text"
                className={"form-control"}
                id="floatingInput"
                value={userName}
                placeholder="Input"
                onChange={(e) => setUserName(e.target.value)}
                autoComplete="off"
                required
              />
              <label htmlFor="floatingInput">Your name</label>
            </div>
          </Appear>

          <Appear>
            <div className="form-floating input-frame pb-5">
              <input
                type="text"
                className={"form-control"}
                id="floatingInput"
                value={eMail}
                placeholder="Input"
                onChange={(e) => setEMail(e.target.value)}
                autoComplete="off"
                required
              />
              <label htmlFor="floatingInput">Your EMail</label>
            </div>
          </Appear>
          <Appear>
            <div className="form-floating input-frame pb-3">
              <textarea
                className="input-field textarea form-floating form-control"
                id="floatingInput"
                placeholder={t("post")}
                value={messageBox}
                onChange={(e) => setMessageBox(e.target.value)}
                required
              ></textarea>
              <label htmlFor="floatingInput">Enter text</label>
            </div>
          </Appear>
          <Reveal>
            <button className="mb-5" type="submit">Submit</button>
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
