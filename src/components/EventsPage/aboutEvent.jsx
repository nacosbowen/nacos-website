const events = [
  // {
  //   name: "Bowen Tech Week",
  //   ticketLink: "https://forms.gle/NSs5Jv66RgEQcuhL9",
  //   videoLink:
  //     "https://www.instagram.com/reel/C599xIUI3Nd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  //   eventAbout:
  //     "Good Day Everyone!! 🚀Brace yourself and get ready to ignite your passion for technology 🚀 📆Mark your calendars because the largest tech event on the Bowen University Campus is coming soon!! It is with great pleasure that the collaboration between NACOS and BOWEN Tech Hub brings to you the *BOWEN TECH WEEK* 💡 Follow us across all social media pages @ bowentechhub and @nacosbu to stay tuned for more details and be the first to secure your spot at this unforgettable tech spectacle. See you there!!✨",
  // },
];

const AboutEvent = () => {
  return (
    <div className="max-h-full m-[2rem] sm:m-[5rem]  lg:m-[10rem]">
      {events.map((ev) => (
        <div className="grid items-center text-center leading-relaxed">
          <p className="text-[--darkorange] font-semibold text-sm">
            ABOUT THE EVENT
          </p>
          <h1 className="text-[1.5rem] md:text-[2.2rem] lg:text-[3rem] font-bold leading-[2rem] sm:leading-[4rem]">
            {ev.name}
          </h1>
          <p className="md:text-base">{ev.eventAbout}</p>
          <div>
            <button className="bg-[--darkorange] w-[13rem] h-[3rem] rounded-3xl text-[--white] font-semibold text-base mt-4 mr-4">
              <a href={ev.ticketLink} target="_blank" rel="noreferrer">
                <p>Get Ticket</p>
              </a>
            </button>
            <button className="bg-transparent  w-[13rem] h-[3rem] rounded-3xl text-[--text-dark] border-solid border-2 border-[--darkColor] font-semibold  mt-4">
              <a href={ev.videoLink} target="_blank" rel="noreferrer">
                <p>Trailer</p>
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutEvent;
