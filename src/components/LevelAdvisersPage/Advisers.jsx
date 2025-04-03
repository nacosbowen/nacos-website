import { motion } from "framer-motion";
import { formatPhoneNumber } from "../../utils/utils";

const Staff = ({ data }) => {
  return (
    <div className="level-advisers-container">
      {data.map((authorities, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-2xl lg:text-3xl font-black text-center text-darkblue uppercase advisers-dept">
            {authorities.department}
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl text-darkblue font-semibold mt-[20px] mb-[24px] subheading">
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
                  <strong className="text-darkblue">Name: </strong>
                  <span className="font-semibold">{authorities.headOfProgram.name}</span>
                </div>
                <div>
                  <strong className="text-darkblue">Office: </strong>
                  <span className="font-semibold">{authorities.headOfProgram.office}</span>
                </div>
                <div>
                  <strong className="text-darkblue">Phone: </strong>
                  <span className="font-semibold">{formatPhoneNumber(authorities.headOfProgram.phone)}</span>
                </div>
                <div>
                  <strong className="text-darkblue">Department: </strong>
                  <span className="font-semibold">{authorities.headOfProgram.department}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-5">
            <h2 className="text-xl text-darkblue font-semibold mb-[24px] subheading">Level Advisers</h2>
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
                        <strong className="text-darkblue">Name: </strong>
                        <span className="font-semibold">{advisers.name}</span>
                      </div>
                      <div>
                        <strong className="text-darkblue">Office: </strong>
                        <span className="font-semibold">{advisers.office}</span>
                      </div>
                      <div>
                        <strong className="text-darkblue">Level: </strong>
                        <span className="font-semibold capitalize">{advisers.level}</span>
                      </div>
                      <div>
                        <strong className="text-darkblue">Phone: </strong>
                        <span className="font-semibold">{formatPhoneNumber(advisers.phone)}</span>
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
