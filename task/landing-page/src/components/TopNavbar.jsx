import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const TopNavbar = () => {
    const menuData = [
        {
            path:'/',
            name: "Home"
        },
        {
            path: '/aboutus',
            name: "About Us"
        },
        {
            path: '/contactus',
            name : "Contact Us"
        }
    ]
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className='brand'>Landing Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
                menuData.map((item)=>(
                    <NavLink to={item.path} key={item.name} className='navlink'>
                        <div className="list_item">{item.name}</div>
                    </NavLink>
                ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default TopNavbar