import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 sticky-lg-top">
            <Link className="navbar-brand" to='/'>Organ Donation</Link>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="#why">Why Donate?</a></li>
                    <li className="nav-item"><a className="nav-link" href="#how">How It Works</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
          
        </nav>
    )
}

export default Navbar
