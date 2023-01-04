import React, {useState} from "react";
import { Link, NavLink } from 'react-router-dom'

import Logo from '../../images/logo.png'
import { GoThreeBars } from 'react-icons/all'
import { MdOutlineClose } from 'react-icons/all'

import './navbar.css'
import { links } from "../../data";


const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
      <nav>
          <div className="container nav__container">
              <Link to={'/'} className={'logo'} onClick={() => setIsNavShowing(false)}>
                  <img src={Logo} alt="Logo"/>
              </Link>
              <ul className={`nav__links ${isNavShowing? 'show_nav' : 'hide_nav'}`}>
                  {
                      links.map(({name, path}, index) => {
                          return (
                              <li key={index}>
                                  <NavLink
                                      to={path}
                                      className={({isActive}) => isActive? 'active-nav' : '' }
                                      onClick={() => setIsNavShowing(prev => !prev)}
                                  >
                                      {name}
                                  </NavLink>
                              </li>
                          )
                      })
                  }
              </ul>
              <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                  {
                      isNavShowing? <MdOutlineClose/> : <GoThreeBars/>
                  }
              </button>
          </div>
      </nav>
  )
}

export default Navbar