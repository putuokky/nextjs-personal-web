import Image from "next/image"
import CTA from "./CTA"
import HeaderSocial from "./HeaderSocial"
import ME from "../public/assets/me.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="md:max-h-screen h-screen overflow-hidden">
      <div className="text-center h-full relative">
        <h5>Hello I'm</h5>
        <h1>Okky Maheswara</h1>
        <h5 className="text-light mt-1">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="bg-gradient-to-b from-primary to-primary/20 w-[22rem] h-[30rem] absolute left-1/2 transform -translate-x-1/2 mt-16 rounded-t-[12rem] overflow-hidden pt-20 px-6 pb-6">
          {/* <img src={ME} alt="My Profile" /> */}
          <Image alt="My Profile" src={ME} />
        </div>

        <Link href="#contact">
          <a className="absolute -right-9 bottom-20 rotate-90 font-light hidden sm:flex">Scroll Down</a>
        </Link>
      </div>
    </header>
  )
}
