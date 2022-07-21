import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'

export default function HeaderSocial() {
  return (
    <div className='hidden sm:flex flex-col items-center gap-3 absolute left-0 bottom-12 after:content-none after:w-1 after:h-8 after:bg-primary'>
      <a href='https://www.linkedin.com' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/' target='_blank'><BsGithub /></a>
      <a href='https://www.dribbble.com' target='_blank'><BsDribbble /></a>
    </div>
  )
}
