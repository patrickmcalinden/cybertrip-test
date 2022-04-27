import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav? '#133C55' : 'transparent')};
    height: 80px;
    margin-top:-80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    position: sticky;
    top:0;
    z-index: 10;


    @media screen and (max-width: 960px){
        transition: 0.8 all ease;

}
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index:1;
    width: 100%;
    padding: 0 24px;
    max-width: 1500px;
`

export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.75rem;
    display: flex;
    align-items: center;
    margin-left: 0px;
    font-weight: bold;
    text-decoration: none;
`
export const MobileIcon = styled.div`
    display:none;

    @media screen  and (max-width: 978px) {
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;    
        color: white;
    }
`
export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    margin-right: -6rem;

    @media screen and (max-width: 978px){
        display:none;

    }
`
export const NavItems = styled.li`
    height:80px;

`
export const NavLinks = styled(LinkS)`
    color: white;
    display:flex;
    align-items: center;
    justify-content:center;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #84D2F6;
    }

`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    gap:1em;

    @media screen and (max-width: 978px) {
        display: none;        
    }

`

export const NavBtnLink = styled(LinkR)`
    border-radius: 10px;
    background-image: linear-gradient(to bottom right, #386FA4 , #5290cc);
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    text-align:center;
    outline: none;
    border: none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width: 103.58px;

    &:hover {
        transition: all 0.15s ease-in-out;
        background: white;
        color: black;

    }


`