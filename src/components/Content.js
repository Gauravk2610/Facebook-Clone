import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { ChatBubbleOutlineOutlined, Favorite, MoreHoriz, ReplyOutlined, ThumbUp, ThumbUpOutlined } from "@material-ui/icons"

function Content() {
    return (
        <Container>
            <Header>
                <Profile>
                    <Avatar />
                    <Title>
                        <h4>Gaurav Konde</h4>
                        <p>3d </p>
                    </Title>
                </Profile>
                <MoreHoriz />
            </Header>
            <Text>
                <div>
                The all New Apple Macbook Pro M1 chip is Here Guys
                </div>
            </Text>
            <Image>
                <img src="https://sb.nhattao.com/2018/12/11694856_macbook-pro-retina-15-inch-early-2015.jpg" alt="" />
            </Image>
            <EmojiCount>
                <EmojiList>
                    <Emojis>
                        <ThumbUp className='like'/>
                        <Favorite className='love'/>
                        <p>1M</p>
                    </Emojis>
                    <DetailInfo>
                        <p>10k comments</p>
                        <p>900 shares</p>
                    </DetailInfo>
                </EmojiList>
            </EmojiCount>
            <Bottom>
                <Reactios>
                    <Icon>
                        <ThumbUpOutlined />
                        <p>Like</p>
                    </Icon>
                    <Icon>
                        <ChatBubbleOutlineOutlined />
                        <p>Comment</p>
                    </Icon>
                    <Icon >
                        <ReplyOutlined className='share'/>
                        <p>Share</p>
                    </Icon>
                </Reactios>
            </Bottom>
        </Container>
    )
}

export default Content

const Container = styled.div`
    margin: 16px 6px;
    padding: 10px 0px;
    max-width: inherit;
    border-radius: 10px;
    background-color: #242526;
    display: flex;
    flex-direction: column;

`

const Header = styled.div`
    padding: 0px 16px;
    display: flex;
    margin: 6px 0px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    .MuiSvgIcon-root {
        padding: 10px;
        cursor: pointer;
        border-radius: 40px;
    }

    :hover .MuiSvgIcon-root:hover{
        background-color: #525252b0;
    }
`

const Profile = styled.p`
    display: flex;
    align-items: center;

`

const Title = styled.div`
    margin-left: 12px;

    h4 {
        cursor: pointer;
        font-size: 18px;
        font-weight: 500;
    }

    p {
        cursor: pointer;
        color: #9ea1a5;
        font-size: 14px;
    }
`

const Text = styled.div`
    padding: 0px 16px;
    margin: 6px 0px;
    display: flex;
    flex: 1;
    div {
        max-width: fit-content;
        font-size: 15px;
        margin-bottom: 6px;
    }
`

const Image = styled.div`
    max-width: fit-content;
    cursor: pointer;

    img {
        width: 100%;
    }
`
const EmojiCount = styled.div`
    display: flex;
    align-items: center;
    padding: 6px 16px;
    margin: 0px 0px;
    border-bottom: 2px solid #343637;
`
    
const EmojiList = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
`

const Emojis = styled.div`
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
        font-size: 14px;
        margin: 0px 0px;
        padding: 4px;
        border-radius: 40px;
    }

    .like {
        background-color: #13a0f8;
    }

    .love {
        background-color: #fb5b77;
    }

    p {
        margin-left: 14%;
        color: #b5b5b5;
        font-weight: 100;
    }

    @media(max-width: 520px) {

        p {
            font-size: 76%;
        }
    }
`

const DetailInfo = styled.div`
    display: flex;
    color: #9ea1a5;
    font-size: 16px;

    p {
        margin: 0px 6px;
    }

    @media(max-width: 520px) {

        p {
            font-size: 76%;
        }
    }

`

const Bottom = styled.div`
    display: flex;
    margin: 0px 16px;
    margin-top: 6px;
`

const Reactios = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
`

const Icon = styled.div`
    padding: 6px 2px;
    display: flex;
    justify-content: center;
    flex: 1;
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
    margin: 0px 6px;
    .share {
        transform: rotateY(180deg);
        }
    }

    :hover {
        background-color: #525252b0;
    }

    p {
        margin-left: 6px;
    }

    @media(max-width: 520px) {

        p {
            font-size: 80%;
        }

        .MuiSvgIcon-root {
            font-size: 20px;
        }
    }
`