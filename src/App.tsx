// import { useState } from 'react'
import Projects from './components/Sections/Projects/Projects'
import './App.css'
import { ThemeProvider } from './context/themeContext.tsx'

function App() {

  return (
    <>
      <ThemeProvider>
      {/* <Navbar/> */}
      <Projects />
    </ThemeProvider>
    </>
  )
}

export default App
