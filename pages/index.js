import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import requests from '@/utils/requests'
import Results from '@/components/Results'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ results }) {
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
        <Results results={ results} />
      </div>
    )
}


export async  function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(
    (response) => response.json()
  )
  
  return {
    props: {
      results:request.results
    }
  }
  
}