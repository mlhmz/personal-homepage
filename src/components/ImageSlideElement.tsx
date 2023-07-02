import { useSwiperSlide } from "swiper/react";
import { Icons } from "./Icons";
import { useEffect, useState } from "react";

/**
 * Image slide element to manage lazy loading with swiper
 */
export default function ImageSlideElement({ url }: { url: string }) {
  const swiperSlide = useSwiperSlide();
  const [isLoadedOnce, setIsLoadedOnce] = useState(false);

  const isActive = () => {
    return swiperSlide.isPrev || swiperSlide.isActive || swiperSlide.isNext;
  }

  useEffect(() => {
    isActive() && setIsLoadedOnce(true);
  }, [swiperSlide])

  const isImageVisible = () => {
    return isActive() || isLoadedOnce;
  }

  const getImage = () => {
    if (!isImageVisible()) {
      return <div><Icons.spinner className="animate-spin ease-in-out" /></div>
    }
    return <img src={url} />;
  }

  return (
    <div className="min-h-full min-w-full w-full h-full grid place-items-center">
      { getImage() }
    </div>
  );
}
