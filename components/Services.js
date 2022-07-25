import { BiCheck } from "react-icons/bi";

export default function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
        <article className='bg-tema-secondary rounded-b-[2rem] border-[1px] border-solid border-transparent h-fit transition duration-300 hover:bg-transparent hover:border-primary-secondary cursor-default'>
          <div className='bg-primary p-8 rounded-b-[2rem] shadow-[0_2rem_1rem_rgba(0,0,0,0.1)]'>
            <h3 className="text-tema text-base font-semibold text-center">UI/UX Design</h3>
          </div>
          <ul className='p-8'>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className='bg-tema-secondary rounded-b-[2rem] border-[1px] border-solid border-transparent h-fit transition duration-300 hover:bg-transparent hover:border-primary-secondary cursor-default'>
          <div className='bg-primary p-8 rounded-b-[2rem] shadow-[0_2rem_1rem_rgba(0,0,0,0.1)] font-semibold'>
            <h3 className="text-tema text-base font-semibold text-center">Web Developer</h3>
          </div>
          <ul className='p-8'>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className='bg-tema-secondary rounded-b-[2rem] border-[1px] border-solid border-transparent h-fit transition duration-300 hover:bg-transparent hover:border-primary-secondary cursor-default'>
          <div className='bg-primary p-8 rounded-b-[2rem] shadow-[0_2rem_1rem_rgba(0,0,0,0.1)] font-semibold'>
            <h3 className="text-tema text-base font-semibold text-center">Content Creator</h3>
          </div>
          <ul className='p-8'>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-primary mt-[2px]" />
              <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
