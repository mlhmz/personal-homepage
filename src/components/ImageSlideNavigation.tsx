import { useSwiper } from "swiper/react";
import { Icons } from "./Icons";

export default function ImageSlideNavigation({ slideCount }: { slideCount: string }) {
  const swiper = useSwiper();

  return (
    <div className="my-5 flex flex-row items-center justify-center gap-10">
      <a className="cursor-pointer" onClick={() => swiper.slidePrev()} aria-label="Previous Slide">
        <Icons.chevronLeft />
      </a>
      <a>{slideCount}</a>
      <a className="cursor-pointer" onClick={() => swiper.slideNext()} aria-label="Next Slide">
        <Icons.chevronRight />
      </a>
    </div>
  );
}
