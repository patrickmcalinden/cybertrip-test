import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll/modules'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks , NavBtn, NavBtnLink } from './NavbarElements'


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return (
    <>
    <IconContext.Provider value = {{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>  
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>CyberTrip</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItems>
                        <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="about">About</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="services">Services</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="explore">Explore</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="save">Save</NavLinks>
                    </NavItems>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Login</NavBtnLink>
                    <NavBtnLink to='/register'>Register</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar