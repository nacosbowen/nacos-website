import Navbar from "../components/FirstPage/navbar";
import BlogHero from "../components/BlogsPage/blogHero";
import ReadBlogs from "../components/BlogsPage/readBlogs";
import TheBlogs from "../components/BlogsPage/TheBlogs";
import Partner from "../components/AboutPage/partners";
import Footer from "../components/FirstPage/footer";
const Blogs = () => {
  return (
    <div>
      <Navbar />
      <BlogHero />
      <ReadBlogs />
      <TheBlogs />
      <Partner />
      <Footer />
    </div>
  );
};
export default Blogs;
