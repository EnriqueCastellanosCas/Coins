import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { ContextAutor } from '../context/ContextAutor'

export const Detail = () => {
    const {autor} = useContext(ContextAutor);
    const {id} = useParams();
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
          }
          return response.json();
        })
        .then((data) => {
          setCoins(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        })
      }, [])
    
  return (
    <div>
        <h1>{coins.name}</h1>
        {coins.image?.large && (
            <img src={coins.image.large} alt={coins.name} width="100" />
        )}
        <p><b>Abreviatura: </b>{coins.symbol?.toUpperCase()}</p>
        <p><b>Categorías: </b>{coins.categories?.join(', ')}.</p>
        <p>{coins.description?.en}</p>
        <h5><b>By {autor}</b></h5>
    </div>
  )
}
