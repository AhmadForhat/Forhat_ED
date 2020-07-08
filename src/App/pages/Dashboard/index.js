import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner'

const Dashboard = () => {
    const scrollToEnd = () => {
        window.scrollTo(0,3000)
    }
    useEffect(() => scrollToEnd(),[])
    return (
        <>
           <h2 style={{marginTop:'200px',height:'2000px'}}>Olá Mundo!</h2>
        </>
    )
}

export default Dashboard