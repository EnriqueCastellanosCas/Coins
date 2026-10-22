import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { ContextAutor } from '../context/ContextAutor'
import Typography from '@mui/material/Typography';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

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
        <Typography sx={{fontFamily:'sans-serif', fontSize:'35px', textAlign:'center'}}><b>{coins.name}</b></Typography>
        <Typography sx={{textAlign:'center'}}>
          {coins.image?.large && (
            <img src={coins.image.large} alt={coins.name} width="200"/>
          )}
        </Typography> 
        <Typography sx={{fontFamily:'serif', fontSize:'17px', textAlign:'justify', margin:'5px'}}><b>Abreviatura: </b>{coins.symbol?.toUpperCase()}</Typography>
        <Typography sx={{fontFamily:'serif', fontSize:'17px', textAlign:'justify', margin:'5px'}}><b>Categorías: </b>{coins.categories?.join(', ')}.</Typography>
        <Typography sx={{fontFamily:'serif', fontSize:'17px', textAlign:'justify', margin:'5px'}}>{coins.description?.en}</Typography>
        <Typography sx={{fontFamily:'serif', fontSize:'20px', textAlign:'center', margin:'10px'}}><b>-- Mercado cambiario del {coins.name} --</b></Typography>
        {coins.market_data?.current_price && (
          <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
            <Table>
              <TableBody>
                {Object.entries(coins.market_data.current_price).map(([moneda, precio]) => (
                  <TableRow key={moneda}>
                    <TableCell component="th" scope="row">
                      <b>{moneda.toUpperCase()}</b>
                    </TableCell>
                    <TableCell align="right">
                      {precio.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <h5><b>By {autor}</b></h5>
    </div>
  )
}
