import Social from './Social'


export default function HeaderSocial() {
  return (
    <div className='hidden sm:flex flex-col items-center gap-3 absolute left-0 bottom-12 after:w-px after:h-8 after:bg-primary'>
      <Social />
    </div>
  )
}
