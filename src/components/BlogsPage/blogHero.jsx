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
      <div className="h-screen max-w-full flex flex-col items-center justify-center blog px-4 md:px-6">
        <h1 className="text-2xl text-center font-semibold text-[--darkorange] leading-[150%] my-4 md:my-6">
          BLOGS
        </h1>
        <p className="text-[2rem] sm:text-4xl text-[--white] font-bold text-center px-4">
          SUBSCRIBE TO OUR NEWSLETTER! 🚀
        </p>
        <p className="text-base sm:text-lg text-[--white] font-normal my-6 text-center leading-[217%] max-w-4xl">
          Reading tech blogs enhances a student's knowledge by providing
          real-time insights into industry trends, cutting-edge innovations, and
          diverse perspectives beyond the traditional curriculum.
        </p>

        <form className="relative w-full md:w-auto flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-auto flex justify-center items-center bg-[--white] rounded-full px-1 mb-10">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full sm:max-w-md placeholder:text-base outline-none text-base font-normal leading-normal bg-white p-3 rounded-full"
              placeholder="Email Address"
            />
            <button
              className="cta bg-[#EB2121] rounded-full text-[--white] font-semibold text-sm p-3"
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
