import Navbar from './components/Navbar/Navbar.tsx'
import { ThemeProvider } from './context/themeContext';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes/routes.tsx';

function AppRoutes() {
  return useRoutes(routes);
}
function App() {

  return (
    <>
      <ThemeProvider>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
      </ThemeProvider>
    </>
  )
}

export default App