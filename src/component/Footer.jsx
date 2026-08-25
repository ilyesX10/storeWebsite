import React from 'react'
import { IoIosBookmarks } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className='border-t-3 border-[var(--border)] flex flex-col items-center justify-center p-4 text-center text-[var(--foreground)] bg-[var(--background)]'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 w-full'>
            <div>
                <h1 className="my-2 py-2 border-b-2 border-[var(--border)] text-[var(--secondary)] font-bold">Quick Links</h1>
                <ul className="flex flex-col gap-2">
                    <li><a href="/" className="dark:hover:text-[var(--muted)] hover:text-[var(--foreground)]/60 transition-all">Home</a></li>
                    <li><a href="/about" className="dark:hover:text-[var(--muted)] hover:text-[var(--foreground)]/60 transition-all">Browse</a></li>
                    <li><a href="/contact" className="dark:hover:text-[var(--muted)] hover:text-[var(--foreground)]/60 transition-all">Contact</a></li>
                    <li><a href="/location" className="dark:hover:text-[var(--muted)] hover:text-[var(--foreground)]/60 transition-all">location</a></li> 
                </ul>
            </div>
            <div>
                <h1 className="my-2 py-2 border-b-2 border-[var(--border)] text-[var(--secondary)] font-bold">Get Help</h1>
                <a href="/FAQ" className="dark:hover:text-[var(--muted)] hover:text-[var(--foreground)]/60 transition-all">FAQ</a>
            </div>
            <div className="">
                <h1 className="my-2 py-2 border-b-2 border-[var(--border)] text-[var(--secondary)] font-bold">Follow Us</h1>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="mx-auto w-8 h-8"/>
                </a>
            </div>
        </div>
        <hr className=" my-4 bg-white w-[90%]" />
        <div className="container flex gap-4 sm:flex-row flex-col justify-between items-center w-full py-2">
            <p>All rights reserved to University Library &copy; 2026.</p>
            <a href="/"><IoIosBookmarks className='w-8 h-8 text-[var(--accent)]' /></a>
        </div>
    </div>
  )
}

export default Footer
