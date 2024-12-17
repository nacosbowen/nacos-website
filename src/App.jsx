import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { NacosContext } from "./contexts/nacosContext";

import Loader from "./components/loader/Loader";

// lazy loading
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const NacosExcos = lazy(() => import("./pages/nacosExecutives"));
const Events = lazy(() => import("./pages/events"));
const Blogs = lazy(() => import("./pages/blogs"));
const PastQuestions = lazy(() => import("./pages/pastQuestions"));
const LevelAdvisers = lazy(() => import("./pages/levelAdvisers"));
const BlogDesc = lazy(() => import("./pages/blogDesc"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <NacosContext>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/executives" element={<NacosExcos />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/pastQuestions" element={<PastQuestions />} />
            <Route path="/level-advisers" element={<LevelAdvisers />} />
            <Route path="/blogDesc/:id" element={<BlogDesc/>} />
            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </div>
      </NacosContext>
    </Suspense>
  );
}

export default App;
