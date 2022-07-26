import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='w-3/4 grid grid-cols-[28%_60%] gap-[12%] mx-auto'>
        <div className='flex flex-col gap-5'>
          <article className='bg-tema-secondary p-5 rounded-2xl text-center border-[1px] border-solid border-transparent transition duration-300 ease-linear hover:bg-transparent hover:border-primary-secondary'>
            <MdOutlineEmail className="text-2xl mb-2 mx-auto" />
            <h4 className="font-semibold">Email</h4>
            <h5 className="text-light">okkymahes@gmail.com</h5>
            <a href='mailto:okkymahes@gmail.com' target='_target' className="mt-3 inline-block text-sm">Send a Message</a>
          </article>
          <article className='bg-tema-secondary p-5 rounded-2xl text-center border-[1px] border-solid border-transparent transition duration-300 ease-linear hover:bg-transparent hover:border-primary-secondary'>
            <RiMessengerLine className="text-2xl mb-2 mx-auto" />
            <h4 className="font-semibold">Messeger</h4>
            <h5 className="text-light">Okky Maheswara</h5>
            <a href='https://m.me/okkymhwr' target='_target' className="mt-3 inline-block text-sm">Send a Message</a>
          </article>
          <article className='bg-tema-secondary p-5 rounded-2xl text-center border-[1px] border-solid border-transparent transition duration-300 ease-linear hover:bg-transparent hover:border-primary-secondary'>
            <BsWhatsapp className="text-2xl mb-2 mx-auto" />
            <h4 className="font-semibold">WhatsApp</h4>
            <h5 className="text-light">+1234567890</h5>
            <a href='https://api.whatsapp.com/send?phone=+1234567890' target='_target' className="mt-3 inline-block text-sm">Send a Message</a>
          </article>
        </div>
        <form action='' className="flex flex-col gap-5">
          <input type='text' name="name" placeholder="Your Full Name" className="w-full p-6 rounded-lg bg-transparent border-2 border-solid border-primary-secondary resize-none text-white" required />
          <input type='email' name="email" placeholder="Your Email" className="w-full p-6 rounded-lg bg-transparent border-2 border-solid border-primary-secondary resize-none text-white" required />
          <textarea name="message" rows='7' placeholder="Your Message" className="w-full p-6 rounded-lg bg-transparent border-2 border-solid border-primary-secondary resize-none text-white" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}
