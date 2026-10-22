import React from 'react'
import { useContext } from 'react'
import { ContextAutor } from '../context/ContextAutor'
import Typography from '@mui/material/Typography';

export const About = () => {
  const {autor} = useContext(ContextAutor);
  return (
    <div>
      <Typography sx={{fontFamily:'sans-serif', margin:'10px', fontSize:'25px'}}><b>Sobre nosotros</b></Typography>
      <Typography sx={{fontFamily:'serif', fontSize:'17px', textAlign:'justify'}}>Bienvenido a COINS by {autor}, tu centro de consulta e información sobre el mercado de criptomonedas y activos digitales. Nuestra misión es simplificar el acceso a datos clave del ecosistema crypto. A través de nuestro directorio, puedes seleccionar cualquier moneda para acceder a una ficha detallada con su abreviatura oficial, categorías, contexto del proyecto y valores actualizados del mercado en tiempo real. Tanto si estás dando tus primeros pasos como si buscas monitorear tus activos favoritos, diseñamos esta plataforma para ofrecerte información clara, rápida y centralizada en un solo lugar.</Typography>
      <h5><b>By {autor}</b></h5>
    </div>
  )
}
