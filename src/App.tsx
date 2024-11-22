import Navbar from './components/Navbar/Navbar.tsx'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes/routes.tsx';
import { useTheme } from './hooks/useTheme.tsx';
import { useEffect } from 'react';

function AppRoutes() {
  return useRoutes(routes);
}
function App() {
  const {theme} = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme);
  },[theme])
  return (
    <>
      <Router basename='/'>
        <Navbar />
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
