import React from 'react'
import {FooterContainer,FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterBottom, FooterBottomWrap, WebsiteRights, FooterLinkR} from './FooterElements'   


const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Learn</FooterLinkTitle>   
                            <FooterLink to='about' smooth={true} duration={500} spy={true}>About</FooterLink>    
                            <FooterLink to='services'smooth={true} duration={500} spy={true}>Services</FooterLink>    
                            <FooterLink to='explore'smooth={true} duration={500} spy={true}>Explore</FooterLink>    
                            <FooterLink to='save'smooth={true} duration={500} spy={true}>Save</FooterLink>  
                    </FooterLinkItems>               
                    <FooterLinkItems>
                        <FooterLinkTitle>Support</FooterLinkTitle>    
                            <FooterLinkR to='/signin'>Contact Us</FooterLinkR>    
                            <FooterLinkR to='/signin'>Terms of Service</FooterLinkR>   
                            <FooterLinkR to='/signin'>Data Policy</FooterLinkR>   
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <FooterBottom>
                <FooterBottomWrap>
                    <WebsiteRights>CyberTrip @ {new Date().getFullYear()} All rights reserved</WebsiteRights>
                </FooterBottomWrap>
            </FooterBottom>
        </FooterWrap>

    </FooterContainer>
  )
}

export default Footer