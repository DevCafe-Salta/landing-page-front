import { RouteObject } from 'react-router-dom';

import Home from '../components/Sections/Home/Home.tsx'
import Projects from '../components/Sections/Projects/Projects.jsx'
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/proyecto',
    element: <Projects />,
  },

];

export default routes;
