import { useState } from "react";

const BlogHero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw8Ro_-DX8-0wT8uZEmbkwWSuaiaddq17QhrWn9MHitAQkC9RjZ_P00UbMkMYuH3hycEQ/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }, // ✅ No "Origin" header needed
          body: JSON.stringify({
            email: email, // ✅ Send actual email value
            key: "MY_SECRET_KEY", // ✅ Ensure your backend validates this key
          }),
          mode: 'cors'
        }
      );

      const result = await response.json();
      console.log(result); // Should print "Success" if request works
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };

  const emailRegex = /^[a-zA-Z0-9._%+!#$&'*+/=?^`{|}~^-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

        <form
          className="relative w-full flex justify-center"
          onSubmit={handleSubmit}
        >
          <div className="w-full sm:w-auto lg:w-1/3 flex flex-wrap items-center justify-between gap-1 bg-[--white] rounded-full px-2 py-1 mb-10">
            <input
              type="email"
              pattern={emailRegex}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full min-w-0 flex-1 placeholder:text-base outline-none text-base font-normal leading-normal bg-transparent px-1 py-3 rounded-full"
              placeholder="Email Address"
              required
            />
            <button className="cta bg-[#EB2121] whitespace-nowrap rounded-full text-[--white] font-semibold text-sm px-3 py-3">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogHero;
