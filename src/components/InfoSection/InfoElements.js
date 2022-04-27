import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9':'#101522')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
        
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 970px; //originally 860px
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`:`'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }

`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-column: col2;
    
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    
    @media screen and (max-width: 768px){
        text-align: center;
    }  

`
export const TopLine = styled.p`
    color: #386FA4;
    font-size: 1.5em;
    line-height: 16px;
    font-weight: 16px;
    font-weight: 700;
    letter-spacing: 1.4opx;
    text-transform: uppercase;
    margin-bottom: 16px;
    
    @media screen and (max-width: 480px){
        line-height: 20px;
        font-size: 1.3em;
        
    }  

    @media screen and (max-width: 307px){
        line-height: 20px
        
    }  


`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa': '#010606')};

    @media screen and (max-width: 999px){
        font-size: 2.5rem;
        
    }  
    @media screen and (max-width: 480px){
        font-size: 1.8rem;
    }
    
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 1.35rem;
    line-height: 35px;
    color: ${({darkText}) => (darkText ? '#010606':'#fff')};

    @media screen and (max-width: 999px){
        font-size: 1.15rem;
    }  

    @media screen and (max-width: 768px){
        max-width: fit-content;
    }  

`
export const BtnWrap = styled.div`
    display: flex;
    
    @media screen and (max-width: 768px){
        justify-content: center;
    }  

`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;

` 

export const Img = styled.img`
    margin: 0 0 10px 0;
    padding-right: 0;
    
`
export const ArrowFoward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;

`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
` 