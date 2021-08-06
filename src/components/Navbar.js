import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import { 
    Home, OndemandVideo, Store, SupervisedUserCircleOutlined, 
    ViewQuiltOutlined, Apps, Telegram, Notifications, ArrowDropDown,
    Menu 
    } from '@material-ui/icons'
import { Avatar, makeStyles } from '@material-ui/core';

function Navbar() {

    const [active, setActive] = useState("Home");

    const useStyles = makeStyles((theme) => ({
        medium: {
          width: theme.spacing(4),
          height: theme.spacing(4),
        },
        large: {
          width: theme.spacing(7),
          height: theme.spacing(7),
        },
    }));
      
    const classes = useStyles(); 
      
    return (
        <Header>
            <LeftButton>
                <FbLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_(2019).png/1200px-Facebook_Logo_(2019).png"/>
                <SearchArea>
                    <SearchIcon/>
                    <input placeholder="Search Facebook" type="text" />
                </SearchArea>
            </LeftButton>
            
            <MiddleButton>
                <Icon className={active === "Home"?("active"):('default')}>
                    <Home/>
                </Icon>
                <Icon className={active === "Video"?("active"):('default')}>
                    <OndemandVideo />
                </Icon>
                <Icon className={active === "MarketPlace"?("active"):('default')}>
                    <Store />
                </Icon>
                <Icon className={active === "Groups"?("active"):('default')}>
                    <SupervisedUserCircleOutlined />
                </Icon>
                <Icon className={active === "Gaming"?("active"):('default')}>
                    <ViewQuiltOutlined />
                </Icon>
                <MenuIcon>
                    <Icon className="default">
                        <Menu />
                    </Icon>
                </MenuIcon> 
            </MiddleButton> 

            <RightButton>
                <AccountDetail>
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQF-IuuNt18UrA/profile-displayphoto-shrink_400_400/0/1621611802448?e=1633564800&v=beta&t=mniGlAVfwO-fDkPtp56OHkRCqnanCQOKbh4YNoVxru4" className={classes.medium}/>
                    <p>Gaurav</p>
                </AccountDetail>
                <OtherIcons>
                    <Apps />
                    <Telegram /> 
                    <Notifications />
                    <ArrowDropDown /> 
                </OtherIcons>
            </RightButton>
        </Header>
    )
}

export default Navbar

const Header = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #242526;
    color: white;
    padding: 0px 16px;
    align-items: center;
    border-bottom: 1px solid gray;
`

const LeftButton = styled.div`
    display: flex;
    align-items: center;
`

const FbLogo = styled.img`
    width: 40px;
    // height: 40px;
`

const SearchArea = styled.div`
    margin-left: 6px;
    display: flex;
    flex: 1;
    background-color: #3a3b3c;
    padding: 8px;
    border-radius: 20px;

    .MuiSvgIcon-root {
        margin: 0px 3px;
        color: gray;
    }

    input {
        font-size: 16px;
        color: white;
        // margin-right:10px;
        background-color: inherit;
        outline-width: 0;
        border: none;
    }

    @media(max-width: 1200px) {
        input{
            display: none;
        }

        .MuiSvgIcon-root {
            margin: 0px 0px;
        }
    }
`

const MiddleButton = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;


    .MuiSvgIcon-root {
        padding: 10px 38px;
        font-size: 30px;
        margin: 0px 3px;
        margin-top: 4px;
        cursor: pointer;
        border-radius: 10px;
    }

    .active {
        color: #2d88ff;
        border-bottom: 3px solid #2d88ff;
    }

    .default .MuiSvgIcon-root:hover {
        background-color: #68686880;
    }

    @media(max-width: 1200px) {
        .MuiSvgIcon-root {
            padding: 10px 2vw; 
            margin: 4px;
            font-size: 26px;

        }
    }

    @media(max-width: 650px) {
        padding: 4px 0px;
        justify-content: flex-start;

        // margin: 28px 0px;
        // // margin-top: 4px;

        .MuiSvgIcon-root {
            display: none;
        }
    }
`

const MenuIcon = styled.div`
    display: none;
    @media(max-width: 800px){
        display: flex;
    }

    @media(max-width: 650px){
        .MuiSvgIcon-root{
            display: flex;
        }
    }
`

const Icon = styled.div`

`

const RightButton = styled.div`
    display: flex;
    align-items: center;
`

const AccountDetail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 6px;
    border-radius: 20px;
    cursor: pointer;
    
    .MuiAvatar-root {
    }

    p {
        margin-left: 8px;
        margin-right: 8px;
        font-weight: bold;
    }

    :hover {
        background-color: #68686880; 
    }

    @media(max-width: 1200px) {
        display: none;
    }

`

const OtherIcons = styled.div`
    display: flex;
    flex-direction: row;

    .MuiSvgIcon-root {
        cursor: pointer;
        font-size: 22px;
        padding: 10px;
        margin: 4px;
        background-color: #68686880; 
        border-radius: 40px;
    }

    @media(max-width: 1200px){
        .MuiSvgIcon-root {
            font-size: 18px;
        }
    }
`
