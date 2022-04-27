import React, {useState} from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap , Img, ArrowFoward, ArrowRight} from './InfoElements'
import {Button} from '../ButtonRouterElement'


const InfoSection = ({lightBg, id, imgStart, lightText, topLine, headline, darkText, description, buttonLabel, img, alt, dark, dark2, primary, toLink}) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}> 
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button smooth={true} duration={500} spy={true} exact="true" offsett={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ?  1 : 0}to={toLink} onMouseEnter={onHover} onMouseLeave={onHover}> {buttonLabel}{hover ? <ArrowFoward /> : <ArrowRight />}</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection