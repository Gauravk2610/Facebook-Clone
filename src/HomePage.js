import React from 'react'
import styled from 'styled-components'
import HomeContainer from './components/HomeContainer'
import LeftContainer from './components/LeftContainer'
import RightContainer from './components/RightContainer'
// import Navbar from './components/Navbar'

function HomePage() {
    return (
        <Home>
            <LeftContainer />
            <HomeContainer />
            <RightContainer />
        </Home>
    )
}

export default HomePage

const Home = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 62px;
    color: white;
    flex: 1;
    overflow: hidden
`