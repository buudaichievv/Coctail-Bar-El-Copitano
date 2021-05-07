import { Container } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../img/logo.png'
import './Header.css'
export default function Header() {
    return (
        <div className='wrapper-header'>
            <Container>
                <div className="header_wrapper">
                <img src={logo} alt="" className="logo"/>
                <Link to = '/'>главная</Link>
                <Link to = '/contact'>контакты</Link>
                <Link to = '/coctail'>меню</Link>
                </div>
            </Container>
        </div>
      
    )
}
