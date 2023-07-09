import { useSwiper } from "swiper/react";
import { Icons } from "./Icons";

export default function ImageSlideNavigation() {
  const swiper = useSwiper();

  return (
    <div className="flex flex-row justify-center items-center gap-10 my-5">
      <a className="cursor-pointer" onClick={() => swiper.slidePrev()} aria-label="Previous Slide">
        <Icons.chevronLeft />
      </a>
      <a className="cursor-pointer" onClick={() => swiper.slideNext()} aria-label="Next Slide">
        <Icons.chevronRight />
      </a>
    </div>
  );
}
