import React, { useState } from 'react';
import { useMediaPredicate } from "react-media-hook";
import { motion } from 'framer-motion'
import {containerWeb, containerMobile} from './style'
import imgChamada from './image/pessoaChamada.png'
import Button from '../Button'

const Chamada = () => {
    const webLayout = useMediaPredicate("(min-width: 600px)")
	return (
        <div style={webLayout ? containerWeb : containerMobile}>
            <img src={imgChamada} alt="imagem de chamada inicial" style={{width:'220px', alignSelf:'center', marginLeft:'75%', zIndex:'2'}}/>
            <Button type='link' title='Cadastre-se' funcao='/cadastro'/>
                <motion.div
                style={{width: '90px',height: '90px',backgroundColor: '#C7A31E',borderRadius: '15px', position:'absolute', top:'18%', left:'76.5%'}}
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{
                    scale: 0.95,
                    rotate: -90,
                    borderRadius: "100%"
                }}
                transition={{ duration: 0.50 }}
                />
                <motion.div
                style={{width: '90px',height: '90px',backgroundColor: '#C7A31E',borderRadius: '15px', position:'absolute', top:'13%', left:'63%', }}
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{
                    scale: 0.95,
                    rotate: -90,
                    borderRadius: "100%"
                }}
                transition={{ duration: 0.50 }}
                />
                <motion.div
                style={{width: '90px',height: '90px',backgroundColor: '#C7A31E',borderRadius: '15px', position:'absolute', top:'30%', left:'56%' }}
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{
                    scale: 0.95,
                    rotate: -90,
                    borderRadius: "100%"
                }}
                transition={{ duration: 0.50 }}
                />
                <motion.div
                style={{width: '90px',height: '90px',backgroundColor: '#C7A31E',borderRadius: '15px', position:'absolute', top:'16%', left:'42%'}}
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{
                    scale: 0.95,
                    rotate: -90,
                    borderRadius: "100%"
                }}
                transition={{ duration: 0.50 }}
                />
                <motion.div
                style={{width: '90px',height: '90px',backgroundColor: '#C7A31E',borderRadius: '15px', position:'absolute', top:'22%', left:'27%'}}
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{
                    scale: 0.95,
                    rotate: -90,
                    borderRadius: "100%"
                }}
                transition={{ duration: 0.50 }}
                />
                <motion.div
                style={{width: '90px',height: '90px',backgroundColor: '#C7A31E',borderRadius: '15px', position:'absolute', top:'16%', left:'7%'}}
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{
                    scale: 0.95,
                    rotate: -90,
                    borderRadius: "100%"
                }}
                transition={{ duration: 0.50 }}
                />
                <motion.div
                style={{width: '90px',height: '90px',backgroundColor: '#C7A31E',borderRadius: '15px', position:'absolute', top:'45%', left:'14%'}}
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{
                    scale: 0.95,
                    rotate: -90,
                    borderRadius: "100%"
                }}
                transition={{ duration: 0.50 }}
                />
        </div>
    )
}

export default Chamada