import React from 'react'
import { useContext } from 'react';
import details_img from '../assets/details_img.jpg'
import { CgProfile } from "react-icons/cg";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuStar } from "react-icons/lu";
import { FaRegCommentAlt,FaSearch } from "react-icons/fa";
import Button from './Button';
import { ThemeContext } from '../ThemeContext';


function Details() {
    const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <section className='container grid grid-cols-1 lg:grid-cols-2 mx-auto p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 justify-center'>
            <div className='flex flex-col gap-2'>
                <CgProfile className='text-2xl' />
                <h1 className='font-bold'>Get started in seconds</h1>
                <p className='text-justify'>Register for a free account to access the library, manage your profile, and enjoy personalized features.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <MdOutlineFavoriteBorder className='text-2xl' />
                <h1 className='font-bold'>Build your reading list</h1>
                <p className='text-justify'>Bookmark books you're interested in and keep them organized in your personal collection for easy access later.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <LuStar className='text-2xl' />
                <h1 className='font-bold'>Share your rating</h1>
                <p className='text-justify'>Help other students discover great reads by rating books you've read and contributing to the community.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <FaRegCommentAlt className='text-2xl' />
                <h1 className='font-bold'>Express your opinion</h1>
                <p className='text-justify'>Leave comments and reviews about books, share your thoughts, and help fellow readers make informed choices.</p>
            </div>
        </div>
        <div className='flex items-center justify-center relative'>
            <img src={details_img} alt="section photo" className='w-full h-full rounded-xl' />
            <div className='rounded-xl absolute top-0 w-full h-full bg-black/50 flex flex-col gap-2 items-center justify-center'>
                <FaSearch className='text-3xl text-black bg-white p-2 rounded-full' />
                <h1 className='font-bold text-[var(--muted)]'>Start searching</h1>
                <Button className={`${theme === 'dark' ? 'dark':''} p-2 text-base sm:text-lg lg:text-xl hover:cursor-pointer bg-[var(--primary)] text-white rounded-lg`}>
                    Browse Books
                </Button>            
              </div>
        </div>
    </section>
  )
}

export default Details