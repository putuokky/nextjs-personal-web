import { AiFillCheckCircle } from "react-icons/ai";

export default function Experience() {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>Experience</h2>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        <div className='bg-tema-secondary px-8 py-16 rounded-[2rem] border-[1px] border-solid border-transparent transition duration-300 hover:bg-transparent hover:border-primary-secondary cursor-default md:px-10 md:py-20'>
          <h3 className="text-center mb-8 text-primary font-semibold">Frontend Development</h3>
          <div className='grid grid-cols-2 gap-y-8'>
            <article className='flex gap-2'>
              <AiFillCheckCircle className="mt-2 text-primary" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='flex gap-2'>
              <AiFillCheckCircle className="mt-2 text-primary" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediated</small>
              </div>
            </article>
            <article className='flex gap-2'>
              <AiFillCheckCircle className="mt-2 text-primary" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='flex gap-2'>
              <AiFillCheckCircle className="mt-2 text-primary" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='flex gap-2'>
              <AiFillCheckCircle className="mt-2 text-primary" />
              <div>
                <h4>TailwindCSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='flex gap-2'>
              <AiFillCheckCircle className="mt-2 text-primary" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='flex gap-2'>
              <AiFillCheckCircle className="mt-2 text-primary" />
              <div>
                <h4>NextJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='bg-tema-secondary px-8 py-16 rounded-[2rem] border-[1px] border-solid border-transparent transition duration-300 hover:bg-transparent hover:border-primary-secondary cursor-default md:px-10 md:py-20'>
          <h3 className="text-center mb-8 text-primary font-semibold">Backend Development</h3>
          <div className='grid grid-cols-2 gap-y-8'>
            <article className='flex gap-2'>
              <AiFillCheckCircle className="mt-2 text-primary" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='flex gap-2'>
              <AiFillCheckCircle className="mt-2 text-primary" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediated</small>
              </div>
            </article>
            <article className='flex gap-2'>
              <AiFillCheckCircle className="mt-2 text-primary" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediated</small>
              </div>
            </article>
            <article className='flex gap-2'>
              <AiFillCheckCircle className="mt-2 text-primary" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className='flex gap-2'>
              <AiFillCheckCircle className="mt-2 text-primary" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
