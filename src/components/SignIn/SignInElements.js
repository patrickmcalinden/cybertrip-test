import styled from "styled-components";
import { Link } from "react-router-dom";
import {MdEmail, MdPassword} from 'react-icons/md'
import Image from '../../images/login.jpeg'

export const Container = styled.div`
    min-height: 100vh;
    /* position: fixed; Causes too many issues for it to be worth it! */
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    background-image:  url(${Image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 80%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 0%);
    }
`

export const Icon = styled(Link)`
    font-weight:700;
    font-size: 5rem;
    color: white;
    z-index: 5;
    text-decoration: none;
    margin-bottom: 1em;

    &:hover {
        color: #5290cc;
    }

    @media screen and (max-width: 500px) {
        font-size: 3rem;
    }

`

export const FormWrap = styled.div`
    z-index:1;
    background-color: #fff;
    padding-bottom: 4em;
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    border-radius: 10px;

    @media screen and (max-width: 500px) {
        max-width: fit-content;
        padding: 0em 4em 4em 4em;

    }
    @media screen and (max-width: 420px) {
        width: fit-content;
        padding: 0em 2em 3em 2em;
        margin: 0 1em 4 1em;
    }   
    @media screen and (max-width: 350px) {
        width: fit-content;
        padding: 0em 1.2em 2.25em 1.2em;
        margin: 0 1.5em 0 1.5em;
    }   
    @media screen and (max-width: 300px) {
        width: fit-content; 
        padding: 0em 2.2em 2.25em 2.2em;
        margin: 0 2.5em 0 2.5em;
    }   
    /* can be changed for better styling (media query) */
    @media screen and (max-height: 800px) {
        margin-bottom: 1em
    }   

`

export const H1Wrapper = styled.div`
    display: flex;
    justify-content: center;

`

export const FormH1 = styled.h1`
    margin: .85em;
    font-size: 2.75rem;
    border-bottom: 2px solid #133C55;

    @media screen and (max-width: 530px) {
        font-size: 2.35rem;
    }
    @media screen and (max-width: 425px) {
        font-size: 2.15rem;
    }
    
    @media screen and (max-width: 374px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 350px) {
        font-size: 1.5rem;
    }   

`

export const Form = styled.form`
    min-width: 280px;

    @media screen and (max-width: 350px) {
        min-width: 200px;
    }   

`

export const FormLabel = styled.div`
    font-size: 1.5rem;
    margin-bottom: .2em;
    font-weight: bold;
    display: flex;
    justify-content: space-between ;

    @media screen and (max-width: 530px) {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 350px) {
        font-size: 1rem;
    }   
    
`
export const FormInput = styled.input`
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
    margin-bottom: 1em;
    padding-left: 2px;
    height: 50px;
    font-size: medium;

    &::placeholder{
        color: gray;
    }

    @media screen and (max-width: 350px) {
        font-size: .9rem;
    }   

`
export const FormatError = styled.p`
        color: red;
        margin-bottom: .5em;

`

export const DivButton = styled.div `
    display: flex;
    justify-content: center;

`
export const FormButton = styled.button`
    border-radius: 10px;
    background-image: linear-gradient(to bottom right, #386FA4 , #5290cc);
    background-size: 200%;
    padding: 10px 22px;
    color: white;
    width: 50%;
    justify-self: center;
    height: 40px;
    border:none;
    outline:none;
    font-size: .85em;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-position: right;
        background-size: 100%;
    }
`  

export const TextH2 = styled(Link)`
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
    margin-top: 1em;
    margin-bottom: -1em;
    cursor: pointer;
    color: black;
    
    &:hover {
        color: #5290cc;
    }
    
`

// Buttons
export const EmailIcon =styled(MdEmail)`
    
`
export const PasswordIcon =styled(MdPassword)`
    
`