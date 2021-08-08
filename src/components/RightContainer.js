import React from 'react'
import styled from 'styled-components'
import { MoreHoriz, Search } from "@material-ui/icons"
import Contact from './Contact'

function RightContainer() {
    return (
        <Container>
            <List>
                <Contacts>
                    <Header>
                        <h4>Contacts</h4>
                        <OtherOptions>
                            <Search />
                            <MoreHoriz />
                        </OtherOptions>
                    </Header>
                    <ContactList>
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                    </ContactList>
                </Contacts>
            </List>
        </Container>
    )
}

export default RightContainer

const Container = styled.div`
    flex: 0.25;
    overflow-y: overlay;

    @media(max-width: 860px) {
        display: none;
    }

    ::-webkit-scrollbar {
        display: none;
        width: 8px;
      }

    :hover {
        transition: ease-in 0.4s;


        ::-webkit-scrollbar {
            display: flex;
            width: 8px;
          }
          
        
        ::-webkit-scrollbar-track {
            background: white;
            border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: rgb(136, 136, 136);
            border-radius: 10px;
          }
        
        ::-webkit-scrollbar-thumb:hover {
            background: rgb(126, 126, 126);
            border-radius: 10px;
          }
        
        ::-webkit-scrollbar-thumb:active {
            background: rgb(126, 126, 126);
            border-radius: 10px;
          }

    }
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 18px;
    margin-left: 26px;
`

const Contacts = styled.div`
    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    margin-left: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const OtherOptions = styled.div`
    .MuiSvgIcon-root {
        margin: 0px 6px;
        padding: 6px;
        border-radius: 40px;
        cursor: pointer;
    }

    .MuiSvgIcon-root:hover {
        background-color: #525252b0;
    }
`

const ContactList = styled.div`

`