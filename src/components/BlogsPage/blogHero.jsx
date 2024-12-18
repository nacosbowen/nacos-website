import { useState } from "react";

const BlogHero = () => {
  const [email, setEmail] = useState("");

  function onSubscribe(e) {
    e.preventDefault();
    setEmail(email);
    setEmail("");
  }

  return (
    <div className="max-h-full">
      <div className="h-[100svh] max-w-full flex flex-col items-center justify-center blog px-1">
        <h1 className="text-[1.25rem] text-center font-semibold text-[--darkorange] leading-[150%] my-4">
          BLOGS
        </h1>
        <p className="text-[2rem] sm:text-[3rem] text-[--white] font-bold text-center">
          SUBSCRIBE TO OUR NEWSLETTER ! 🚀
        </p>
        <p className="text-[1rem] text-[--white] font-normal my-6 text-center leading-[217%] max-w-[61rem] ">
          Reading tech blogs enhances a student's knowledge by providing
          real-time insights into industry trends, cutting-edge innovations, and
          diverse perspectives beyond the traditional curriculum.
        </p>

        <form className="relative mt-5 w-[90%] md:w-fit flex flex-row items-center">
          <div className="w-full flex justify-center items-center bg-[--white] rounded-full px-1">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="max-w-full w-full placeholder:text-[1rem] outline-none text-[1rem] font-normal leading-normal bg-white p-2 rounded-full"
              placeholder="Email Address"
            />
            <button
              className="cta bg-[#EB2121] rounded-full text-[--white] font-semibold text-[12px] p-2"
              onClick={onSubscribe}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogHero;
    