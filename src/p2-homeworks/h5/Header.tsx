import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Rts";
import s from './h5.module.css'

const Header = () => {
    return (
        <nav className={s.navbar}>
            <NavLink className={navData => navData.isActive ? s.active : s.item} to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
            <NavLink className={navData => navData.isActive ? s.active : s.item} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={navData => navData.isActive ? s.active : s.item} to={PATH.JUNIOR_PLUS}>Junior +</NavLink>
        </nav>
    )
}

export default Header
