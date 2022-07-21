import Link from "next/link"

export default function CTA() {
  return (
    <div className="mt-10 flex gap-5 justify-center">
      <Link href="/assets/cv.pdf">
        <a className="btn">Download CV</a>
      </Link>
      <Link href="#contact">
        <a className="btn btn-primary">Let's Talk</a>
      </Link>
    </div>
  )
}