import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Home = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
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
      {coins.map((coin) => {
        return (
          <a style={{cursor:'pointer'}} key={coin.id} onClick={()=>navigate("/detail/"+coin.id)}><p>▪ {coin.id.toUpperCase()}</p></a>
        )
      })}
    </div>
  )
}
