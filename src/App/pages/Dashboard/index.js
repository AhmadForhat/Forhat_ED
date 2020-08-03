import React, {useEffect } from 'react';
import CardModulos from '../../components/CardModulos'

const Dashboard = () => {
    const array = [{materia: 'ingles', title: 'Inglês', subTitle:'Curso completo de inglês', description:'Curso completo para aprender inglês da forma mais simples do mundo'}]
    return (
        <div style={{marginTop:'80px', heigth:'400px'}}>
            <CardModulos array={array}/>
        </div>
    )
}

export default Dashboard