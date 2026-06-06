import React from 'react'
import { motion } from "motion/react";

function Button({ children, className }) {
  return (
    <motion.button type="button" className={className} transition={{ type: "spring",stiffness: 400,damping: 25 }} whileTap={{ scale: 0.96 }}>
      {children}
    </motion.button>
  )
}

export default Button