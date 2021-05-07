import React, { useState, useEffect } from 'react'
import Detail from '../components/Detail/Detail'
import { COCTAILBYID } from '../Config';
export default function DetailScreen(props) {
    const [fullInfo, setfullInfo] = useState(null)
    useEffect(() => {
        let param = props.match.params.id
        getDetailInfo(param)
    }, [])
    const getDetailInfo = async (prm) => {
        let resp = await fetch(COCTAILBYID + prm)
        let req = await resp.json()
        console.log(req.drinks[0])
        setfullInfo(req.drinks[0])
    }
    return (
        <div>
            <Detail 
                info={fullInfo}
            />
        </div>
    )
}
