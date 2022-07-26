import Image from "next/image";
import AVTR1 from "../public/assets/avatar1.jpg";
import AVTR2 from "../public/assets/avatar2.jpg";
import AVTR3 from "../public/assets/avatar3.jpg";
import AVTR4 from "../public/assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const data = [
    {
      avatar: AVTR1,
      name: 'TTT TTT',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto est laudantium fuga error quis corrupti adipisci, maxime quo. Similique dicta corrupti quae laboriosam perspiciatis ipsa earum dolores soluta aspernatur!'
    },
    {
      avatar: AVTR2,
      name: 'TTT TTT',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto est laudantium fuga error quis corrupti adipisci, maxime quo. Similique dicta corrupti quae laboriosam perspiciatis ipsa earum dolores soluta aspernatur!'
    },
    {
      avatar: AVTR3,
      name: 'TTT TTT',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto est laudantium fuga error quis corrupti adipisci, maxime quo. Similique dicta corrupti quae laboriosam perspiciatis ipsa earum dolores soluta aspernatur!'
    },
    {
      avatar: AVTR4,
      name: 'TTT TTT',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto est laudantium fuga error quis corrupti adipisci, maxime quo. Similique dicta corrupti quae laboriosam perspiciatis ipsa earum dolores soluta aspernatur!'
    },
  ]
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='w-full mx-auto md:w-2/4'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='bg-tema-secondary text-center p-8 rounded-[2rem] select-none mb-16'>
                <div className="w-16 aspect-square overflow-hidden rounded-[50%] mt-0 mx-auto mb-4 border-[0.4rem] border-solid border-primary-secondary">
                  <Image src={avatar} />
                  <h5 className="client_name">{name}</h5>
                </div>
                <small className="text-light font-light block w-4/5 mt-3 mx-auto mb-0">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
