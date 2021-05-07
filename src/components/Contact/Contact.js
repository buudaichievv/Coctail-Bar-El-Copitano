import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Contact.css'
export default function Contact() {
    return (
        <div className = 'contact'>
            <div className="container">
            <Header/>
            <div className="contact_flex">
            <div className="contact_map">
                <p>ул.Чуй Проспект / Турусбекова</p>
                <iframe className="ifrm" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3637.264527468904!2d74.58566745496556!3d42.8766706938213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7182e2c212e1bbd!2z0J_QvtC70LjRgtC10YXQvdC40YfQtdGB0LrQuNC5INC60L7Qu9C70LXQtNC2INCc0KPQmtCg!5e0!3m2!1sru!2sus!4v1619534828094!5m2!1sru!2sus"  allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="contact_address">
                <div className="contact_address_text">
                <p>+996 999 68-18-68</p>
                <p>+996 700 68-18-68</p>
                <p>312 68-18-68</p>
                </div>
            </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
