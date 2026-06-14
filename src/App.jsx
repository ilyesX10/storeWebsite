import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import ThemeProvider from './ThemeProvider'
import Navbar from './component/Navbar';
import Stats from './component/Stats';
import Details from './component/details';
function App() {

  return (
    <ThemeProvider>
      <div className="relative">
        <Navbar />
        <Header/>
        <Stats />
        <Details />
      </div>
    </ThemeProvider>
  )
}

export default App

