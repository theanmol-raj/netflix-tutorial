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
    </div>
  )
}

export default HomeScreen