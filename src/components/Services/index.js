import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServiceCard, ServicesIcon, ServicesH2, ServicesP, IconWrapper, ServiceInfoWrapper} from './ServicesElements'
import Icon1 from '../../images/trip_Match.svg'
import Icon2 from '../../images/location_Info.svg'
import Icon3 from '../../images/flight_Booking.svg'
const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServiceCard>
                <ServiceInfoWrapper>
                    <ServicesH2>Trip Match</ServicesH2>
                    <ServicesP>We use your profile information to reccomend trips that will spark your interest.</ServicesP>
                </ServiceInfoWrapper>
                <IconWrapper>
                    <ServicesIcon src={Icon1} alt='Couplepicking vacation'/>
                </IconWrapper>
            </ServiceCard>
            <ServiceCard>
                <ServiceInfoWrapper>
                    <ServicesH2>Location Info</ServicesH2>
                    <ServicesP>We dont leave you hanging! We provide you with the most important information regarding your trip's location.</ServicesP>
                </ServiceInfoWrapper>
                <IconWrapper>
                    <ServicesIcon src={Icon2} alt='User getting vacation information'/>
                </IconWrapper>
            </ServiceCard>
            <ServiceCard>
                <ServiceInfoWrapper>
                    <ServicesH2>Flight Booking</ServicesH2>
                    <ServicesP>No need to use another service after picking your destination. You can book your flight on the same screen.</ServicesP>
                </ServiceInfoWrapper>
                <IconWrapper>
                    <ServicesIcon src={Icon3} alt='User booking a flight for vacation'/>
                </IconWrapper>
            </ServiceCard>
        </ServicesWrapper>
    
    </ServicesContainer>

  )
}

export default Services