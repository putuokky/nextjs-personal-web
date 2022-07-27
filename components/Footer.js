import Link from "next/link";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="bg-primary py-12 px-0 text-center text-base mt-40">
      <Link href='#'>
        <a className='text-tema text-[2rem] font-semibold mb-8 inline-block'>MAHESORA</a>
      </Link>
      <ul className='flex flex-wrap justify-center gap-8 mt-0 mx-auto mb-12'>
        <li>
          <Link href='#'>
            <a className="text-tema">Home</a>
          </Link>
        </li>
        <li>
          <Link href='#about'>
            <a className="text-tema">About</a>
          </Link>
        </li>
        <li>
          <Link href='#experience'>
            <a className="text-tema">Experience</a>
          </Link>
        </li>
        <li>
          <Link href='#services'>
            <a className="text-tema">Services</a>
          </Link>
        </li>
        <li>
          <Link href='#portfolio'>
            <a className="text-tema">Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href='#testimonials'>
            <a className="text-tema">Testimonials</a>
          </Link>
        </li>
        <li>
          <Link href='#contact'>
            <a className="text-tema">Contact</a>
          </Link>
        </li>
      </ul>
      <div className='flex justify-center gap-4 mb-16'>
        <Social className="bg-tema text-white p-3 rounded-xl flex border-[1px] border-solid border-transparent hover:bg-transparent hover:text-tema hover:border-tema" />
      </div>
      <div className="mb-16 text-tema">
        <small>&copy; {new Date().getFullYear()} MAHESORA. All rights reserved</small>
      </div>
    </footer>
  )
}
