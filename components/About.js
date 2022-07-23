import ME from '../public/assets/me-about.jpg';
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Image from 'next/image';

export default function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='grid grid-cols-1 gap-0 lg:grid-cols-2'>
        <div className='w-2/3 mt-8 mx-auto mb-16 aspect-square rounded-[2rem] bg-gradient-to-b from-primary to-primary/20 grid place-items-center lg:mt-0'>
          <div className='rounded-[2rem] overflow-hidden rotate-12 duration-300 ease-out hover:rotate-0'>
            {/* <img src="/assets/me-about.jpg" alt='About Image' /> */}
            <Image alt='About Me' src={ME} />
          </div>
        </div>
        <div>
          <div className='grid grid-cols-1 gap-6 w-3/4 mx-auto sm:grid-cols-2 sm:w-full md:grid-cols-3'>
            <article className='bg-tema-secondary border-[1px] border-solid border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-tema-secondary hover:cursor-default'>
              <BsAward className='text-primary text-2xl mb-4 mx-auto' />
              <h5 className="text-base">Experience</h5>
              <small className="text-xs text-light">3+ years Working</small>
            </article>
            <article className='bg-tema-secondary border-[1px] border-solid border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-tema-secondary hover:cursor-default'>
              <FiUsers className='text-primary text-2xl mb-4 mx-auto' />
              <h5 className="text-base">Clients</h5>
              <small className="text-xs text-light">200+ Worldwide</small>
            </article>
            <article className='bg-tema-secondary border-[1px] border-solid border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-tema-secondary hover:cursor-default'>
              <VscFolderLibrary className='text-primary text-2xl mb-4 mx-auto' />
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
