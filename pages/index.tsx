import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>socialPlus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header/>
      <h1>This is SocialMedia Build</h1>
      {/* feed */}
      {/* modal */}
    </div>
  )
}
