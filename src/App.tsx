// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.tsx'
import { ThemeProvider } from './context/themeContext';

function App() {

  return (
    <>
    <ThemeProvider>
    <Navbar/>
    </ThemeProvider>
    </>
  )
}

export default App
