import React, { useState } from 'react';
import Input from '../Input'

const Form = ({click, array, isLoad}) => {
    return (
        <form>
        {array.map((input,index) => {
            return (
                <div key={index} style={{padding:'10px'}}>
                    <Input title={input.title} type={input.type} placeholder={input.placeholder} valor={input.valor} setValor={input.setValor}/>
                </div>
            )
        })}
            <div style={{padding:'10px', marginTop:'10px'}}>
                {!isLoad ? (
                    <Input type="submit" value="Enviar" onClick={click}/>
                ):(
                    <h2>Carregando...</h2>
                )}
            </div>
        </form>
    )
}

export default Form