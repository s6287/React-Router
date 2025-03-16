import React from 'react'
import { NavLink } from 'react-router-dom'

function User() {
  return (
    <>
    <h1>This is users Page . Learning Dynamic Routing.</h1>
     <nav>
            <NavLink to="/user/1">User1</NavLink> <br /> <br />
            <NavLink to="/user/2">User2</NavLink> <br /> <br />
            
        </nav>

    </>
  )
}

export default User