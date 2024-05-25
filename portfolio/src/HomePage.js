import { EmblaCarousel } from "./components/Embla/Carousel";
import { Fade } from "react-awesome-reveal";
import "./styles/Homepage.css";
import Appear from "./components/animations/Appear";
import { ReactComponent as Programmer } from "./images/computer-programmer.svg";
import { useTranslation } from "react-i18next";
function HomePage() {
  const { t } = useTranslation();
  return (
    <div className="container main">
      <Appear>
        {/* <EmblaCarousel /> */}
        <div className="who-am-i mt-5">
          {t("greetings")}
          <br />
          {t("description")}
          <Programmer />
        </div>
      </Appear>
    </div>
  );
}
export default HomePage;
