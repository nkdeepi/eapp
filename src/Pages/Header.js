import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  FormControl,
  Dropdown,
  Badge,
} from "react-bootstrap";
import "./style.css";
import { borderRight } from "@mui/system";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    // <div>

    //     <h2>MOON GODDESS</h2>
    //     <div className='cartsearch'>

    //     <Navbar.Text className="search" >
    //          <FormControl
    //            style={{ width: 500, height: 30 }}
    //             placeholder="Search Products"
    //            // className=",-auto"
    //          ></FormControl>
    //        </Navbar.Text>
    //        <Dropdown alignRight>
    //              <Dropdown.Toggle variant="primary" id="dropdown-basic">
    //                <FaShoppingCart color="white" fontSize="25px" />
    //                {/* <Badge>{10}</Badge> */}
    //              </Dropdown.Toggle>

    //             <Dropdown.Menu style={{ minWidth: 300 }}>
    //               <span style={{ padding: 10 }}>Cart is Empty!!!!</span>
    //             </Dropdown.Menu>
    //            </Dropdown>
    //     </div>
    //     <nav className='header'>

    //     <NavLink to='/'>Home</NavLink>
    //     <NavLink to='/About'>About</NavLink>
    //     <NavLink to='/Category'>Category</NavLink>

    //     </nav>

    // </div>
    <>
      <Navbar bg="primary" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>MOON GODDESS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Text className="search">
              <FormControl
                style={{ width: 500, height: 30 }}
                placeholder="Search Products"
                //  className=",-auto"
              ></FormControl>
            </Navbar.Text>
            <nav class="product">
              <NavLink to="/Home">Featured</NavLink>
              <NavLink to="/About">New</NavLink>
            </nav>
            <Nav className="me-auto">
              <nav className="header">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Category">Products</NavLink>
                <NavLink to="/Login">Login</NavLink>
                <NavLink to="/Registration">Register</NavLink>

              </nav>
              <nav className="cart">
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    <FaShoppingCart color="white" fontSize="25px" />
                    {/* <Badge>{10}</Badge> */}
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ minWidth: 300 }}>
                    <span style={{ padding: 10 }}>Cart is Empty!!!!</span>
                  </Dropdown.Menu>
                </Dropdown>
              </nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
