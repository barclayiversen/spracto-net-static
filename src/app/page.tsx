// src/app/page.tsx

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Releases from "./components/Releases";
import Footer from "./components/Footer";
import PhotoCarouselServer from "./components/PhotoLoader";
import InstagramPosts from "./components/InstagramPosts";

// function to fetch insta posts
async function fetchInstagramPosts() {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,thumbnail_url,permalink&access_token=${process.env.IG_ACCESS_TOKEN}`
  );
  const data = await res.json();
  return data.data;
}

const Home = async () => {
  const posts = await fetchInstagramPosts();

  return (
    <>
      <Header />
      <Hero />
      <Releases />
      <InstagramPosts posts={posts} />
      <PhotoCarouselServer />

      <Footer />
      <About />
    </>
  );
};

export default Home;
