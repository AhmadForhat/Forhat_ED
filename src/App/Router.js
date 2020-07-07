import React from 'react'
import { Route } from "wouter";
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Login from './pages/Login'
import Navbar from './components/Navbar'


const Router = () => {
    const navbarArray = [{title:'Home', href:'/'},{title:'Sobre', href:'/sobre'},{title:'Login', href:'/login'}]
    return (
        <>
        <Route path="/">
            <>
            <Navbar links={navbarArray}/>
            <Home />
            </>
        </Route>
        <Route path="/sobre">
            <>
            <Navbar links={navbarArray}/>
            <Sobre />
            </>
        </Route>
        <Route path="/login">
            <>
            <Navbar links={navbarArray}/>
            <Login />
            </>
        </Route>
        </>
    )
}

export default Router