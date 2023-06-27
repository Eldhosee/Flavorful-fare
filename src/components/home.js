import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnavbar from './nav';
import Video from './carousel';
import Homebody from './body';
import Footer from './footer';
const Home = () => {
    return (
        <>

            <Topnavbar />
            <Video />
            <br/><br/>
            <Homebody/>
            <Footer/>
        </>
    )
}

export default Home