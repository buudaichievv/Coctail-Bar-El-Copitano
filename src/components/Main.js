import React from 'react'
import { Route, Switch,BrowserRouter} from 'react-router-dom'
import DetailScreen from '../Screen/DetailScreen'
import HomeScreen from '../Screen/HomeScreen'
import IngridienScreen from '../Screen/IngredientScreen'
import Contact from './Contact/Contact'
import MainPage from './MainPage/MainPage'
import Menu from './Menu/Menu'
export default function Main() {
    return (
        <Switch>
             
            <BrowserRouter>
            <Route exact path = '/' component ={MainPage}/>
            <Route exact path='/Coctail' component={Menu} /> {/* мы через / обращаемся к другим страницам */}
            <Route exacr path='/Contact' component = {Contact}/>
            <Route ecact path='/Coctail/menu' component ={HomeScreen}/>
            <Route exact path='/Coctail/detail/:id' component={DetailScreen} />
            <Route exact path='/Coctail/ingridient/:name' component={IngridienScreen} />
            </BrowserRouter>
         
        </Switch>
    )
}