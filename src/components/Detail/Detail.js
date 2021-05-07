import React from 'react'
import './Detail.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
export default function View(props) {
    return (
        <div className='ingBlock'>
            <Header/>
            <div className="container">
            {props.info &&
                <div className='detals'>
                    <div className="text">
                        <h1>{props.info.strDrink}</h1>
                        <div className="infoIng">
                            <div>
                                <b>Ingradients</b>
                                <ul>
                                    <Link to={'/Coctail/ingridient/' + props.info.strIngredient1}><li className='ingradient'>{props.info.strMeasure1 +  props.info.strIngredient1}</li></Link>
                                    <Link to={'/Coctail/ingridient/' + props.info.strIngredient2}><li className='ingradient'>{props.info.strMeasure2 +   props.info.strIngredient2}</li></Link>
                                    <Link to={'/Coctail/ingridient/' + props.info.strIngredient3}><li className='ingradient'>{props.info.strMeasure3 +   props.info.strIngredient3}</li></Link>
                                    <Link to={'/Coctail/ingridient/' + props.info.strIngredient4}><li className='ingradient'>{props.info.strMeasure4 +   props.info.strIngredient4}</li></Link>
                                    <Link to={'/Coctail/ingridient/' + props.info.strIngredient5}><li className='ingradient'>{props.info.strMeasure5 +   props.info.strIngredient5}</li></Link>
                                </ul >
                            </div>
                        <img src={props.info.strDrinkThumb} className='imgDetals' />
                        </div>
                        <div className="info">
                        <p className = "info_p">{props.info.strInstructions}</p>
                        </div>
                    </div >
                </div>
            }
              </div>
            <Footer/>
        </div >
    )
}
