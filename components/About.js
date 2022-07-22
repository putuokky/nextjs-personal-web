// import ME from '../public/assets/me-about.jpg';
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='about_container grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[15%]'>
        <div className='about_me w-2/3 mt-8 mx-auto mb-12 aspect-square rounded-[2rem] bg-gradient-to-b from-primary to-primary/20 grid place-items-center md:mx-auto md:mt-4 md:mb-6 md:w-1/2 lg:w-full lg:mt-2 lg:mb-4'>
          <div className='about_me_image rounded-[2rem] overflow-hidden rotate-12 duration-300 ease-out hover:rotate-0'>
            <img src="/assets/me-about.jpg" alt='About Image' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards grid grid-cols-1 gap-6 md:grid-cols-3'>
            <article className='about_card bg-tema-secondary border-[1px] border-solid border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-tema-secondary hover:cursor-default'>
              <BsAward className='about_icon text-primary text-2xl mb-4 mx-auto' />
              <h5 className="text-base">Experience</h5>
              <small className="text-xs text-light">3+ years Working</small>
            </article>
            <article className='about_card bg-tema-secondary border-[1px] border-solid border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-tema-secondary hover:cursor-default'>
              <FiUsers className='about_icon text-primary text-2xl mb-4 mx-auto' />
              <h5 className="text-base">Clients</h5>
              <small className="text-xs text-light">200+ Worldwide</small>
            </article>
            <article className='about_card bg-tema-secondary border-[1px] border-solid border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-tema-secondary hover:cursor-default'>
              <VscFolderLibrary className='about_icon text-primary text-2xl mb-4 mx-auto' />
              <h5 className="text-base">Projects</h5>
              <small className="text-xs text-light">80+ Completed</small>
            </article>
          </div>
          <p className="mt-8 mb-10 text-light md:mt-4 md:mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nihil temporibus autem aliquam, vitae ab iure tempore doloremque delectus molestiae quod quibusdam magni dignissimos blanditiis, corporis excepturi neque velit nulla.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
