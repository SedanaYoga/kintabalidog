import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg='light' className='p-0 m-0' expand='lg'>
      <Container>
        <Navbar.Brand>
          <img src='/images/logo.png' alt='logo' width='60px' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav '>
          <Nav className='me-auto w-100 d-flex justify-content-between'>
            <div className='d-flex flex-lg-row flex-column flex-grow-1 justify-content-end'>
              <Nav.Link>home</Nav.Link>
              <Nav.Link>about us</Nav.Link>
              <Nav.Link>browse</Nav.Link>
            </div>
            <div className='d-flex flex-lg-row flex-column flex-grow-1 justify-content-end'>
              <Nav.Link>login</Nav.Link>
              <Nav.Link>register</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
