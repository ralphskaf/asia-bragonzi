import React from "react";
import { motion } from "framer-motion";

const BannerShape = ({ customLeft }) => {
  const shapeAnimation = {
    initial: { top: 0 },
    animate: { top: ["0%", "100%"] },
    transition: {
      duration: 13, // يمكنك تخصيص هذه القيمة
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      flip: true,
    },
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: customLeft,
        width: "1px",
        height: "100%",
        background: "rgba(255, 255, 255, 0.102)",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          width: "1px",
          height: "30px",
          background: "#08d565",
          top: 0,
        }}
        initial={{ top: "0%" }}
        animate={{ top: ["0%", "100%"] }}
        transition={shapeAnimation.transition}
      />
      <motion.div
        style={{
          position: "absolute",
          width: "1px",
          height: "30px",
          background: "#ffffff",
          bottom: 0,
        }}
        initial={{ bottom: "0%" }}
        animate={{ bottom: ["0%", "100%"] }}
        transition={shapeAnimation.transition}
      />
    </motion.div>
  );
};

export default BannerShape;
