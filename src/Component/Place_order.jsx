import React from 'react'
import { useNavigate } from 'react-router-dom'

function Place_order() {
    const navigate = useNavigate();
    function Order(){
        navigate('/order-summary')
    }
  return (
    <>
    <h2>Place Your Order</h2>
    <button onClick={Order}>Click To Place Order </button>
    </>
  )
}

export default Place_order