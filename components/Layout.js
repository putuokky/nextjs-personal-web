import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>My Personal Portfolio Sites</title>
      </Head>
      <div className='container mx-auto pt-16'>
        <Header />
        <Nav />
        <main>
          {props.children}
        </main>
      </div>
      <Footer />
    </>
  )
}
