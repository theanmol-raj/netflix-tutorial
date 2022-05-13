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
        <Row title='' fetchUrl={requests.} />
        <Row title='' fetchUrl={requests.} />
        <Row title='' fetchUrl={requests.} />
        <Row title='' fetchUrl={requests.} />
        <Row title='' fetchUrl={requests.} />
        <Row title='' fetchUrl={requests.} />
    </div>
  )
}

export default HomeScreen