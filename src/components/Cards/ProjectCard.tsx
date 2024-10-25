import IconCarousel from '../Containers/IconCarousel/IconCarousel'
import DevImageContainer from '../Containers/DevImgContainer/DevImageContainer';
import './projectCard.css'
import { useTheme } from '../../hooks/useTheme';


function ProjectCard() {
  // false = modo claro, true = modo oscuro
  const {theme} = useTheme();
  return (
    <>
    <span id="course-container" className={!theme ? "bg-smokeGray" : "bg-[#212222]"}>
            <div id="img-project-name-container">
              <img src="/img/project-img.jpg" alt="project-img" id="project-img" className='w-full'/>
              <div id="project-name">
                <h4>Nombre del proyecto</h4>
                <span id="dev-img-container">
                  <DevImageContainer />
                </span>
              </div>
            </div>
            <ul id="course-details"> 
                <li id="course-detail-description" className={!theme ? 'text-Gray' : 'text-lightGray' }>Lorem ipsum dolor sit amet consectetur. Augue nisl pellentesque tincidunt sed vitae rhoncus. Nec nisi risus bibendum sit tristique odio. Leo justo hendrerit feugiat bibendum. Hendrerit risus id elementum dui aliquam amet facilisi egestas et.</li>
              <li className='px-10'>
                <IconCarousel />
                </li>
              </ul>
              <div id='btn-container'>
                <button type='button' className={!theme ? 'bg-[#131414]' : 'bg-[#3D3D3D]'}>
                  <img src='/assets/other-assets/svg/common/quill_link-out.svg'/>
                  <p>Demo</p>
                </button>
                <button type='button' className={!theme ? 'bg-[#131414]' : 'bg-[#3D3D3D]'}>
                  <img src='/assets/other-assets/svg/social/github-logo.svg'/>
                  <p>GitHub</p>
                </button>
              </div>
          </span>
    </>
  )
}

export default ProjectCard