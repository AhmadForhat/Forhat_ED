import React, {useEffect}  from 'react'
import CardModulos from '../../components/CardModulos'
import Navbar from '../../components/Navbar'
import Headers from '../../components/Headers'
import GradeCurso from '../GradeCurso'

const CursoIngles = ({nivel}) => {
    const navbarArrayLogado = [{title:'Logout', href:'/logout'}]
    const scrollToEnd = () => {
        window.scrollTo(0,3000)
    }
    useEffect(() => scrollToEnd(),[])
    const array = [
        {
            materia: 'ingles/basic',
            title: 'Básico',
            subTitle:'Present e Pass',
            description:'Curso focado para entender o básico de presente e passado'
        },
        {
            materia: 'ingles/intermediate',
            title: 'Intermediário',
            subTitle:'Future e Present Perfect',
            description:'Curso focado para entender o básico de presente e passado'
        },
        {
            materia: 'ingles/advanced',
            title: 'Avançado',
            subTitle:'Conversation',
            description:'Curso focado para entender o básico de presente e passado'
        }
    ]
    if(nivel) return <GradeCurso nivel={nivel}/>
    return (
        <>
            <Navbar links={navbarArrayLogado}/>
            <div style={{marginTop:'80px', heigth:'400px'}}>
                <CardModulos array={array}/>
            </div>
        </>
    )
}

export default CursoIngles