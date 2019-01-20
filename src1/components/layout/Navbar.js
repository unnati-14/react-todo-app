import React from 'react'
import { Link } from 'react-router-dom'
import SigneInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">MukeshPlan</Link>
                <SigneInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar