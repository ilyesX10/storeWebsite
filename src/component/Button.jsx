import React from 'react'
import { motion } from "motion/react";

function Button({ children, className, onClick, type, disabled }) {
  return (
    <motion.button disabled={disabled} className={className} onClick={onClick} type={type} transition={{ type: "spring", stiffness: 400, damping: 25 }} whileTap={{ scale: 0.96 }}>
      {children}
    </motion.button>
  )
}

export default Button