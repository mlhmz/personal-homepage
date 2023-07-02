// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ImageSlideElement from "./ImageSlideElement";

export default function ImageSlide({ imageUrls }: { imageUrls: string[] }) {
  return (
    <Swiper className="">
      {imageUrls.map((imageUrl) => (
        <SwiperSlide key={imageUrl}>
          <ImageSlideElement url={imageUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
