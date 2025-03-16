import React, { useEffect } from 'react'
import BlogPage from '../components/BlogsPage/BlogPage'
import BLOG from "../components/FirstPage/blogg.jsx"
import { useNavigate, useParams } from 'react-router-dom'
import { useNacos } from '../contexts/nacosContext';
import { BiArrowBack } from 'react-icons/bi';
import Navbar from '../components/FirstPage/navbar';
import { scrollToTop } from '../utils/utils.js';
import Loader from '../components/loader/Loader.jsx';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import ScrollToTop from '../ui/ScrollToTop.jsx';
import Divider from '../ui/Divider.jsx';

const blogDesc = () => {
  const { id } = useParams();
  const { allBlogs, isLoading } = useNacos();
  const navigate = useNavigate();

  const blog = allBlogs.find((blog) => blog?._id === id);
  const otherBlogArray = allBlogs.filter((blog) => blog?._id !== id);

  function GoBackButton({children = "Go back"}){
    useEffect(() => {
      scrollToTop();
    }, []);

    return (
      <button
          onClick={() => {
            scrollToTop();
            navigate(-1) || navigate('/blogs');
          }}
          className='flex items-center gap-1'
        >
          {children}
        </button>
    )
  }

  if(isLoading){
    return <Loader/>
  }

  return (
    <div>
      <Navbar />
      <div className='p-8'>
        <Divider/> 
        <BlogPage blog={blog} />
        {/* <Divider/> */}
      </div>
      
      <BLOG header="More Blog Posts" headerDivider={true} blogList={otherBlogArray} />
      
      <div className='mx-6 my-5'>
      <GoBackButton>
        <p className='p-2 flex items-center gap-1 border-2 rounded-full bg-white hover:translate-x-[-5px] transition-all ease-linear duration-300 hover:bg-darkorange hover:border-darkorange hover:text-white'><BiArrowBack className='text-xl'/> Go Back</p>
      </GoBackButton>
      <ScrollToTop/>
      </div>
      {/* <Footer/> */}
    </div>

  )
}

export default blogDesc;
