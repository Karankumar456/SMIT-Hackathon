import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import EhsaanSaylani from '../assests/EhsaanSaylani.jpeg'
import ehsaas from '../assests/ehsaas.jpeg'
import slider2 from '../assests/slider2.png'

import '../App.css';
import NavbarTop from './navbar'


function Home() {
  return (
    <div>
      <NavbarTop />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={EhsaanSaylani}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ehsaas}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home