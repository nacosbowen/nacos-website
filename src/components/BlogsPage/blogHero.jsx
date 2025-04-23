const BlogHero = () => {
  return (
    <div className="max-h-full">
      <div className="blog h-[50vh] max-w-full flex flex-col items-center justify-center gap-4 px-4">
        <h1 className="sm:text-[2rem] text-[1.5rem] md:text-[3rem] lg:text-[3rem] font-bold text-center text-white leading-[130%] sm:leading-[150%]">
          NACOS Blog
        </h1>
        <p className="text-white sm:text-[1.2rem] text-[0.875rem] font-normal text-center leading-[150%] sm:leading-[217%] max-w-[61rem]">
          Explore tech insights, industry trends, and the latest innovations in
          computing. Stay updated with NACOS Bowen as we share knowledge and
          expertise.
        </p>
      </div>
    </div>
  );
};

export default BlogHero;
