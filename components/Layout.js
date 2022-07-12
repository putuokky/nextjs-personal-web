import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>My Personal Portfolio Sites</title>
      </Head>
      <div className='container mx-auto'>
        <Header />
        <main>
          {props.children}
        </main>
      </div>
      <Footer />
    </>
  )
}
