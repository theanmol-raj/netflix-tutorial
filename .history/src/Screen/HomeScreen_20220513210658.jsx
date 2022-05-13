import React from 'react'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import Row from '../Components/Row'

function HomeScreen() {

    
  return (
    <div className=' bg-black'>
        <Navbar />
        <Banner />
        <Row />
    </div>
  )
}

export default HomeScreen