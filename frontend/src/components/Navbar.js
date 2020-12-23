import React from 'react'
import logo from "./pics/logo.png"

const Navbar = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light bg-white">
                <img href="#" src={logo} className="navbar-brand" alt="logo" style={{ width: "140px" }}></img>
                <div className="search col-md-3">
                    <input type="search" placeholder="..ابحث عن منتج"></input><i class="fas fa-search"></i>
                </div>
                <div className="col-md-4 cash">
                    <button>الحساب : 0دينار</button>
                </div>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  nav-list col-md-4" id="navbarMenu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a href="#" className="nav-link"> 0788226566 <i class="fas fa-phone"></i></a></li>
                        <li className="nav-item"><a href="#" className="nav-link"> عربتي<i class="fas fa-shopping-cart"></i></a></li>
                        <li className="nav-item"><a href="#" className="nav-link">اتصل بنا <i class="fas fa-file-signature"></i></a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                                حسابي
                            </a>
                            <div class="dropdown-menu-right dropdown-menu" >
                                <a class="dropdown-item" href="#">تسجيل دخول</a>
                                <a class="dropdown-item" href="#">انشاء حساب</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
