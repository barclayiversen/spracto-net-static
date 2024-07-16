// components/PhotoCarouselServer.tsx
import PhotoCarouselClient from "./PhotoCarouselClient";

const images = [
  { src: "/images/spracto-sowr-1015-hands-up.png", alt: "Photo 1" },
  { src: "/images/spracto-sowr-1015-feel-that.png", alt: "Photo 2" },
  { src: "/images/spracto-triplet-audio.png", alt: "Photo 3" },
  { src: "/images/spracto-double-1015.png", alt: "Photo 4" },
  { src: "/images/spracto-sowr-1015-flashlight.png", alt: "Photo 5" },
  { src: "/images/spracto-sowr-back-1015.png", alt: "Photo 6" },
  { src: "/images/spracto-sowr-glaas-double-bergerac.png", alt: "Photo 7" },
  { src: "/images/spracto-sowr-midway-candid.png", alt: "Photo 8" },
  { src: "/images/spracto-sowr-midway-homies.png", alt: "Photo 9" },
  { src: "/images/spracto-sowr-midway-triplet.png", alt: "Photo 10" },
  { src: "/images/spracto-triplet-bergerac.png", alt: "Photo 11" },
  { src: "/images/spracto-triplet-midway.png", alt: "Photo 12" },
  { src: "/images/spracto-double-publicworks.png", alt: "Photo 13" },
];

const PhotoCarouselServer = () => {
  return <PhotoCarouselClient images={images} />;
};

export default PhotoCarouselServer;
