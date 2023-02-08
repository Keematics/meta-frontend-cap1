import React from 'react'
import { Link } from 'react-router-dom'


import Logo from '../assets/Logo.svg'

const Navbar = () => {

    const navStyle = {
        display: "flex",
        justifyContent: 'space-around'
    }
    const nav_link_container = {
        listStyleType: 'none',
        paddingLeft: 0,
    }

    const nav_li = {
        display: 'inline-block',
        marginLeft: '15px',
        fontSize: '16pt',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        textDecoration: 'none'
    }
    const nav_link = {
        textDecoration: 'none',
        color: 'black',
        // fontFamily: 'Markazi'
    }
  return (
    <>
    <nav style={navStyle}>
        <img src={Logo} alt='' />
        <ul style={nav_link_container}>
            <li style={nav_li}><Link style={nav_link} to='/'>Home</Link></li>
            <li style={nav_li}><Link style={nav_link} to='/about'>About</Link></li>
            <li style={nav_li}><Link style={nav_link} to='/menu'>Menu</Link></li>
            <li style={nav_li}><Link style={nav_link} to='reservations'>Reservations</Link></li>
            <li style={nav_li}><Link style={nav_link} to='orderOnline'>Order online</Link></li>
            <li style={nav_li}><Link style={nav_link} to='/login'>Login</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar