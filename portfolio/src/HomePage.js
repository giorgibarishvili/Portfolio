import { EmblaCarousel } from "./components/Embla/Carousel";
import "./styles/Homepage.css";
function HomePage() {
  return (
    <div className="container-fluid main">
      <div>
        <EmblaCarousel />
        About me
      </div>
    </div>
  );
}
export default HomePage;
