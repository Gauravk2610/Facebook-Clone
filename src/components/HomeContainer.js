import React from 'react'
import styled from 'styled-components'
import AddPost from './AddPost'
import ContentList from './ContentList'
import Story from './Story'

function HomeContainer() {
    return (
        <Container>
            <Feed>
                <Story />
                <AddPost />
                <ContentList />
            </Feed>
        </Container>
    )
}

export default HomeContainer

const Container = styled.div`
    flex: 0.5;
    // flex: 1;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
        width: 8px;
    }

    @media(max-width: 1250px){
        flex: 0.75;
    }

    @media(max-width: 860px){
        flex: 1;
    }
    
`

const Feed = styled.div`
    margin: 16px 26px;
    display: flex;
    flex-direction: column;
`