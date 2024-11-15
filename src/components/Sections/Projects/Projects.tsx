import ProjectCard from '../../Cards/ProjectCard';
import './projects.css'
function Projects() {
  const projectsCards = [ 
    <ProjectCard key={1}/>
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