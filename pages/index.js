import About from "@components/About";
import Contact from "@components/Contact";
import Experience from "@components/Experience";
import Layout from "@components/Layout";
import Portfolio from "@components/Portfolio";

export default function Home() {
  return (
    <Layout>
      <section>home</section>
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </Layout>
  )
}
