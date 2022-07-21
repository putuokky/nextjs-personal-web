import CTA from './CTA'
import HeaderSocial from './HeaderSocial'

export default function Header() {
  return (
    <header className='h-screen pt-28 overflow-hidden'>
      <div className='text-center h-full relative'>
        <h5>Hello I'm</h5>
        <h1>Okky Maheswara</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='bg-gradient-to-b from-primary to-primary/20 w-80 h-96 absolute left-1/2 transform -translate-x-1/2 mt-16 rounded-t-[12rem] overflow-hidden pt-20 px-6 pb-6'>
          <img src='/assets/me.png' alt='' />
        </div>

        <a href='#contact' className='absolute -right-9 bottom-20 rotate-90 font-light hidden sm:flex'>Scroll Down</a>
      </div>
    </header>
  )
}
