import React from 'react'
import details_img from '../assets/details_img.jpg'
import { CgProfile } from "react-icons/cg";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuStar } from "react-icons/lu";
import { FaRegCommentAlt,FaSearch } from "react-icons/fa";
import Button from './Button';


function Details() {
  return (
    <section className='container grid grid-cols-1 lg:grid-cols-2 gap-y-10 mx-auto p-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 justify-center'>
            <div className='flex flex-col gap-2'>
                <CgProfile className='text-2xl' />
                <h1 className='font-bold text-[var(--accent)]'>Get started in seconds</h1>
                <p className='text-gray-400'>Register for a free account to access the library, manage your profile, and enjoy personalized features.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <MdOutlineFavoriteBorder className='text-2xl' />
                <h1 className='font-bold text-[var(--accent)]'>Build your reading list</h1>
                <p className='text-gray-400'>Bookmark books you're interested in and keep them organized in your personal collection for easy access later.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <LuStar className='text-2xl' />
                <h1 className='font-bold text-[var(--accent)]'>Share your rating</h1>
                <p className='text-gray-400'>Help other students discover great reads by rating books you've read and contributing to the community.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <FaRegCommentAlt className='text-2xl' />
                <h1 className='font-bold text-[var(--accent)]'>Express your opinion</h1>
                <p className='text-gray-400'>Leave comments and reviews about books, share your thoughts, and help fellow readers make informed choices.</p>
            </div>
        </div>
        <div className='flex items-center justify-center relative'>
            <img src={details_img} alt="section photo" className='w-full h-full rounded-[var(--radius)]' />
            <div className='rounded-[var(--radius)] absolute top-0 w-full h-full bg-black/50 flex flex-col gap-2 items-center justify-center shadow-[var(--shadow)]'>
                <FaSearch className='text-3xl text-black bg-white p-2 rounded-full' />
                <h1 className='font-bold text-white text-2xl'>Start searching</h1>
                <Button className={`p-2 text-base sm:text-lg lg:text-xl hover:cursor-pointer bg-[var(--primary)] text-white rounded-lg`}>
                    Browse Books
                </Button>            
              </div>
        </div>
    </section>
  )
}

export default Details