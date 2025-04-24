import { useState } from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import EditionOne from "../../public/Newletters/EDITION 1 INFOBITS NEWSLETTER.pdf";
import EditionTwo from "../../public/Newletters/EDITION 2 INFOBITS NEWSLETTER.pdf";
import EditionThree from "../../public/Newletters/EDITION 3 INFOBITS NEWSLETTER.pdf";
import EditionFour from "../../public/Newletters/EDITION 4 INFOBITS NEWSLETTER.pdf";
import EditionOneThumbnail from "../../public/Newletters/Edition 1 Thumbnail.avif";
import EditionTwoThumbnail from "../../public/Newletters/Edition 2 Thumbnail.avif";
import EditionThreeThumbnail from "../../public/Newletters/Edition 3 Thumbnail.avif";
import EditionFourThumbnail from "../../public/Newletters/Edition 4 Thumbnail.avif";

// Enhanced data with better descriptions and thumbnails
const newsletters = [
  {
    id: 1,
    title: "NACOS: A NEW ERA BEGINS",
    edition: "Edition 1",
    month: "July",
    year: 2024,
    thumbnail: EditionOneThumbnail,
    pdfUrl: EditionOne,
    description:
      "Experience the dawn of a transformative chapter in NACOS Bowen's history. This inaugural edition spotlights our ambitious rebrand, covers the electrifying freshers' orientation, and unveils our roadmap for nurturing the next generation of Nigerian tech leaders.",
    tags: ["Leadership", "Events", "Community"],
  },
  {
    id: 2,
    title: "GDSC LIVE IN BOWEN",
    edition: "Edition 2",
    month: "August",
    year: 2024,
    thumbnail: EditionTwoThumbnail,
    pdfUrl: EditionTwo,
    description:
      "Dive into our exclusive coverage of Google Developer Student Clubs at Bowen University. Discover how this collaboration is empowering students with cutting-edge skills, featuring in-depth interviews with organizers and participants, plus highlights from our recent tech week.",
    tags: ["Google", "Development", "Collaboration"],
  },
  {
    id: 3,
    title: "WEB3: THE NEW META",
    edition: "Edition 3",
    month: "September",
    year: 2024,
    thumbnail: EditionThreeThumbnail,
    pdfUrl: EditionThree,
    description:
      "Explore the revolutionary world of Web3 technologies in this special issue. From blockchain fundamentals to DeFi applications, we break down how these innovations are reshaping the digital landscape and why NACOS members should be at the forefront of this technological revolution.",
    tags: ["Blockchain", "Innovation", "Digital Future"],
  },
  {
    id: 4,
    title: "CLOSING THE LOOP: The Conversation",
    edition: "Edition 4",
    month: "October",
    year: 2024,
    thumbnail: EditionFourThumbnail,
    pdfUrl: EditionFour,
    description:
      "Bridging academia and industry in this thought-provoking edition. We feature candid conversations with tech leaders, showcase student-led innovations, and present expert insights on closing Nigeria's digital skills gap. Plus, get exclusive career guidance from industry veterans.",
    tags: ["Industry", "Academia", "Career Growth"],
  },
];

const NewsLetter = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);

  const filterByYear = (year) => {
    setActiveFilter(year);
  };

  const years = [...new Set(newsletters.map((item) => item.year))];

  // Filter newsletters based on activeFilter
  const filteredNewsletters =
    activeFilter === "all"
      ? newsletters
      : newsletters.filter((item) => item.year === activeFilter);

  const openPdf = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Newsletter Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            NACOS Newsletter Archives
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our collection of past newsletters featuring tech insights,
            student achievements, and the latest from NACOS Bowen University
            chapter.
          </p>
        </motion.div>
      </div>

      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-7xl mx-auto mb-8"
      >
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => filterByYear("all")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
              activeFilter === "all"
                ? "bg-darkorange text-white shadow-darkorange/30"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Editions
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => filterByYear(year)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                activeFilter === year
                  ? "bg-darkorange text-white shadow-darkorange/30"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-gray-600 text-center mb-8">
          Showing {filteredNewsletters.length}{" "}
          {filteredNewsletters.length === 1 ? "edition" : "editions"}
          {activeFilter !== "all" ? ` from ${activeFilter}` : ""}
        </p>
      </motion.div>

      {/* Newsletters Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNewsletters.map((newsletter) => (
            <motion.div
              key={newsletter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              onMouseEnter={() => setHoveredId(newsletter.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative">
                <img
                  src={newsletter.thumbnail}
                  alt={`${newsletter.title} cover`}
                  className="w-full h-72 object-cover object-center"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30   transition-opacity duration-300 hidden sm:flex items-center justify-center ${
                    hoveredId === newsletter.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="space-y-3">
                    <button
                      onClick={() => openPdf(newsletter.pdfUrl)}
                      className="bg-darkorange hover:bg-[#EB2121] text-white py-2.5 px-5 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-lg mx-auto"
                    >
                      <FaFilePdf /> View PDF <FaExternalLinkAlt size={12} />
                    </button>
                  </div>
                </div>

                {/* Mobile-friendly action button that's always visible */}
                <button
                  onClick={() => openPdf(newsletter.pdfUrl)}
                  className="md:hidden absolute bottom-4 right-4 bg-darkorange text-white p-3 rounded-full shadow-lg"
                >
                  <FaFilePdf />
                </button>

                {/* Edition badge */}
                <div className="absolute top-4 left-4 bg-white text-darkblue text-xs font-semibold px-3 py-1 rounded-md shadow-sm">
                  {newsletter.edition}
                </div>

                {/* Date badge */}
                <div className="absolute top-4 right-4 bg-darkorange text-white text-xs font-semibold px-3 py-1 rounded-md shadow-sm">
                  {newsletter.month} {newsletter.year}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {newsletter.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {newsletter.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {newsletter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openPdf(newsletter.pdfUrl)}
                  className="text-darkorange hover:text-[#EB2121] font-medium text-sm flex items-center gap-1 transition-colors duration-300 border-b border-transparent hover:border-darkorange"
                  title="Read Full Edition"
                >
                  Read Full Edition <FaExternalLinkAlt size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filteredNewsletters.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <FaFilePdf className="mx-auto text-gray-300" size={48} />
            <h3 className="mt-4 text-xl font-medium text-gray-900">
              No newsletters found
            </h3>
            <p className="mt-1 text-gray-500 mb-6">
              No newsletters are available for the selected filter. Please try
              another option.
            </p>
            <button
              onClick={() => filterByYear("all")}
              className="bg-darkorange hover:bg-[#EB2121] text-white py-2 px-6 rounded-full transition-all duration-300"
            >
              View all newsletters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
