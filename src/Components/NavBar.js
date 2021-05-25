import React from 'react'
import logo from'../images/Logo.svg'
import Button from './Button'

const NavBar = () => {
    return (
        <div className='NavbarWrapper'>
            <img className='tekionLogo' src={logo}/>
            <div className='NavbarLinksWrapper'> 
                <a>Products</a>
                <a>Solutions</a>
                <a>About Company</a>
                <a>TPL Hub</a>
                <a>News & Blogs</a>
            </div>
            <Button text='REQUEST DEMO' btnStyle='buttonWrappergrey'/>
           
        </div>
    )
}

export default NavBar
