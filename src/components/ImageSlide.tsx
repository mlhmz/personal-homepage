// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { useState } from "react";
import "swiper/css";
import BigPictureView from "./BigPictureView";
import ImageSlideElement from "./ImageSlideElement";
import ImageSlideNavigation from "./ImageSlideNavigation";

interface BigPicture {
  shown: boolean;
  imgUrl?: string;
}

export default function ImageSlide({ imageUrls }: { imageUrls: string[] }) {
  const [bigPicture, setBigPicture] = useState({} as BigPicture);

  return (
    <>
      {bigPicture.shown && (
        <BigPictureView imgUrl={bigPicture.imgUrl} onClose={() => setBigPicture({ shown: false })} />
      )}
      <Swiper>
        <ImageSlideNavigation />
        {imageUrls.map((imageUrl) => (
          <SwiperSlide key={imageUrl}>
            <ImageSlideElement
              url={imageUrl}
              onBigPicture={() => setBigPicture({ shown: true, imgUrl: imageUrl })}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
