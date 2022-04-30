import React from 'react'
import { Container, FormWrap, Icon, Form, FormH1, FormLabel, FormInput, FormButton, TextH2, H1Wrapper, Left, Right, ButtonDiv, TextDiv, FormSelect} from './RegisterElements'


const Register = () => {
  return (
    <>
    <Container >
          <Icon to='/cybertrip-test'>CyberTrip</Icon>
          <FormWrap>
                <H1Wrapper>
                  <FormH1>Register</FormH1>
                </H1Wrapper>
                <Form action ='#'>
                    <Left>
                        <FormLabel htmlfor='for'>First Name</FormLabel>
                        <FormInput type='FirstName' required placeholder='Hugh' />
                        <FormLabel htmlfor='for'>Last Name</FormLabel>
                        <FormInput type='LastName' required placeholder='Mungus' />
                        <FormLabel htmlfor='for'>Email</FormLabel>
                        <FormInput type='emial' required placeholder='atblank@gmail.com' />
                        <FormLabel htmlfor='for'>Password</FormLabel>
                        <FormInput type='password' required placeholder='*********' />
                        <FormLabel htmlfor='for'>Date of Birth</FormLabel>
                        <FormInput type='date'/>
                        <FormLabel htmlfor='for'>Gender</FormLabel>
                        <FormSelect type='select' selected required placeholder='Select One'>
                              <option value="NULL" disabled selected>Select One...</option>
                              <option value="MALE">MALE</option>
                              <option value="FEMALE">FEMALE</option>
                              <option value="OTHER">OTHER</option>
                        </FormSelect>
                      </Left>
                      <Right>
                            <FormLabel htmlfor='for'>Phone Number</FormLabel>
                            <FormInput type='number' required placeholder='777-777-7777' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                            <FormLabel htmlfor='for'>Home Airport</FormLabel>
                            <FormInput type='text' required placeholder='Aita Code' />
                            <FormLabel htmlfor='for'>Trip Budget</FormLabel>
                            <FormInput type='text' required placeholder='5000' />
                            <FormLabel htmlfor='for'>Departure Date</FormLabel>
                            <FormInput type='date'/>
                            <FormLabel htmlfor='for'>Return Date</FormLabel>
                            <FormInput type='date'/>
                                <ButtonDiv>
                                    <FormButton type= 'sumbit'>Sumbit</FormButton>
                                </ButtonDiv>
                                <TextDiv>
                                    <TextH2 to='/signin'>Sign In</TextH2>
                                </TextDiv>
                      </Right>
                </Form>
          </FormWrap>
    </Container>
    </>
  )
}

export default Register