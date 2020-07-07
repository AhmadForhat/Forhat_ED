import React, { useState } from 'react'
import { useMediaPredicate } from "react-media-hook";
import Form from '../../components/Form'
import Spinner from '../../components/Spinner'
import {boxContainer, boxContainerMobile} from './styles'

const Login = () => {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const state = {setName, setPassword}
	const arrayForm = [
		{
			title:'Nome',
			type:'text',
			placeholder:'Ahmad Forhat',
			valor: name,
			setValor: setName
		},
		{
			title:'Senha',
			type:'password',
			placeholder:'**********',
			valor: password,
			setValor: setPassword
		}
	]
	const sendToBackend = () => console.log('batata')
	const webLayout = useMediaPredicate("(min-width: 600px)")
	return (
		<>
			<div style={webLayout ? boxContainer: boxContainerMobile}>
				<Form click={() => sendToBackend(state)} array={arrayForm}/>
			</div>
		</>
	)
}

export default Login