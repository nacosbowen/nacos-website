import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope } from "react-icons/fa";

const NewsHero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop default form submission
    setIsSubmitting(true);

    if (!email) {
      toast.error("Please enter a valid email.");
      setIsSubmitting(false);
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

  // Animation variants for the form elements
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const inputVariants = {
    hidden: { width: "80%", opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#EB2121",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="max-h-full">
      <div className="h-screen max-w-full flex flex-col items-center justify-center news px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl text-center font-semibold text-[--darkorange] leading-[150%] my-4 md:my-6"
        >
          NACOS NEWSLETTER
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[2rem] sm:text-4xl text-[--white] font-bold text-center px-4"
        >
          SUBSCRIBE TO OUR NEWSLETTER! 🚀
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-[--white] font-normal my-6 text-center leading-[217%] max-w-4xl"
        >
          Reading tech blogs enhances a student&apos;s knowledge by providing
          real-time insights into industry trends, cutting-edge innovations, and
          diverse perspectives beyond the traditional curriculum.
        </motion.p>

        <motion.form
          variants={formVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative w-full flex justify-center"
          onSubmit={handleSubmit}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full sm:w-auto lg:w-1/3 flex flex-wrap items-center justify-between gap-1 bg-[--white] rounded-full px-2 py-1 mb-10 shadow-lg"
          >
            <div className="flex items-center w-full flex-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="pl-4 text-gray-400"
              >
                <FaEnvelope />
              </motion.div>

              <motion.input
                variants={inputVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                type="email"
                name="user-email"
                pattern={emailRegex}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isSubmitting}
                className="w-full min-w-0 flex-1 placeholder:text-base outline-none text-base font-normal leading-normal bg-transparent px-3 py-3 rounded-full"
                placeholder="Email Address"
                required
              />
            </div>

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              whileHover="hover"
              whileTap="tap"
              className="cta bg-[#EB2121] whitespace-nowrap rounded-full text-[--white] font-semibold text-sm px-5 py-3 shadow-md flex items-center gap-2"
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
                  <span className="ml-2">Subscribing...</span>
                </div>
              ) : (
                <>
                  <FaPaperPlane className="text-sm" />
                  <span>Subscribe</span>
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default NewsHero;
