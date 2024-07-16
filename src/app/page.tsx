// src/app/page.tsx

import Header from "./components/Header";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import About from "./components/About";
import Show from "./components/Show";
import Releases from "./components/Releases";
import Footer from "./components/Footer";
import PhotoCarouselServer from "./components/PhotoLoader";
import InstagramPosts from "./components/InstagramPosts";

// Define a function to fetch the posts
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
      {/* <About /> */}
      {/* <Divider /> */}
      {/* <Show /> */}
      {/* <Divider /> */}
      <Releases />
      <InstagramPosts posts={posts} />
      <PhotoCarouselServer />
      <Footer />
    </>
  );
};

export default Home;
