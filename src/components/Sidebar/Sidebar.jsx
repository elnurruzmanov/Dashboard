import React from 'react'
import "./Sidebar.scss"
import {Link, NavLink} from "react-router-dom"
import Home from '../Lib/Home'
import Logo from '../Lib/Svgs/Logo'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to="/" className='logo'>
        <Logo />
      </Link>
      <ul className='sidebar_list'>
        <li className='sidebar_item '>
          <NavLink to="/" className="sidebar_link">
            <Home />
          </NavLink>
        </li>
      </ul>
           <button className='sidebar_btn'>
            <Home />
           </button>
    </div>
  )
}

export default Sidebar