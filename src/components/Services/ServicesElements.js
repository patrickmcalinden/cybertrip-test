import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 1300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#133C55 , #101522);


    @media screen and (max-width: 768px) {
        height: fit-content;
        padding-bottom: 50px;

    }
`
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2.2rem;
    }
    @media screen and (max-width: 768px) {
        margin-top: 64px;

    }
`
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    padding: 0 50px;
    gap: 3rem;

    @media screen and (max-width: 1000px) {
        grid-template-rows: 1fr 1fr 1fr;

    }
    @media screen and (max-width: 660px) {
        padding: 0 20px;
        gap: 1.5em;

    }
    @media screen and (max-width: 480px) {
        gap: 1.5em;

    }
`
export const ServiceCard = styled.div`
    background-image: linear-gradient(to bottom right, #F0F2F8 , #e4faff);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 2.5em;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    width: auto;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    
    @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;
        max-height: fit-content;

        
    }

`
export const ServiceInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;

`
export const ServicesH2 = styled.h2`
    font-size: 2.2rem;
    margin-bottom: 20px;
    margin-top: -20px;

    @media screen and (max-width: 768px) {
        font-size: 2em;
        
    }
    @media screen and (max-width: 480px){
        font-size: 1.75rem;
    }
`
export const ServicesP = styled.p`
    font-size: 1.35rem;
    text-align: left;

    @media screen and (max-width: 768px){
        font-size: 1.15rem;
        max-width: fit-content;
    }  

`
export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    max-height: 235px;

    @media screen and (max-width: 680px) {
        max-height: 150px;
    }
`

export const ServicesIcon = styled.img`
    

`