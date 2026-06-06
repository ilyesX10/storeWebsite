import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import ThemeProvider from './ThemeProvider'
import Navbar from './component/Navbar';
import Stats from './component/Stats';
function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <Header/>
      <Stats />
    </ThemeProvider>
  )
}

export default App

