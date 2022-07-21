import Link from 'next/link'
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'


export default function HeaderSocial() {
  return (
    <div className='hidden sm:flex flex-col items-center gap-3 absolute left-0 bottom-12'>
      <Link href='https://www.linkedin.com'>
        <a target='_blank'><BsLinkedin /></a>
      </Link>
      <Link href='https://github.com/'>
        <a target='_blank'><BsGithub /></a>
      </Link>
      <Link href='https://www.dribbble.com'>
        <a target='_blank'><BsDribbble /></a>
      </Link>
    </div>
  )
}
