import { motion } from "framer-motion";

const FloatInAnimation = ({ children, delay = 0, className, key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay }}
      viewport={{ amount: "some", once: true }}
      className={className}
      key={key}
    >
      {children}
    </motion.div>
  );
};

export default FloatInAnimation;