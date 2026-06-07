import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import headerImg from '../assets/hero.jpg'
import Button from './Button';
import { motion } from "motion/react";
function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <>
    <header className="border-b-2 border-[var(--border)] h-[60vh] md:h-[80vh] relative">
        <img src={headerImg} alt="header" className="w-full h-full object-cover object-center"/>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">  
            <div className="flex flex-col items-center gap-4">
              <motion.h1
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8 }}
                className="sm:text-4xl text-2xl lg:text-6xl font-bold text-white"
              >
                Discover Your Next Favorite Book
              </motion.h1>
              <Button className={`${theme === 'dark' ? 'dark':''} mt-4 p-2 text-base sm:text-lg lg:text-xl hover:cursor-pointer bg-[var(--primary)] text-white rounded-lg`}>
                  Browse Books
              </Button>
            </div>
          </div>  
    </header>
    </>
  )
}

export default Header