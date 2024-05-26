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

  const { t } = useTranslation();
  return (
    <div className="container main">
      {/* <EmblaCarousel /> */}
      <div className="who-am-i mt-5">
        <Appear>
          {t("greetings")}
          <br />
          {t("description")}
        </Appear>
        <Reveal>
          <Programmer />
        </Reveal>
      </div>
      <div>
        <Appear>
          <input
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
          ></input>
        </Appear>
      </div>
    </div>
  );
}
export default HomePage;
