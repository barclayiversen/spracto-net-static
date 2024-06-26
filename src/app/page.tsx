import Header from "./components/Header";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import About from "./components/About";
import Show from "./components/Show";
import Releases from "./components/Releases";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Divider />
      <Show />
      <Divider />
      <Releases />
    </>
  );
}
