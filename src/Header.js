import React from 'react'
import "./Header.css"
import { Link,useHistory } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function Header({ backButton }) {
    const history = useHistory()
    return (
        // BEM
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
                
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
            )}
            

            <Link to="/">
                <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="tinder logo" />
            </Link>
            
            
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
            
            
        </div>
    )
}

export default Header
