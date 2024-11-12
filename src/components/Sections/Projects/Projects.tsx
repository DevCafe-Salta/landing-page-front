import ProjectCard from '../../Cards/ProjectCard';
import './projects.css'
function Projects() {
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
    <section id="course-section">
      <article id="course-head">
        <h2 className='text-orange font-bold text-center'>Nuestros proyectos</h2>
        <h3 className='dark:text-lightGray text-center text-softBlack'>Estos son los proyectos colaborativos de nuestra comunidad</h3>
      </article>
      <article id="courses">
        <div id="courses-list">
          {projectsCards.map((card,index) => {
            return (
            <span id="course-container" key={index} className="bg-smokeGray dark:bg-[#212222]">
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