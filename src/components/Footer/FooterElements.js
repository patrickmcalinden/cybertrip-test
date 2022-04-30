import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import styled from "styled-components";


export const FooterContainer = styled.footer`
    background-color: #101522;
`
export const FooterWrap = styled.div`
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    
`

export const FooterLinksContainer = styled.div`
    /* display: flex;
    justify-content: center; */

    @media screen and (max-width: 820px) {
        padding-top: 5px;
    }
        
`

export const FooterLinksWrapper = styled.div`
    display: flex;
    max-width: 500px;
    /* justify-content: center; */

    @media screen and (max-width: 820px) {
       /* flex-direction: row; */
    }
`
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    margin: 16px;
    text-align: center;
    width: fit-content;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
       margin: 0;
       padding: 10px;
       width: 100%;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 16px;
    margin-bottom: 16px;
    
`
export const FooterLink = styled(LinkS)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.4rem;
    font-size: 14px;
    cursor: pointer;
    

    &:hover{
        color: #59d8a1;
        transition: 0.3s ease-out;
    }

`
export const FooterLinkR = styled(LinkR)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.4rem;
    font-size: 14px;
    cursor: pointer;
    
    

    &:hover{
        color: #59d8a1;
        transition: 0.3s ease-out;
    }
`

export const FooterBottom = styled.section`
    max-width: fit-content;

`
export const FooterBottomWrap = styled.div`
    display: flex;
    justify-content: center;
    gap:4em;
    align-items: center;
    max-width: 1100px;


    @media screen and (max-width: 820px) {
       
    }
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

