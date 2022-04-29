import React , {useEffect, useState} from 'react'
import Video from '../../video/video2.mp4'
import { HeroContainer, HeroBg, VideoBg , HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowFoward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonScrollElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
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

  return (
      <HeroContainer id='home'>
          <HeroBg>
              <VideoBg autoPlay={true} loop muted={true}  src={Video} type='video/mp4' />
          </HeroBg>
          <HeroContent>
            <HeroH1>CyberTrip</HeroH1>
            <HeroP>
                We make planning a vacation as easy as possible...
            </HeroP>
            <HeroBtnWrapper>
                <Button smooth={true} duration={500} spy={true} exact='true' to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary ='true' dark ='true'> Learn more {hover ? <ArrowFoward /> : <ArrowRight />}</Button>
            </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
      

  )
}

export default HeroSection
