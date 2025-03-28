import { useState } from "react";
import { toast } from "react-toastify";

const BlogHero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop default form submission
    setIsSubmitting(true);

    if (!email) {
      toast.error("Please enter a valid email.");
      return;
    }

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbztqu1FwemcQ0VibnFV2Cwtb3bWbSdM-NPxTL7Un4RVuFy5uV8jSPOxVnIogfsc9RlB5Q/exec";

    const formData = new FormData();
    formData.append("user-email", email); // Matches the spreadsheet column name

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.result === "success") {
        toast.success("🎉 Subscription successful!");
        setEmail(""); // Clear input
      } else {
        toast.error("❌ Error: " + result.error);
      }
    } catch (error) {
      toast.error("⚠️ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const emailRegex =
    /^[a-zA-Z0-9._%+!#$&'*+/=?^`{|}~^-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
              name="user-email"
              pattern={emailRegex}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={isSubmitting}
              className="w-full min-w-0 flex-1 placeholder:text-base outline-none text-base font-normal leading-normal bg-transparent px-1 py-3 rounded-full"
              placeholder="Email Address"
              required
            />
            <button
              className="cta bg-[#EB2121] whitespace-nowrap rounded-full text-[--white] font-semibold text-sm px-3 py-3"
              type="submit"
              title="subscribe"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span className="ml-2">Loading...</span>
                </div>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogHero;
