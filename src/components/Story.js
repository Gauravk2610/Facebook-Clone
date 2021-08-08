import React from 'react'
import styled from 'styled-components'

function Story() {
    return (
        <Container>
           <List image='https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1633564800&v=beta&t=mniGlAVfwO-fDkPtp56OHkRCqnanCQOKbh4YNoVxru4'>
                <Profile src="https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1633564800&v=beta&t=mniGlAVfwO-fDkPtp56OHkRCqnanCQOKbh4YNoVxru4" />
            </List>
            <List image='https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png'>
                <Profile src="https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1633564800&v=beta&t=mniGlAVfwO-fDkPtp56OHkRCqnanCQOKbh4YNoVxru4" />
            </List>
            <List image='https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1633564800&v=beta&t=mniGlAVfwO-fDkPtp56OHkRCqnanCQOKbh4YNoVxru4'>
                <Profile src="https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1633564800&v=beta&t=mniGlAVfwO-fDkPtp56OHkRCqnanCQOKbh4YNoVxru4" />
            </List>
            <List image='https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png'>
                <Profile src="https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1633564800&v=beta&t=mniGlAVfwO-fDkPtp56OHkRCqnanCQOKbh4YNoVxru4" />
            </List>
            <List image='https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png'>
                <Profile src="https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1633564800&v=beta&t=mniGlAVfwO-fDkPtp56OHkRCqnanCQOKbh4YNoVxru4" />
            </List>
        </Container>
    )
}

export default Story

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const List = styled.div`
    display: flex;
    border-radius: 10px;
    width: 116px;
    height: 190px;
    background-color: white;
    margin: 0px 6px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;

    img {
        border-radius: 10px;
        width: inherit;
        height: inherit;
        object-fit: cover;
        // transform: scale(0.9);
    }

    :hover {
            -ms-transform: scale(1.05);
            -moz-transform: scale(1.05);
            -webkit-transform: scale(1.05);
            -o-transform: scale(1.05);
            transform: scale(1.05);
            transform: scale(1.05);
            transition: transform ease-in 0.2s;
    }

    @media(max-width: 1000px) {
        width: 100px;
        height: 160px;
    }

    @media(max-width: 580px) {
        width: 21vw;
        height: 20vh;
        
        :nth-child(n+5) {
            display: none;  
        }
    }
`

const Profile = styled.img`
    border-radius: 40px !important;
    margin: 14px 8px;
    width: 32px !important;
    height: 32px !important;
    border: 4px solid #2e89ff;
`