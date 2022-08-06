import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import '../../Style/header.css';

const navLink = [
    {
        path: "/home",
        display: "Home"
    },
    {
        path: "/about",
        display: "About"
    },
    {
        path: "/cars",
        display: "Cars"
    },
    {
        path: "/blogs",
        display: "Blog"
    },
    {
        path: "/contact",
        display: "Contact"
    },


]

const Header = () => {
    const menuRef = useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle("menu_active")
    return (
        <header className='header'>

            {/* header top */}
            <div className="header_top">
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='6'>
                            <div className="heade_top_left">
                                <span>Need Help?</span>
                                <span className="header_top_help">
                                    <i className="ri-phone-fill"></i>
                                    <span>+1-202-555-0149</span>
                                </span>
                            </div>
                        </Col>
                        <Col lg='6' md='6' sm='6'>
                            <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                                <Link to="/" className='d-flex align-items-center gap-1'><i className="ri-login-circle-line"></i> Login</Link>
                                <Link to="/" className='d-flex align-items-center gap-1'><i className="ri-user-line"></i> Register</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* -----Header middle----- */}
            <div className="header_middlle">
                <Container>
                    <Row>
                        <Col lg="4" md="3" sm="3"
                        >
                            <div className="logo">
                                <h1>
                                    <Link to="/home" className='d-flex align-items-center gap-1'>
                                        <i className="ri-car-line"></i>
                                        <span>Rent Car <br />Service</span>
                                    </Link>
                                </h1>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="4">
                            <div className="header_location d-flex align-items-center gap-2">
                                <span><i className="ri-earth-line"></i></span>
                                <div className="header_location_content">
                                    <h4>Bangladesh</h4>
                                    <h6>Hili,Dinajpur</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="4">
                            <div className="header_location  d-flex align-items-center gap-2">
                                <span><i className="ri-time-line"></i></span>
                                <div className="header_location_content">
                                    <h4>Sunday to Friday</h4>
                                    <h6>10am - 7pm</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg="2" md="3" sm="0" className='text-end'>
                            <button className="header_btn btn d-flex align-items-center justify-content-end ">
                                <Link to="/contact">
                                    <i className="ri-phone-line"></i>
                                    Request a Call
                                </Link>

                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* main navigation bar */}

            <div className="main_navbar">
                <Container>
                    <div className="navigation_wrapper d-flex align-items-center justify-content-between">
                        <span className="mobile_menu">
                            <i className="ri-menu-line" onClick={toggleMenu}></i>
                        </span>
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu">
                                {
                                    navLink.map((item, index) => (
                                        <NavLink className={navClass => navClass.isActive ? 'nav_active nav_item' : 'nav_item'} to={item.path} key={index}>{item.display}</NavLink>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="nav_right">
                            <div className="search_box">
                                <input type="text" placeholder='Search' />
                                <span><i className="ri-search-line"></i></span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
};

export default Header;