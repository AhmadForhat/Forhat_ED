import { auth, db } from '../../../Firebase'

const sendToBackend = async state => {
    const {email, pass, name} = state
	try {
        await auth.createUserWithEmailAndPassword(email, pass)
        await db.collection('users').add({name, email})
        await localStorage.setItem('isLogged',true)
        window.location.replace('/')
        console.log('Usuário Criado com sucesso!')
    } catch (error) {
        console.log(error)
    }
}

export default sendToBackend