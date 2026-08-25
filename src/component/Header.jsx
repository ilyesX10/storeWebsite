import React from 'react'
import headerImg from '../assets/hero.jpg'
import { motion } from "motion/react";
function Header() {
  return (
    <>
    <header 
      className="h-[60vh] md:h-[80vh] relative overflow-hidden"
      style={{ clipPath: "ellipse(100% 90% at 50% 10%)" }}
    >
        <img src={headerImg} alt="header" className="w-full h-full object-cover object-center"/>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">  
            <div className="flex flex-col items-center gap-4">
              <motion.h1
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8 }}
                className="sm:text-4xl text-2xl lg:text-6xl font-bold text-white text-center px-4"
              >
                Discover Your Next Favorite Book
              </motion.h1>
            </div>
          </div>  
    </header>
    </>
  )
}

export default Header