import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import List from '../components/Home/List'
import SearchBar from '../components/Home/SearchBar'
import { COCTAIL_ALL, FILTERBYALKO, SEARCHBYNAME } from '../Config'
import './Home.css'

export default function HomeScreen() {
    const [data, setData] = useState(null)
    useEffect(() => {
        getAllCoctails()
    }, [])
    const getAllCoctails = async () => {
        let resp = await fetch(COCTAIL_ALL)
        let request = await resp.json()
        setData(request.drinks)
    }
    const getCoctailsByName = async (latter) => {
        if (latter.lenght <= 1 || latter == '') {
            getAllCoctails()
        }
        else {
            let resp = await fetch(SEARCHBYNAME + latter)
            let request = await resp.json()
            setData(request.drinks)
        }
    }

    const filterByAlc = async (filtr) => {
        if (filtr == 'All') {
            getAllCoctails()
        } else {
            let resp = await fetch(FILTERBYALKO + filtr)
            let req = await resp.json()
            setData(req.drinks)
        }
    }
    return (
        <div className = 'menu_wrapper'>
            <Header/>
            <SearchBar
                getCoctailsByName={getCoctailsByName}
                filterByAlc={filterByAlc}
            />
            <List
                data={data}
            />
            <Footer/>
        </div>
    )
}
