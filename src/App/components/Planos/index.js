import React from 'react';
import {containerBody, containerBox, subtitle} from './style'
import Button from '../Button'

const Planos = () => {
    const array = [{title:'Simples', itens:['Acesso a todos os cursos', 'Provas avaliativas', 'Acesso 1 conta', '10 reais/mês']},{title:'Simples', itens:['Acesso a todos os cursos', 'Provas avaliativas', 'Acesso 1 conta', '10 reais/mês']}, {title:'Simples', itens:['Acesso a todos os cursos', 'Provas avaliativas', 'Acesso 1 conta', '10 reais/mês']}]
    return (
        <div style={containerBox}>
            {array.map((item, index) => {
                return(
                    <div key={index} style={containerBody}>
                        <h2 style={subtitle}>{item.title}</h2>
                        {item.itens.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                        <div style={{marginTop:'20px', marginBottom:'10px'}}>
                            <Button type='link' title='Comprar' funcao='/saibaMais'/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Planos