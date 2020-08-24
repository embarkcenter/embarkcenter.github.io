import React, { useState, useEffect } from 'react';
import { Container, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite';
import { Link } from "react-router-dom";

const NavBar = props => {
  const [currentSection, setCurrentSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showTransparent, setShowTransparent] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return (() => {
      window.removeEventListener("scroll", changeColor);
    })
  }, []);

  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setShowTransparent(false);
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setShowTransparent(true);
    }
  }
  return (
    <Navbar color="light" light expand="md" className={css(styles.position, showTransparent ? styles.transparent : styles.white)}>
      <Container className={css(styles.ralewayFont)}>
        <NavbarBrand href="/" className={css(styles.brand)}>
          <img src={require('../assets/images/embark.png')} height={50} width={50} /> EMBARK
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className={css(styles.toggler)}>Menu</NavbarToggler>
        <Collapse isOpen={isOpen} className={css(styles.justifyContentEnd)} navbar>
          <Nav navbar>
            <NavItem className={css(styles.navItem)}>
              <NavLink tag={Link} to="/#services">Services</NavLink>
            </NavItem>
            <NavItem className={css(styles.navItem)}>
              <NavLink tag={Link} to="/#testimonials">Testimonials</NavLink>
            </NavItem>
            <NavItem className={css(styles.navItem)}>
              <NavLink tag={Link} to="/#contact" style={{color: 'orange'}}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

const styles = StyleSheet.create({
  position: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 15,
    paddingBottom: 10,
    zIndex: 100
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  ralewayFont: {
    fontFamily: 'Raleway, sans-seriff',
  },
  white: {
    backgroundColor: 'white'
  },
  brand: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    fontSize: 28,
  },
  toggler: {
    borderColor: 'transparent',
    borderWidth: 0,
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  navItem: {
    paddingLeft: 10,
    paddingRight: 10,
  }
})

export default NavBar;