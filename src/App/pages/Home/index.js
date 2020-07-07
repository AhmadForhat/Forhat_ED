import React, { useState, useEffect } from 'react';
import Chamada from '../../components/Chamada'
import Slide from '../../components/Slide'
import Planos from '../../components/Planos'
import Footer from '../../components/Footer';

const Home = () => {
	return (
		<>
			<Chamada />
			<Slide />
			<Planos />
			<Footer />
		</>
	)
}

export default Home