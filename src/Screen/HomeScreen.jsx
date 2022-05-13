import React from 'react'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import Row from '../Components/Row'
import requests from '../Assets/Request'

function HomeScreen() {

    
  return (
    <div className=' bg-black'>
        <Navbar />
        <Banner />
        <Row title='Netflix Original' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title='Trending' fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen