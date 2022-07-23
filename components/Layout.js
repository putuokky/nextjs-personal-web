import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

export default function Layout(props) {
  const meta = {
    title: 'My Personal Portfolio Sites',
    description: 'Website Personal Portfolio.',
    image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png',
    site: '@okkymhwr'
  }
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.site} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className='container mx-auto pt-14'>
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
