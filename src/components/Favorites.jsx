import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { ContextAutor } from '../context/ContextAutor'
import { useNavigate } from 'react-router';
import Typography from '@mui/material/Typography';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Box } from '@mui/material'
import { ContextFavorites } from '../context/ContextFavorites';

export const Favorites = () => { 
  const navigate = useNavigate();
  const {autor} = useContext(ContextAutor);
  const {coinsFavorites, removeFavorite} = useContext(ContextFavorites);
  
  return (
    <div>
      <Box sx={{padding:'20px', maxWidth:'1200px', margin:'0 auto', alignItems: 'center'}}>
        <Typography variant="h4" sx={{fontFamily:'sans-serif', textAlign:'center', mb:4, fontWeight:'bold'}}>
          Catálogo de Monedas
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {coinsFavorites.map((coin) => (
            <Grid item key={coin.id} sx={{ width: '150px', height: '150px', p: '8px !important', boxSizing: 'border-box' }}>  
              <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', transition: '0.3s', '&:hover': { transform: 'scale(1.03)' } }}>
                <CardActionArea onClick={() => navigate(`/detail/${coin.id}`)} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 1, boxSizing: 'border-box' }}>
                  <Box sx={{ height: '45px', width: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, flexShrink: 0 }}>
                    <CardMedia component="img" image={coin.image} alt={coin.name} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <CardContent sx={{ textAlign: 'center', p: '0 !important', width: '100%', overflow: 'hidden' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '13px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%', display: 'block' }}>
                      {coin.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%', display: 'block' }}>
                      {coin.symbol?.toUpperCase()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <button onClick={() => removeFavorite(coin.id)} sx={{ backgroundColor: '#FFFFFF', color: '#FFFFFF', border: '2px solid', borderRadius: '8px', padding: '10px 20px' }}>❤︎</button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Typography>
        <h5><b>By {autor}</b></h5>
      </Typography>
    </div>
  )
}
