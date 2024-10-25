// import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar/Navbar.tsx'
// import About from './components/Sections/About/About.tsx'
import { ThemeProvider } from './context/themeContext';

function App() {

  return (
    <>
    <ThemeProvider>
    <Navbar/>
    {/* <About/> */}
    </ThemeProvider>
    </>
  )
}

export default App