import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom">
        <div className="container">
            <a className="navbar-brand text-white" href="#"> 
            <i className="bi bi-journal-bookmark-fill me-2"></i>
             BOOKSTORE   </a>
            <button className="navbar-toggler" type="button" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <Link className="nav-item nav-link active text-white" to="/" >
                             Home
                        </Link>
                        <Link className="nav-item nav-link text-white" to="/books" >                          
                            Books
                        </Link>
                                  
                        <Link className="nav-item nav-link text-white" to="/addbooks" >                          
                           Add Books
                        </Link>

                    </ul>
            </div>
        </div>
  </nav>
 )
}

export default Navbar;