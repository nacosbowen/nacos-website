import { motion } from "framer-motion";

const Staff = ({ data }) => {
  return (
    <div>
      {data.map((authorities, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-2xl lg:text-3xl font-black text-center uppercase underline">
            {authorities.department}
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold mt-[20px] mb-[24px]">
              Program Coordinator
            </h2>
            <div className="flex items-center gap-3">
              <img
                src={authorities.headOfProgram.image}
                alt={authorities.headOfProgram.name}
                className="w-[100px] h-[100px] rounded-l-[8px]"
              />
              <div>
                <div>
                  <strong>Name: </strong>
                  <span>{authorities.headOfProgram.name}</span>
                </div>
                <div>
                  <strong>Office: </strong>
                  <span>{authorities.headOfProgram.office}</span>
                </div>
                <div>
                  <strong>Phone: </strong>
                  <span>{authorities.headOfProgram.phone}</span>
                </div>
                <div>
                  <strong>Department: </strong>
                  <span>{authorities.headOfProgram.department}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-5">
            <h2 className="text-xl font-bold mb-[24px]">Level Advisers</h2>
            <div className="flex flex-wrap md:gap-5 flex-shrink-0">
              {authorities.levelAdviser.map((advisers, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-[50px]">
                    <img
                      src={advisers.image}
                      alt={advisers.name}
                      className="w-[100px] h-[100px] rounded-l-[8px]"
                    />
                    <div>
                      <div>
                        <strong>Name: </strong>
                        <span>{advisers.name}</span>
                      </div>
                      <div>
                        <strong>Office: </strong>
                        <span>{advisers.office}</span>
                      </div>
                      <div>
                        <strong>Level: </strong>
                        <span>{advisers.level}</span>
                      </div>
                      <div>
                        <strong>Phone: </strong>
                        <span>{advisers.phone}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Staff;
