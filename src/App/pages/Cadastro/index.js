import React, { useState } from 'react'
import { useMediaPredicate } from "react-media-hook"
import Form from '../../components/Form'
import imgCadastro from './image/imgCadastro.png'
import {boxContainer, boxContainerMobile} from './styles'
import sendToBackend from './sendToBackend'

const Cadastro = () => {
	const [name, setName] = useState('')
	const [pass, setPass] = useState('')
	const [confirmarPass, setConfirmarPass] = useState('')
	const [email, setEmail] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const state = {setName, setPass, setConfirmarPass, setEmail, email, pass, name, setIsLoading}
	const arrayForm = [
		{
			title:'Nome',
			type:'text',
			placeholder:'ForhatED',
			valor: name,
			setValor: setName
		},
		{
			title:'Email',
			type:'email',
			placeholder:'forhatEd@gmail.com',
			valor: email,
			setValor: setEmail
		},	
		{
			title:'Senha',
			type:'password',
			placeholder:'**********',
			valor: pass,
			setValor: setPass
		},
		{
			title:'Confirmar Senha',
			type:'password',
			placeholder:'**********',
			valor: confirmarPass,
			setValor: setConfirmarPass
		}
	]
	if(isLoading) return <h2>Carregando...</h2>
	const webLayout = useMediaPredicate("(min-width: 600px)")
	if(webLayout){
		return(
			<div style={{display:'flex', justifyContent:'space-around'}}>
				<div style={webLayout ? boxContainer: boxContainerMobile}>
					<Form sendToBackend={() => sendToBackend(state)} array={arrayForm}/>
					<a style={{fontSize:'14px', textAlign:'center', color:''}} href='login'>Já possuí uma conta?</a>
				</div>
				<div style={{width:'40%', display:'flex', marginTop:'150px'}}>
					<img src={imgCadastro} style={{width:'100%', alignSelf:'center', margin:'0 auto'}}/>
				</div>
			</div>
		)
	}
	return (
		<div style={webLayout ? boxContainer: boxContainerMobile}>
			<Form submit={() => sendToBackend(state)} array={arrayForm}/>
			<a style={{fontSize:'14px', textAlign:'center', color:''}} href='login'>Já possuí uma conta?</a>
		</div>
	)	
}

export default Cadastro