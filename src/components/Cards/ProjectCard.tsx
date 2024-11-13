import IconCarousel from '../Containers/IconCarousel/IconCarousel'
import DevImageContainer from '../Containers/DevImgContainer/DevImageContainer';
import './projectCard.css'

function ProjectCard() {
  return (
    <>
            <div id="img-project-name-container">
              <img src="assets/images/project-img.jpg" alt="project-img" id="project-img" className='w-full'/>
              <div id="project-name">
                <h4>Landing Page Comunidad</h4>
                <span id="dev-img-container">
                  <DevImageContainer />
                </span>
              </div>
            </div>
            <ul id="course-details"> 
                <li id="course-detail-description" className='text-graySlate dark:text-lightGray'>Lorem ipsum dolor sit amet consectetur. Augue nisl pellentesque tincidunt sed vitae rhoncus. Nec nisi risus bibendum sit tristique odio. Leo justo hendrerit feugiat bibendum. Hendrerit risus id elementum dui aliquam amet facilisi egestas et.</li>
              <li className='px-10'>
                <IconCarousel />
                </li>
              </ul>
              <div id='btn-container'>
                <button type='button' className='dark:bg-[#3D3D3D] bg-[#131414]'>
                  <img src='assets/other-assets/svg/common/quill_link-out.svg'/>
                  <p>Demo</p>
                </button>
                <button type='button' className='dark:bg-[#3D3D3D] bg-[#131414]'>
                  <img src='assets/other-assets/svg/social/github-logo.svg'/>
                  <p>GitHub</p>
                </button>
              </div>
    </>
  )
}

export default ProjectCard