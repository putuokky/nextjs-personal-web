import About from "@components/About";
import Contact from "@components/Contact";
import Experience from "@components/Experience";
import Layout from "@components/Layout";
import Portfolio from "@components/Portfolio";
import Services from "@components/Services";
import Testimonials from "@components/Testimonials";

export default function Home() {
  return (
    <Layout>
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </Layout>
  )
}
