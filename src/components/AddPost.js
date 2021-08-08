import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { Videocam, PhotoLibrary, EmojiEmotions } from "@material-ui/icons"

function AddPost() {
    return (
        <Container>
            <Post>
                <AddInput>
                    <Avatar />
                    <input placeholder="Whats on your mind, Gaurav?" type="text" />
                </AddInput>
                <Options>
                    <Icon>
                        <Videocam className='video'/>
                        <p>Live Video</p>
                    </Icon>
                    <Icon>
                        <PhotoLibrary className='photo' />
                        <p>Photo/Video</p>
                    </Icon>
                    <Icon>
                        <EmojiEmotions className='emoji' />
                        <p>Feeling/Activity</p>
                    </Icon>
                </Options>
            </Post>
        </Container>
    )
}

export default AddPost

const Container = styled.div`
    margin: 26px 6px;
`

const Post = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #242526;
    border-radius: 10px;
`

const AddInput = styled.div`
    display: flex;
    flex-direction: row;
    padding: 12px;
    border-bottom: 2px solid gray;

    input {
        outline-width: 0;
        border: none;
        color: white;
        background-color: #3a3b3c;
        padding-left: 12px;
        border-radius: 20px;
        margin-left: 10px;
        flex: 1;
        font-size: 18px;
    }


`

const Options = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin: 8px 12px;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    padding: 6px 6px;
    flex: 1;
    border-radius: 10px;
    cursor: pointer;
    justify-content: space-evenly;

    .MuiSvgIcon-root {
        font-size:32px;
    }

    p {
        margin-left: -10px;
    }

    .video{
        color: #ed2849;
    }

    .photo {
        color: #45bd62;
    }

    .emoji {
        color: #e9af28;
    }

    :hover {
        background-color: #3a3b3c;
    }

    @media(max-width: 520px) {

        p {
            font-size: 70%;
            margin-left: -4px;;
        }

        .MuiSvgIcon-root {
            font-size: 26px;
        }
    }

    @media(max-width: 410px) {

        p {
            margin-left: auto;
        }

    }
`