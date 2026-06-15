import React from 'react'
import { Counter } from './Counter';
import { delay, motion } from "framer-motion";

function Stats() {
  return (
    <section className={`container mx-auto relative min-h-25 my-4`}>
        <div className="md:absolute static md:-top-20 md:left-0 w-full gap-8 rounded-lg md:flex-row flex-col md:p-0 p-6 flex items-center justify-around">
            <div className='my-4 relative scale-100 hover:scale-105 transition-all w-[260px] h-[160px] rounded-[var(--radius)]'>
                <div className="z-[0] shadow-[var(--cards_Shadow)] mx-2 flex flex-col items-center justify-center transition-all w-full h-full text-[var(--foreground)] bg-[var(--muted)] md:bg-[var(--muted)] p-6 rounded-[var(--radius)]">
                    <span className="text-2xl text-[var(--accent)] font-bold">
                        <Counter end={50000} />
                    </span>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} transition={{duration:0.5}} animate={{ opacity: 1, y: 0 }} className="z-[-1] absolute -top-7 mx-2 flex flex-col items-center justify-start w-full h-[60px] dark:text-[var(--muted)] text-black bg-[var(--secondary)] rounded-[var(--radius)] p-1">
                    <span className="text-base flex items-start font-semibold">Books Available</span>
                </motion.div>
            </div>
            <div className='my-4 relative scale-100 hover:scale-105 transition-all w-[260px] h-[160px] rounded-[var(--radius)]'>
                <div className="z-[0] shadow-[var(--cards_Shadow)] mx-2 flex flex-col items-center justify-center transition-all w-full h-full text-[var(--foreground)] bg-[var(--muted)] md:bg-[var(--muted)] p-6 rounded-[var(--radius)]">
                    <span className="text-2xl text-[var(--accent)] font-bold">
                        <Counter end={2500} />
                    </span>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} transition={{duration:0.5,delay:0.25}} animate={{ opacity: 1, y: 0 }} className="z-[-1] absolute -top-7 mx-2 flex flex-col items-center justify-start w-full h-[60px] dark:text-[var(--muted)] text-black bg-[var(--secondary)] rounded-[var(--radius)] p-1">
                    <span className="text-base flex items-start font-semibold">Categories</span>
                </motion.div>
            </div>
            <div className='my-4 relative scale-100 hover:scale-105 transition-all w-[260px] h-[160px] rounded-[var(--radius)]'>
                <div className="z-[0] shadow-[var(--cards_Shadow)] mx-2 flex flex-col items-center justify-center transition-all w-full h-full text-[var(--foreground)] bg-[var(--muted)] md:bg-[var(--muted)] p-6 rounded-[var(--radius)]">
                    <span className="text-2xl text-[var(--accent)] font-bold">
                        <Counter end={1000} />
                    </span>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} transition={{duration:0.5,delay:0.5}} animate={{ opacity: 1, y: 0 }} className="z-[-1] absolute -top-7 mx-2 flex flex-col items-center justify-start w-full h-[60px] dark:text-[var(--muted)] text-black bg-[var(--secondary)] rounded-[var(--radius)] p-1">
                    <span className="text-base flex items-start font-semibold">Articles</span>
                </motion.div>
            </div>
        </div>    
    </section>
  )
}

export default Stats