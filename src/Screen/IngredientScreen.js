import React, { useEffect, useState } from 'react'
import { SEARCHBYING } from '../Config'
import './ingredient.css'
export default function IngridienScreen(props) {
    const [ing, setIng] = useState(null)
    useEffect(() => {
        let param = props.match.params.name
        getIngredient(param)
    }, [])
    const getIngredient = async (prm) => {
        let resp = await fetch(SEARCHBYING + prm)
        let req = await resp.json()
        setIng(req ? req.ingredients[0] : null)
    }
    return (
        <div>
            <div className='ingScreen'>
                {ing ?
                    <div className='ingBlock'>
                        <h1 className='ingredient'><i>{ing.strIngredient}</i></h1>
                        <b><i>{ing.strDescription}</i></b>
                    </div>
                    : <div class="loader"></div>
                }
            </div>
        </div>
    )
}
