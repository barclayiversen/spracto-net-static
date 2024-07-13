// components/PhotoCarouselServer.tsx
import PhotoCarouselClient from "./PhotoCarouselClient";

const images = [
  { src: "/images/spracto-sowr-1015-hands-up.png", alt: "Photo 1" },
  { src: "/images/spracto-sowr-1015-feel-that.png", alt: "Photo 2" },
  { src: "/images/spracto-triplet-audio.png", alt: "Photo 3" },
  // Add more images as needed
];

const PhotoCarouselServer = () => {
  return <PhotoCarouselClient images={images} />;
};

export default PhotoCarouselServer;
