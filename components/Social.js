import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Social({ className }) {
  return (
    <>
      <Link href='https://www.facebook.com/'>
        <a target='_blank' className={className}><FaFacebookF /></a>
      </Link>
      <Link href='https://www.instagram.com/'>
        <a target='_blank' className={className}><FaInstagram /></a>
      </Link>
      <Link href='https://twitter.com/'>
        <a target='_blank' className={className}><FaTwitter /></a>
      </Link>
      <Link href='https://www.linkedin.com'>
        <a target='_blank' className={className}><BsLinkedin /></a>
      </Link>
      <Link href='https://github.com/'>
        <a target='_blank' className={className}><BsGithub /></a>
      </Link>
    </>
  )
}
