import React from 'react'
import {Carousel} from 'react-bootstrap'
import Header from '../Header/Header'
import coctail from '../../img/cocktail.jpg'
import coctail2 from '../../img/slide2.jpg'
import coctail3 from '../../img/slide3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import line from "../../img/Group1.png"
import line2 from "../../img/Group.png"
import rom from '../../img/REM.png'
import './MainPage.css'
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
export default function MainPage(props) {
    return (
        <div>
                <div className='fone'>
                  <Header/>
                <div className="logotype">
                <h1>BAR</h1>
                <h2>EL-Capitano</h2>
                <button onClick = {()=>{window.location = "Coctail/Menu"}}>Найти напиток</button>
                </div>
                </div>
                <div className="">
                <Carousel className = 'carousel'>
                        <Carousel.Item>
                        <img className = 'block'src = {coctail}/>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className = 'block'src = {coctail2}/>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className = 'block'src = {coctail3}/>
                        </Carousel.Item>
                </Carousel>
                </div>
                <div className="bg">
                    <img src={line} className="line" alt=""/>
                    <div className="bg_info">
                        <h2>КОНЬЯК</h2>
                        <img src={rom} alt="" className="rom"/>
                        <ul>
                            <li className = "bg_li">на 63,5% из воды;</li>
                            <li className = "bg_li">на 33,3% из этилового спирта;</li>
                            <li className = "bg_li">на 1,5% из углеводов;</li>
                            <li className = "bg_li">на 1,5% из моно- и дисахаридов;</li>
                            <li className = "bg_li">на 0,1% из пищевых волокон;</li>
                            <li className = "bg_li">на 0,1% из золы.</li>
                        </ul>
                    </div>
                    <img src={line2} className="line" alt=""/>
                </div>
                <div className="buttons">
                    <button onClick = {()=>{window.location = "Coctail/Menu"}}>Все</button>
                    <button onClick = {()=>{window.location = "Coctail/Menu"}}>Алкогольные</button>
                    <button onClick = {()=>{window.location = "Coctail/Menu"}}>Без алкогольные</button>
                </div>
                <Footer/>
        </div>
    )
}
