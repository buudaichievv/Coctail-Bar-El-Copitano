import React from 'react'
import Header from '../Header/Header'
import {NavLink} from 'react-router-dom'
import './Menu.css'
export default function Menu() {
    return (
        <div className = "Menu">
            <Header/>
                <h2 className = "konyak">Найти ваш напиток?</h2>
                <NavLink to = '/Coctail/Menu' className = "search">Найти</NavLink>
        </div>
    )
}
