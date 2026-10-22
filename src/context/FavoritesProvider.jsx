import React from 'react'
import { ContextFavorites } from './ContextFavorites'
import { useState } from 'react'

export const FavoritesProvider = ({children}) => {
    const [coins, setCoins] = useState ([])
    const [coinsFavorites, setCoinsFavorites] = useState([]);
    
    const addFavorite = (id) => {
        console.log(id);
        const coin = coins.find((coin) => (coin.id == id));
        console.log(coin);
        if (coin.quantity == 0) {
            return;
        }
        if (coinsFavorites.find((coin) => (coin.id == id))) {
            const copyCoins = coins.map((coin) => {
                if (coin.id == id) {
                    coin.quantity = coin.quantity - 1;
                    return coin;
                } else {
                    return coin;
                }
            });  
            setCoins(copyCoins);
        } else {
            const copyCoins = {...coin, quantity:1};
            const copyCoinsFavorites = [...CoinsFavorites, copyCoins];
            setCoins(copyCoinsFavorites);
        }
    }
    
    const removeFavorite = (id, quantity) => {
        const coin = coinsFavorites.find((coin) => (coin.id == id));
        const cantidad = coin.quantity;
        const copyCoins = coins.map((coin) => {
            if (coin.id == id) {
                coin.quantity = coin.quantity + 1;
                return coin;
            } else {
                return coin;
            }
        });  
        setProducts(copyCoins);
        const copyCoinsFavorites = coinsFavorites.filter((coin) => (coin.id == id));
        setProductsCart(copyCoinsFavorites);
    }

  return (
    <ContextFavorites.Provider value={{coins, coinsFavorites, addFavorite, removeFavorite}}>
        {children}
    </ContextFavorites.Provider>
  )
}