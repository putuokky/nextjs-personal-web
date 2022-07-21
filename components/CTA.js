import React from 'react'
// import CV from '../public/assets/cv.pdf'

const CTA = () => {
  return (
    <div className='mt-10 flex gap-5 justify-center'>
      <a href='/assets/cv.pdf' className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA