import React from 'react'
import { Route, Switch } from "wouter";
import Home from './pages/Home'
import Cadastro  from './pages/Cadastro'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'


const Router = () => {
    const navbarArray = [{title:'Login', href:'/login'},{title:'Cadastre-se', href:'/cadastro'}]
    const navbarArrayLogado = [{title:'Logout', href:'/logout'}]
    const isLogged = localStorage.getItem('isLogged')
    // Private Routes
    if(isLogged) return (
        <Switch>
            <Route path="/">
                <>
                <Navbar links={navbarArrayLogado}/>
                <Dashboard />
                </>
            </Route>
            <Route path="/logout">
                <>
                <Navbar links={navbarArrayLogado}/>
                <>
                <h2 style={{marginTop:'100px'}}>Deseja sair da página?</h2>
                <a href='/' onClick={() => localStorage.removeItem('isLogged')}>Logout</a>
                </>
                </>
            </Route>
            <Route path="/:rest*">
                <NotFound />
            </Route>
        </Switch>
    )
    // Public Routes
    return (
        <Switch>
            <Route path="/">
                <>
                <Navbar links={navbarArray}/>
                <Home />
                </>
            </Route>
            <Route path="/cadastro">
                <>
                <Navbar links={navbarArray}/>
                <Cadastro />
                </>
            </Route>
            <Route path="/login">
                <>
                <Navbar links={navbarArray}/>
                <Login />
                </>
            </Route>
            <Route path="/:rest">
                    <NotFound />
            </Route>
        </Switch>
    )
}

export default Router