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
    `https://graph.facebook.com/v21.0/${process.env.IG_USER_ID}/media?fields=id,caption,media_url,media_type,permalink,thumbnail_url&access_token=${process.env.PAGE_ACCESS_TOKEN}`
  );
  const data = await res.json();

  // For carousels, fetch children
  const posts = await Promise.all(
    (data.data || []).map(async (post: any) => {
      if (post.media_type === "CAROUSEL_ALBUM") {
        const childRes = await fetch(
          `https://graph.facebook.com/v21.0/${post.id}/children?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${process.env.PAGE_ACCESS_TOKEN}`
        );
        const childData = await childRes.json();
        return { ...post, children: childData.data || [] };
      }
      return post;
    })
  );

  return posts;
}



const Home = async () => {
  const posts = await fetchInstagramPosts();

  return (
    <>
      <Header />
      <Hero />
      <Releases />
      <InstagramPosts posts={posts} />
      {/* <PhotoCarouselServer /> */}

      <Footer />
      <About />
    </>
  );
};

export default Home;
