import React from 'react'
import './Navbar.css'
import { Link ,NavLink} from 'react-router-dom'
function Navbar() {
    return (
        <div className='full'>
           
            <NavLink to='/' ><button id='firstbutton'>Explore Courses</button></NavLink>
            <NavLink to='/dashboard'><button id='seconde button'>Dashboard</button></NavLink>
        </div>
    )
}

export default Navbar
