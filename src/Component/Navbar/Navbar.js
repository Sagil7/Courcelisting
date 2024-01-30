import React from 'react'
import './Navbar.css'
import { Link ,NavLink} from 'react-router-dom'
function Navbar() {
    return (
        <div className='full'>
            <div className="secondhalf">   <NavLink to='/'> <h4>Explore Cources</h4> </NavLink>    </div>
            <div className="firsthalf">
                <NavLink to='/dashboard'><h4>visit Dashboard</h4>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
