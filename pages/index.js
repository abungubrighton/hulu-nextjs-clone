import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return ( 
      <div>
        <Head>
          <title>Brighton Hulu 2.0</title>
        </Head>
        {/* Header Component */}
        <Header/>
        {/* Nav Component */}
        <Nav />
        {/* Results Component */}
      </div>
    )
}