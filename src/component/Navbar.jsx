import React from 'react'
import { useState,useEffect } from 'react'
import { IoIosBookmarks } from "react-icons/io";
import { LuSquareMenu } from "react-icons/lu";
import { CgCloseR } from "react-icons/cg";
import { motion } from "motion/react";  
import Button from './Button';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { IoMdMoon,IoMdSunny } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';


function Navbar({isSingin,setIsSingin}) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(()=>{
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[isMobile])
  return (
        <nav className={`fixed top-0 right-0 left-0 z-100 p-2 flex items-center ${isMobile ? "justify-between" : "justify-around"} border-b-2 border-[var(--border)] overflow-hidden bg-[var(--background)] text-[var(--foreground)]`}>
            <a href="/" className="font-bold text-xl"><IoIosBookmarks className='w-10 h-10 text-[var(--accent)]' /></a>
            {isMobile?(
                <>
                <button onClick={()=>setIsMenuOpen(true)} className="p-1 py-2 hover:cursor-pointer hover:text-[var(--primary)] rounded-lg">
                    <LuSquareMenu className="w-10 h-10" />
                </button>
                <aside className={`flex flex-col fixed z-100 top-0 right-0 w-full bg-[var(--background)] p-4 rounded-lg shadow-lg right-0 transition-transform duration-300 ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-30"}`}>
                    <div className="flex justify-end p-1">
                        <button onClick={()=>setIsMenuOpen(false)} className="hover:cursor-pointer hover:text-[var(--primary)]">
                            <CgCloseR className="w-10 h-10" />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li><a href="/" className="p-3 rounded-[var(--radius)] hover:bg-[var(--muted)]">Home</a></li>
                        <li><a href="/Browse" className="p-3 rounded-[var(--radius)] hover:bg-[var(--muted)]">Browse</a></li>
                        <li><a href="/contact" className="p-3 rounded-[var(--radius)] hover:bg-[var(--muted)]">Contact</a></li>
                    </ul>
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="flex items-center justify-center">
                            <button onClick={toggleTheme} className="p-1 rounded-full bg-[var(--foreground)] text-[var(--background)] w-6 h-6 flex items-center justify-center">
                                {theme === "light" ? <IoMdSunny /> : <IoMdMoon />}
                            </button>
                        </div>
                        <Button className="p-1 py-2 hover:cursor-pointer hover:text-[var(--primary)] rounded-[var(--radius)] border-2 border-[var(--border)]">
                            <Link to="/login" onClick={()=>{setIsSingin(false);}}>Login</Link>
                        </Button>
                        <Button className="p-1 py-2 hover:cursor-pointer bg-[var(--primary)] text-white rounded-[var(--radius)]">
                            <Link to="/login" onClick={()=>{setIsSingin(true);}}>Sign Up</Link>
                        </Button>
                    </div>
                </aside>   
                </>
            ):
            (<>
            <ul className="flex gap-4">
                <li><a href="/" className="p-3 rounded-[var(--radius)] hover:bg-[var(--muted)]">Home</a></li>
                <li><a href="/Browse" className="p-3 rounded-[var(--radius)] hover:bg-[var(--muted)]">Browse</a></li>
                <li><a href="/contact" className="p-3 rounded-[var(--radius)] hover:bg-[var(--muted)]">Contact</a></li>
            </ul>
            <div className="flex gap-4">
                <div className="flex items-center">
                    <button onClick={toggleTheme} className="p-1 rounded-full bg-[var(--foreground)] text-[var(--background)] w-6 h-6 flex items-center justify-center">
                        {theme === "light" ? <IoMdSunny /> : <IoMdMoon />}
                    </button>
                </div>
                <Button className="p-2 hover:cursor-pointer hover:text-[var(--primary)] rounded-[var(--radius)] border-2 border-[var(--border)]">
                    <Link to="/login"onClick={()=>{setIsSingin(false);}}>Login</Link>
                </Button>
                <Button className="p-2 hover:cursor-pointer bg-[var(--primary)] text-white rounded-[var(--radius)]">
                    <Link to="/login" onClick={()=>{setIsSingin(true);}}>Sign Up</Link>
                </Button>
            </div>
            </>
            )}
            

        </nav>
  )
}

export default Navbar