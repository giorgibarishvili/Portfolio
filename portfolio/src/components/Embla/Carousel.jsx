import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../Embla/Carousel.css"
import { ReactComponent as GithubLogo } from "../../images/github-mark-white.svg";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><GithubLogo /></div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
}
