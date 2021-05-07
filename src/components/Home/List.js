import React from 'react'
import { Link } from 'react-router-dom'
import './List.css'
export default function List(props) {
    return (
        <div className='cards'>
            {props.data ?
                props.data.map(el => {
                    return (
                        <Link to={'/Coctail/detail/' + el.idDrink} key={el.idDrink} className = 'a'>
                            <div className="coctail">
                                <h3 className='name'>{el.strDrink}</h3>
                                <img className='imgDrink' src={el.strDrinkThumb} />
                            </div>
                        </Link>
                    )
                })
                : <div class="loader"></div>
            }
        </div>
    )
}
