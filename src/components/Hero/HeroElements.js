import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;


    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 80%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 0%);
        z-index:2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow: hidden;

`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent =styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 5rem;
    text-align: center;
    /* text-shadow: 5px 5px 10px black; */
    text-shadow: -2px 0 black, 0 2px black, 1px 0 black, 0 -1px black;

    @media screen and (max-width: 768px){
        font-size: 3rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 2.5rem;
        
    }
`
export const HeroP = styled.div`
    margin-top: 24px;
    color: #fff;
    font-size: 2rem;
    text-align:center;
    max-width: 450px;
    text-shadow: -2px 0 black, 0 2px black, 1px 0 black, 0 -1px black;

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
        max-width: 350px;
    }
    @media screen and (max-width: 480px) {
        font-size: 1.25rem;
        max-width: 275px;
        
    }

`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const ArrowFoward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;

`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`