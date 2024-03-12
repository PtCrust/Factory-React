import React from "react";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.png";

const styleContainer = {
  position: "relative",
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  gap:"1rem",
  justifyContent: "center",
  alignItems: "center",
};

const styleSpan = {
  display: "block",
  width: 60,
  height: 60,
  border: "8px solid #bbb",
  borderTop: "8px solid #2947A9",
  borderRadius: "50%",
  boxSizing: "border-box",
  position: "relative",
  top: 0,
  left: 0
};

const spinTransition = {
  repeat: Infinity,
  ease: "easeInOut",
  duration: 1
};

export const Preloader = () => {
  return (
    <div style={styleContainer}>
      <img src={logoImg} alt="logoimg" style={{width:"10rem" ,height:"calc(10rem * 1.41)"}}/>
      <motion.span
        style={styleSpan}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
};
