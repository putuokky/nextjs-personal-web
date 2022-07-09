import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div>
        <Header />
        <main>
          {props.children}
        </main>
      </div>
      <Footer />
    </>
  )
}
