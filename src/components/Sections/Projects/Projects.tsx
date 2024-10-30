import { useTheme } from '../../../hooks/useTheme';
import ProjectCard from '../../Cards/ProjectCard';
import './projects.css'
function Projects() {
  const {theme} = useTheme();
  return (
    <section id="course-section" className={!theme ? "bg-softGray" : "bg-softBlack" }>
      <article id="course-head">
        <h2 className='text-orange font-bold'>Nuestros proyectos</h2>
        <h3 className='text-Gray'>Conocé los proyectos colaborativos de nuestra comunidad</h3>
      </article>
      <article id="courses">
        <div id="courses-list">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </article>
    </section>
  )
}



export default Projects;