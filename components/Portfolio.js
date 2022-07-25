import Image from "next/image";
import Link from "next/link";
import IMG1 from "../public/assets/portfolio1.jpg";
import IMG2 from "../public/assets/portfolio2.jpg";
import IMG3 from "../public/assets/portfolio3.jpg";
import IMG4 from "../public/assets/portfolio4.jpg";
import IMG5 from "../public/assets/portfolio5.png";
import IMG6 from "../public/assets/portfolio6.jpg";

export default function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      link: 'https://github.com/',
      demo: 'https://github.com/putuokky/portofolio-nextjs-tailwindcss'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      link: 'https://github.com/',
      demo: 'https://github.com/putuokky/portofolio-nextjs-tailwindcss'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      link: 'https://github.com/',
      demo: 'https://github.com/putuokky/portofolio-nextjs-tailwindcss'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      link: 'https://github.com/',
      demo: 'https://github.com/putuokky/portofolio-nextjs-tailwindcss'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      link: 'https://github.com/',
      demo: 'https://github.com/putuokky/portofolio-nextjs-tailwindcss'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      link: 'https://github.com/',
      demo: 'https://github.com/putuokky/portofolio-nextjs-tailwindcss'
    },
  ];
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {
          data.map(({ id, image, title, link, demo }) => {
            return (
              <article key={id} className='bg-tema-secondary p-5 rounded-[2rem] border-[1px] border-solid border-transparent transition duration-300 hover:border-primary-secondary hover:bg-transparent'>
                <div className='rounded-3xl overflow-hidden'>
                  <Image alt={title} src={image} />
                </div>
                <h3 className="mt-5 mx-0 mb-8">{title}</h3>
                <div className="flex gap-4 mb-4">
                  <Link href={link}>
                    <a className='btn' target='_blank'>Github</a>
                  </Link>
                  <Link href={demo}>
                    <a className='btn btn-primary' target='_blank'>Live Demo</a>
                  </Link>
                </div>
              </article>
            )
          })
        }
      </div>
    </section >
  )
}
