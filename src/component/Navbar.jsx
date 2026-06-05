import React from 'react'
import { useState,useEffect } from 'react'
import { IoIosBookmarks } from "react-icons/io";
import { LuSquareMenu } from "react-icons/lu";
import { CgCloseR } from "react-icons/cg";

function Navbar() {
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
        <nav className="container mx-auto py-2 flex items-center justify-between overflow-hidden">
            <span className="font-bold text-xl"><IoIosBookmarks className='w-10 h-10' /></span>
            {isMobile?(
                <>
                <button onClick={()=>setIsMenuOpen(true)} className="p-1 py-2 hover:cursor-pointer hover:text-[var(--primary)] rounded-lg">
                    <LuSquareMenu className="w-10 h-10" />
                </button>
                <aside className={`flex flex-col fixed top-0 right-0 w-full bg-[var(--background)] p-4 rounded-lg shadow-lg $fixed right-0 transition-transform duration-300 ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-30"}`}>
                    <div className="flex justify-end p-1">
                        <button onClick={()=>setIsMenuOpen(false)} className="hover:cursor-pointer hover:text-[var(--primary)]">
                            <CgCloseR className="w-10 h-10" />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li><a href="/" className="p-3 rounded-lg hover:bg-[var(--muted)]">Home</a></li>
                        <li><a href="/about" className="p-3 rounded-lg hover:bg-[var(--muted)]">Browse</a></li>
                        <li><a href="/contact" className="p-3 rounded-lg hover:bg-[var(--muted)]">Contact</a></li>
                        <li><a href="/location" className="p-3 rounded-lg hover:bg-[var(--muted)]">location</a></li> 
                    </ul>
                    <div className="flex flex-col gap-4 mt-4">
                        <button type="button" className="p-1 py-2 hover:cursor-pointer hover:text-[var(--primary)] rounded-lg">
                            Login
                        </button>
                        <button type="button" className="p-1 py-2 hover:cursor-pointer bg-[var(--primary)] text-white rounded-lg">
                            Sign Up
                        </button>
                    </div>
                </aside>   
                </>
            ):
            (<>
            <ul className="flex gap-4">
                <li><a href="/" className="p-3 rounded-lg hover:bg-[var(--muted)]">Home</a></li>
                <li><a href="/about" className="p-3 rounded-lg hover:bg-[var(--muted)]">Browse</a></li>
                <li><a href="/contact" className="p-3 rounded-lg hover:bg-[var(--muted)]">Contact</a></li>
                <li><a href="/location" className="p-3 rounded-lg hover:bg-[var(--muted)]">location</a></li>
            </ul>
            <div className="flex gap-4">
                <button type="button" className="p-2 hover:cursor-pointer hover:text-[var(--primary)] rounded-lg">
                    Login
                </button>
                <button type="button" className="p-2 hover:cursor-pointer bg-[var(--primary)] text-white rounded-lg">
                    Sign Up
                </button>
            </div>
            </>
            )}
            

        </nav>
  )
}

export default Navbar