import React from "react";
import {container, titulo, caixa, caixaButton} from './style'

function Input({title, type, placeholder, valor, setValor,click}) {
  if(click){
    return (
        <input style ={caixa} type={type} onClick={click}/>
    )
  }
    return (
        <label style={container}>
          <p style ={titulo}>{title}</p>
          <input style ={caixaButton} type={type} placeholder={placeholder} value={valor} onChange={e => setValor(e.target.value)}/>
        </label>
    )
  }

export default Input