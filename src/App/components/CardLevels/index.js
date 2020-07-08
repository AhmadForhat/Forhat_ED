import React from 'react';

const CardLevels = () => {
    const scrollToEnd = () => {
        window.scrollTo(0,500)
        console.log('batata')
    }
    useEffect(() => scrollToEnd(),[])
    return (
        <>
           <h2 style={{marginTop:'200px',height:'2000px'}}>Olá Mundo!</h2> 
        </>
    )
}

export default CardLevels