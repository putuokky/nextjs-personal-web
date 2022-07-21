import About from "@components/About";
import Contact from "@components/Contact";
import Experience from "@components/Experience";
import Layout from "@components/Layout";
import Portfolio from "@components/Portfolio";
import Services from "@components/Services";

export default function Home() {
  return (
    <Layout>
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Contact />
    </Layout>
  )
}
