import { useSwiperSlide } from "swiper/react";
import { Icons } from "./Icons";
import { Dispatch, useEffect, useState } from "react";

interface ImageSlideElementProps {
  url: string;
  onBigPicture: Dispatch<void>;
}

/**
 * Image slide element to manage lazy loading with swiper
 */
export default function ImageSlideElement({ url, onBigPicture }: ImageSlideElementProps) {
  const swiperSlide = useSwiperSlide();
  const [isLoadedOnce, setIsLoadedOnce] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const isActive = () => {
    return swiperSlide.isPrev || swiperSlide.isActive || swiperSlide.isNext;
  };

  useEffect(() => {
    isActive() && setIsLoadedOnce(true);
  }, [swiperSlide]);

  const isImageVisible = () => {
    return isActive() || isLoadedOnce;
  };

  const getImage = () => {
    if (!isImageVisible()) {
      return (
        <div>
          <Icons.spinner className="animate-spin ease-in-out" />
        </div>
      );
    }
    return <img src={url} />;
  };

  return (
    <>
      <div className="grid h-full min-h-full w-full min-w-full place-items-center">
        <div className="cursor-pointer" onClick={() => onBigPicture()}>
          {getImage()}
        </div>
      </div>
    </>
  );
}
