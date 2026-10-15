import React from 'react'
import { useContext } from 'react'
import { ContextAutor } from '../context/ContextAutor'

export const About = () => {
  const {autor} = useContext(ContextAutor);
  return (
    <div>About by {autor}</div>
  )
}
