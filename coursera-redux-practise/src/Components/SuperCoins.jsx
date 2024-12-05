import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const SuperCoins = () => {
    const [superCoins, setSuperCoins] = useState(0)
    const cartItems = useSelector((state) => state.cart.cartItems)

    // Calculate total cost whenever cartItems change
    const totalCost = React.useMemo(() => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartItems]);


    const calcSuperCoins = (_totalCost) => _totalCost * 0.25

    useEffect(() => {
        setSuperCoins(calcSuperCoins(totalCost))
    }, [cartItems])

    return (
        <>
            <h1>Super Coins</h1>
            <p>You will earn {Math.trunc(superCoins)} super coins!</p>
        </>
    )
}

export default SuperCoins