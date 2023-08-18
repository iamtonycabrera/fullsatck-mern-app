import React from "react";
import { motion } from "framer-motion";

const RightSide = () => {
  return (
    <div className="flexCenter hero-right">
      <motion.div
        initial={{ x: "7rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "spring",
        }}
        className="image-container"
      >
        <img src="./hero-image.png" alt="" />
      </motion.div>
    </div>
  );
};

export default RightSide;
