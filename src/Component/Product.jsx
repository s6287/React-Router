import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Product() {
  return (
    <>
    <input type="text" placeholder='Search Product' /> <br /> <br />
    <Link to="feature"> Feature </Link>
    <Link to="newproduct">New Product</Link>
    <Outlet/>
    </>
  )
}

export default Product

// The <Outlet /> component is used in React Router to render nested routes inside a parent component.