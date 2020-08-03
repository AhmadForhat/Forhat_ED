import React from 'react';
import {container} from './style'
import Buttom from '../Button'

const CardModulos = ({array}) => {
    if(array){
        return (
            <div style={{marginBottom:'50px', display:'flex', flexDirection:'column-reverse'}}>
            {array.map((modulo,index) => {
                const {materia, title, subTitle, description, backgroundColor, color} = modulo
                return (
                    <div key={index} style={container(backgroundColor || 'white', color || '')}>
                        <h2>{title}</h2>
                        <p>{subTitle}</p>
                        <p style={{padding:'10px'}}>{description}</p>
                        <Buttom type='link' title='Ir para o curso' funcao={`/${materia}`}/>
                    </div>
                )
            })}
            </div>
        )
    }else{
        return (
            <h2>Nenhum Curso registrado!</h2>
        )
    }
}

export default CardModulos