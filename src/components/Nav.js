import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='navbar__div'>
        <img src='./../images/Logo.svg' alt='Little Lemons Logo' className='navbar__logo'/>
        <ul className='navbar__links'>
            <li>
                <a href='/#Header' className='navbar__link'>Header</a>
            </li>
            <li>
                <a href='/#Main' className='navbar__link'>Main</a>
            </li>
            <li>
                <a href='/#Footer' className='navbar__link'>Footer</a>
            </li>
        </ul>
    </div>
  )
}

export default Nav