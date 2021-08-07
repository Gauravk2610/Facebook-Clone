import React from 'react'
import styled from 'styled-components'

function RightContainer() {
    return (
        <Container>
            Right Container
        </Container>
    )
}

export default RightContainer

const Container = styled.div`
    flex: 0.25;

    @media(max-width: 860px) {
        display: none;
    }
`