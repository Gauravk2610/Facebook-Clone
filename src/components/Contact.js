import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function Contact() {
    return (
        <Container>
            <Avatar />
            <p>Gaurav Konde</p>
        </Container>
    )
}

export default Contact

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 8px;
    cursor: pointer;
    border-radius: 10px;
    margin: 4px 0px;
    
    p {
        margin-left: 6%;
    }

    :hover{
        background-color: #ffffff26;
    }
`