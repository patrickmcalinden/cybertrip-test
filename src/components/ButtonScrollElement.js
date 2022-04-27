import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
// import {Link as LinkR} from 'react-router-dom'

//Used Ract Router to give user a chance to visit other pages by clicking info section button ; will expand with more pages that can be navigated to

export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary}) => (primary?  'linear-gradient(to bottom right, #386FA4 , #5290cc)' : '#59d8a1')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606':'#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px':'16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    transform: all 0.2 ease-in-out;
    color: white;
    text-decoration: none;

    &:hover{
        transform: all 0.2 ease-in-out;
        background: ${({primary}) => (primary ?  '#fff' : 'linear-gradient(to bottom right, #59d8a1 , #5290cc)')};
        color: ${({primary}) => (primary ?  'black' : 'white')};
    }


`