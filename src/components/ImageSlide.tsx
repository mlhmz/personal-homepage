// Import Swiper React components
import { Swiper as SwiperElement, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { useState } from "react";
import "swiper/css";
import BigPictureView from "./BigPictureView";
import ImageSlideElement from "./ImageSlideElement";
import ImageSlideNavigation from "./ImageSlideNavigation";
import type Swiper from "swiper";

interface BigPicture {
  shown: boolean;
  imgUrl?: string;
}

export default function ImageSlide({ imageUrls }: { imageUrls: string[] }) {
  const [bigPicture, setBigPicture] = useState({} as BigPicture);
  const [slideCount, setSlideCount] = useState("");

  const setSlideCountToSwiperData = (swiper: Swiper) => setSlideCount(`${swiper.activeIndex + 1} / ${swiper.slides.length}`);

  return (
    <>
      {bigPicture.shown && (
        <BigPictureView imgUrl={bigPicture.imgUrl} onClose={() => setBigPicture({ shown: false })} />
      )}
      <SwiperElement onInit={setSlideCountToSwiperData} onSlideChange={setSlideCountToSwiperData}>
        <ImageSlideNavigation slideCount={slideCount} />
        {imageUrls.map((imageUrl) => (
          <SwiperSlide key={imageUrl}>
            <ImageSlideElement
              url={imageUrl}
              onBigPicture={() => setBigPicture({ shown: true, imgUrl: imageUrl })}
            />
          </SwiperSlide>
        ))}
      </SwiperElement>
    </>
  );
}
