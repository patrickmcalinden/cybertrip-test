import styled from "styled-components";
import { Link } from "react-router-dom";
import image from '../../images/login.jpeg'

export const Container = styled.div`
    min-height: 100vh;
    /* position: fixed; Causes too many issues for it to be worth it! */
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    background-image:  url(${image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    :before{
        content: '';
        position: absolute; //Use to make sure gradient covers the background no matter how large vp is
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 80%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 0%);
    }
    
`

export const FormWrap = styled.div`
    z-index:2;
    background-color: white;
    max-height: fit-content;
    border-radius: 10px;
    justify-self: center;
    border-width: 5px;
    /* padding-bottom: 4em; */ //removed since it casued weird issue with error message popping up
    width: 550px;
    padding: 0em 3em 3em 3em;
    margin: 0 1em 0 1em;

    @media screen and (max-width: 650px) {
        width: fit-content;
        padding: 0em 3em 3em 3em;
        margin: 0 1em 0 1em;
    }   
    @media screen and (max-width: 420px) {
        width: fit-content;
        padding: 0em 2em 2em 2em;
        margin: 0 1em 0 1em;
    }   
    @media screen and (max-width: 350px) {
        width: fit-content;
        padding: 0em 1.2em 1.2em 1.2em;
        margin: 0 1em 0 1em;
    }   
    /* can be changed for better styling (media query) */ //max height was 800px last changed to 1000 for border at the bottom when viewing on laptop
    @media screen and (max-height: 1000px) {
        margin-bottom: 1em
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
export const Form = styled.form`
    display: flex;
    column-count: 2;
    column-gap: 1.5em;
    justify-content: center;

`
export const Left = styled.div`
    width: 50%;
    @media screen and (max-width: 420px) {
        max-width: fit-content;
    }

`
export const Right = styled.div`
    width: 50%;
    @media screen and (max-width: 420px) {
        max-width: fit-content;
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
export const FormLabel = styled.li`
    list-style: none;
    font-size: 1.5rem;
    margin-bottom: .2em;
    font-weight: bold;
    
    @media screen and (max-width: 530px) {
        font-size: 1rem;
    }
    @media screen and (max-width: 350px) {
        font-size: .85rem;
    }   

`
export const FormSelect = styled.select` // Might have to make changes to this for dropdown on mobile devices
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
    margin-bottom: 1em;
    padding-left: 2px;
    height: 50px;
    font-size: medium;
    background-color: white;
    color: black;
    
    &:focus{
        color: black;
    }
    
    &::placeholder{
        color: gray;
    }
    @media screen and (max-width: 350px) {
        font-size: .8rem;
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
    background: white;
    
    &::placeholder{
        color: gray;
    }
    @media screen and (max-width: 350px) {
        font-size: .8rem;
    }   

`
export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;

`
export const FormButton = styled.button`
    border-radius: 10px;
    background-image: linear-gradient(to bottom right, #386FA4 , #5290cc);
    background-size: 200%;
    padding: 10px 22px;
    color: white;
    margin-top: 1em;
    min-width: 50%;
    height: 40px;
    border:none;
    outline:none;
    font-size: .85em;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-position: right;
    }

    @media screen and (max-width: 530px) {
        margin-top: .5em
    }
`  
export const TextDiv = styled.div`
    display: flex;
    justify-content: center;
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

    @media screen and (max-width: 530px) {
        margin-top: .5em
    }
    
`

export const FormatError = styled.p`
        color: red;
        margin-bottom: 16px;

`