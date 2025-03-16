import React from 'react'
import {NavLink} from "react-router-dom"

function navbar() {
  return (
    <>
    <nav>
        <NavLink to="/">Home</NavLink> <br /> <br />
        <NavLink to="about">About</NavLink> <br /> <br />
        <NavLink to="place-order">Place Order</NavLink> <br /> <br />
        <NavLink to="product">Product</NavLink> <br /> <br />
        <NavLink to="user">User Details</NavLink> <br /> <br />
        <NavLink to="profile">Profile</NavLink>
    </nav>
    </>
  )
}
export default navbar;


// We can also Use Link instead of  NavLink.
// NavLink is specially build for Navbar , Breadcrumb because it add Active class to that element.