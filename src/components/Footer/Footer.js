import React from 'react'
import logo from '../../img/logo.png'
import liner from '../../img/line.png'
import facebook from '../../img/facebook.png'
import inst from '../../img/inst.png'
import {NavLink} from 'react-router-dom'
import './Footer.css'
export default function Footer() {

    return (
        <footer>
            <div className="footer">
            <div className="container footer_cont">
            <NavLink to = "/"><img src={logo} alt="" className="footer_logo"/></NavLink>
                <img src={liner} alt="" className="footer_liner"/>
                <div className="footer_cards">
                    <div className="footer_card">
                        <ol>
                            <li className = "footer_li">О нас</li>
                            <li className = "footer_li">Контакты</li>
                            <li className = "footer_li">Локация</li>
                            <li className = "footer_li">Меню</li>
                            <li className = "footer_li">Главная</li>
                        </ol>
                    </div>
                    <div className="footer_card alc">
                        <h6>Давайте дружить?</h6>
                        <div className="messenger">
                        <a href = "https://www.facebook.com"><img src={facebook} alt="facebook" className='facebook'/></a>
                        <a href="https:/www.instagram.com"><img src={inst} alt="instagram" className='inst'/></a>
                        </div>
                    </div>
                    <div className="footer_card">
                        <ul>
                            <li className = "footer_li" onClick = {()=>{window.location = "Coctail/Menu"}}>Все</li>
                            <li className = "footer_li" onClick = {()=>{window.location = "Coctail/Menu"}}>Алкогольные</li>
                            <li className = "footer_li" onClick = {()=>{window.location = "Coctail/Menu"}}>Неалкогольные</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}
