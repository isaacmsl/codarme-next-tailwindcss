import Head from 'next/head'

import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div 
      className="flex flex-col flex-1"
      style={{ background: 'url(/bg.png) no-repeat center' }}
    >
      <Head>
        <title>Codar.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
    </div>
  )
}
