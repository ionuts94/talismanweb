import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./NavItem.css"

const NavItem = ({ link, title }) => {
    const navigate = useNavigate();

    return (
        <div className="nav-item-container"
            onClick={() => navigate(`/${link}`)}
        >
            <h1>{title}</h1>
        </div>
    )
}

export default NavItem
