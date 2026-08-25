import { useContext, useState } from 'react'
import './App.css'
import Header from './component/Header'
import Navbar from './component/Navbar';
import Stats from './component/Stats';
import Details from './component/details';
import Footer from './component/Footer';
import { ThemeContext } from './ThemeContext';
function App() {
const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className={`${theme === "dark" ? "dark" : ""} bg-[var(--background)] text-[var(--foreground)] relative`}>
      <Navbar />
      <Header/>
      <Stats />
      <Details />
      <Footer />
    </div>
  )
}

export default App
