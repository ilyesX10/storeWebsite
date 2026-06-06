import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
function Stats() {
     const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <section className={`${theme === 'dark' ? 'dark' : ''} container mx-auto relative`}>
        <div className="md:absolute static md:-top-10 md:left-0 w-full h-20 gap-4 rounded-lg md:flex-row flex-col md:p-0 p-6 flex items-center justify-around">
            <div className="flex flex-col items-center justify-center transition-all border-6 border-transparent shadow-lg w-[220px] h-[140px] border-t-[var(--border)] text-[var(--foreground)] bg-[var(--background)] p-6 rounded-lg">
                <span className="text-2xl font-bold">10.000</span>
                <span className="text-sm">Books Available</span>
            </div>
            <div className="flex flex-col items-center justify-center transition-all border-6 border-transparent shadow-lg w-[220px] h-[140px] border-t-[var(--border)] text-[var(--foreground)] bg-[var(--background)] p-6 rounded-lg">
                <span className="text-2xl font-bold">100</span>
                <span className="text-sm">Categories</span>
            </div>
            <div className="flex flex-col items-center justify-center transition-all border-6 border-transparent shadow-lg w-[220px] h-[140px] border-t-[var(--border)] text-[var(--foreground)] bg-[var(--background)] p-6 rounded-lg">
                <span className="text-2xl font-bold">1.000</span>
                <span className="text-sm">Articles</span>
            </div>
        </div>    
    </section>
  )
}

export default Stats