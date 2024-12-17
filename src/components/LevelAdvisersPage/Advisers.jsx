const Staff = ({ title, data }) => {
  return (
    <div>
      <p className="font-bold text-lg lg:text-3xl mb-8">{title}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20  gap-y-12 lg:gap-y-20">
        {data.map((levelAdviser, i) => (
          <div key={i} className="flex items-center gap-3">
            <img
              src={levelAdviser.image}
              alt=""
              className="w-20 h-20 lg:w-[200px] lg:h-[200px] rounded-l-[8px]"
            />
            <div className="flex flex-col gap-3 text-sm md:text-base">
              <div>
                <strong>Name: </strong>
                <span>{levelAdviser.name}</span>
              </div>
              <div>
                <strong>Office: </strong>
                <span>{levelAdviser.office}</span>
              </div>
              <div>
                <strong>Phone: </strong>
                <span>{levelAdviser.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
