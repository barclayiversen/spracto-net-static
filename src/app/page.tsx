import Header from "./components/Header";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import About from "./components/About";
import Show from "./components/Show";
import Releases from "./components/Releases";
import Footer from "./components/Footer";
import PhotoCarouselServer from "./components/PhotoLoader";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Divider />
      {/* <Show /> */}
      {/* <Divider /> */}
      <Releases />
      <Divider />
      <PhotoCarouselServer />
      <Footer />
    </>
  );
}
