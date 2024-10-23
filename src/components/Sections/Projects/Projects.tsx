import ProjectCard from '../../Cards/ProjectCard';
import './projects.css'
function Projects() {
  return (
    <section id="course-section">
      <article id="course-head">
        <h2>Nuestros proyectos</h2>
        <h3>Conocé los proyectos colaborativos de nuestra comunidad</h3>
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