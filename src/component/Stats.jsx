import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Counter } from './Counter';

function Stats() {
     const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <section className={`${theme === 'dark' ? 'dark' : ''} container mx-auto relative min-h-25`}>
        <div className="md:absolute static md:-top-20 md:left-0 w-full gap-8 rounded-lg md:flex-row flex-col md:p-0 p-6 flex items-center justify-around">
            <div className="mx-2 flex flex-col md:backdrop-blur items-center justify-center hover:scale-105 transition-all border-6 border-transparent shadow-lg w-[260px] h-[160px] border-t-[var(--border)] text-[var(--foreground)] bg-[var(--muted)] md:bg-[var(--muted)]/70 p-6 rounded-lg">
                <span className="text-2xl text-[var(--accent)] font-bold">
                    <Counter end={50000} />
                </span>
                <span className="text-base font-semibold">Books Available</span>
            </div>
            <div className="mx-2 flex flex-col md:backdrop-blur items-center justify-center hover:scale-105 transition-all border-6 border-transparent shadow-lg w-[260px] h-[160px] border-t-[var(--border)] text-[var(--foreground)] bg-[var(--muted)] md:bg-[var(--muted)]/70 p-6 rounded-lg">
                <span className="text-2xl text-[var(--accent)] font-bold">
                    <Counter end={2500} />
                </span>
                <span className="text-base font-semibold">Categories</span>
            </div>
            <div className="mx-2 flex flex-col md:backdrop-blur items-center justify-center hover:scale-105 transition-all border-6 border-transparent shadow-lg w-[260px] h-[160px] border-t-[var(--border)] text-[var(--foreground)] bg-[var(--muted)] md:bg-[var(--muted)]/70 p-6 rounded-lg">
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