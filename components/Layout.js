import Head from 'next/head'

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div>
        <header>header ini</header>
        <main>
          {props.children}
        </main>
      </div>
      <footer>
        footer
      </footer>
    </>
  )
}
