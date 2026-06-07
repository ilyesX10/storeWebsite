import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Counter } from './Counter';

function Stats() {
     const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <section className={`${theme === 'dark' ? 'dark' : ''} container mx-auto relative`}>
        <div className="md:absolute static md:-top-10 md:left-0 w-full h-20 gap-4 rounded-lg md:flex-row flex-col md:p-0 p-6 flex items-center justify-around">
            <div className="flex flex-col items-center justify-center transition-all border-6 border-transparent shadow-lg w-[260px] h-[160px] border-t-[var(--border)] text-[var(--foreground)] bg-[var(--muted)] p-6 rounded-lg">
                <span className="text-2xl text-[var(--accent)] font-bold">
                    <Counter end={50000} />
                </span>
                <span className="text-base font-semibold">Books Available</span>
            </div>
            <div className="flex flex-col items-center justify-center transition-all border-6 border-transparent shadow-lg w-[260px] h-[160px] border-t-[var(--border)] text-[var(--foreground)] bg-[var(--muted)] p-6 rounded-lg">
                <span className="text-2xl text-[var(--accent)] font-bold">
                    <Counter end={2500} />
                </span>
                <span className="text-base font-semibold">Categories</span>
            </div>
            <div className="flex flex-col items-center justify-center transition-all border-6 border-transparent shadow-lg w-[260px] h-[160px] border-t-[var(--border)] text-[var(--foreground)] bg-[var(--muted)] p-6 rounded-lg">
                <span className="text-2xl text-[var(--accent)] font-bold">
                    <Counter end={1000} />
                </span>
                <span className="text-base font-semibold">Articles</span>
            </div>
        </div>    
    </section>
  )
}

export default Stats