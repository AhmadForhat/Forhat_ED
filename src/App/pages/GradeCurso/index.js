import React, {useEffect}  from 'react'
import Headers from '../../components/Headers'

const GradeCurso = ({nivel}) => {
    return (
        <>
            <Headers location={'/ingles'} title={nivel}/>
        </>
    )
}

export default GradeCurso