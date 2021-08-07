import React from 'react'
import styled from 'styled-components'
import Content from './Content'

function ContentList() {
    return (
        <Container>
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
        </Container>
            
    )
}

export default ContentList

const Container = styled.div`

`