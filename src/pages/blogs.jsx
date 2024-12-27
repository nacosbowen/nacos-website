import Navbar from "../components/FirstPage/navbar";
import BlogHero from "../components/BlogsPage/blogHero";
import ReadBlogs from "../components/BlogsPage/readBlogs";
import TheBlogs from "../components/BlogsPage/TheBlogs";
import Partner from "../components/AboutPage/partners";
import Footer from "../components/FirstPage/footer";
import ScrollToTop from "../ui/ScrollToTop";
const Blogs = () => {
  return (
    <div>
      <Navbar />
      <BlogHero />
      <ReadBlogs />
      <TheBlogs />
      <Partner />
      <ScrollToTop/>
      <Footer />
    </div>
  );
};
export default Blogs;
