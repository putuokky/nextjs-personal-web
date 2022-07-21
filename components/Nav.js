import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsJournalBookmark } from "react-icons/bs";
import { RiServiceLine, RiContactsBookLine } from "react-icons/ri";

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav className='flex bg-black/30 w-max px-8 py-3 z-[2] fixed left-1/2 transform -translate-x-1/2 bottom-8 gap-3 rounded-full backdrop-blur-lg'>
      <Link href='#'>
        <a onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      </Link>
      <Link href='#about'>
        <a onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      </Link>
      <Link href='#experience'>
        <a onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsJournalBookmark /></a>
      </Link>
      <Link href='#services'>
        <a onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      </Link>
      <Link href='#contact'>
        <a onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBookLine /></a>
      </Link>
    </nav>
  )
}
