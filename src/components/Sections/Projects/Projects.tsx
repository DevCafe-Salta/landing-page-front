import { useTheme } from '../../../hooks/useTheme';
import ProjectCard from '../../Cards/ProjectCard';
import './projects.css'
function Projects() {
  const {theme} = useTheme();
  const projectsCards = [ 
    // esto luego cuando este el back, los componentes serán reutilizables
    // hardcodeo la key para evitar el error en consola
    <ProjectCard key={1}/>,
    <ProjectCard key={2}/>,
    <ProjectCard key={3}/>,
    <ProjectCard key={4}/>,
    <ProjectCard key={5}/>,
    <ProjectCard key={6}/>,
    <ProjectCard key={7}/>
  ]
  return (
    <section id="course-section" className={!theme ? "bg-softGray" : "bg-softBlack" }>
      <article id="course-head">
        <h2 className='text-orange font-bold text-center'>Nuestros proyectos</h2>
        <h3 className='text-graySlate text-center'>Conocé los proyectos colaborativos de nuestra comunidad</h3>
      </article>
      <article id="courses">
        <div id="courses-list">
          {projectsCards.map((card,index) => {
            return (
            <span id="course-container" key={index} className={!theme ? "bg-smokeGray" : "bg-[#212222]"}>
              {card}
            </span>
            )
          })}
        </div>
      </article>
    </section>
  )
}



export default Projects;