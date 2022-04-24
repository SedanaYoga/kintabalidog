import Link from 'next/link'
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg='light' className='p-0 m-0' expand='lg'>
      <Container>
        <Link href='/'>
          <a className='nav-brand'>
            <img role='button' src='/images/logo.png' alt='logo' width='60px' />
          </a>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav '>
          <Nav className='me-auto w-100 d-flex justify-content-between'>
            <div className='d-flex flex-lg-row flex-column flex-grow-1 justify-content-end'>
              <Link href='/'>
                <a className='nav-link'>home</a>
              </Link>
              <Link href='/aboutus'>
                <a className='nav-link'>about us</a>
              </Link>
              <Link href='/browse'>
                <a className='nav-link'>browse</a>
              </Link>
            </div>
            <div className='d-flex flex-lg-row flex-column flex-grow-1 justify-content-end'>
              <Link href='/login'>
                <a className='nav-link'>login</a>
              </Link>
              <Link href='/register'>
                <a className='nav-link'>register</a>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
