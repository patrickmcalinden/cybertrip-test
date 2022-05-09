import React, { useState, useEffect } from 'react'
import { Container, FormWrap, Icon, Form, FormH1, FormLabel, FormInput, FormButton, TextH2, H1Wrapper, EmailIcon, PasswordIcon, DivButton, FormatError} from './SignInElements'
import axios from 'axios';


// const passwordRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
const REGISTER_URL ='http://localhost/php_program/login.php'
const SignIn = () => {

  const identityValues = {email: '' , password: ""};
  const [values, setValues] = useState(identityValues);
  const [formErrors, setFormErors] = useState({});
  const [isSumbit, setIsSubmit] = useState(false);
 

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
    console.log(values)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErors(validate(values))
    setIsSubmit(true);
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  try{
    const response = await axios.post(REGISTER_URL, JSON.stringify({identityValues}), {
      headers: {'Content-Type': 'applications/json'},
      withCredentials: true
    });
    console.log(response.data);
  } catch (err) {
    if (!err?.response){
      console.log('error')
    }
  }
  }

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSumbit) {
      console.log(values)
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {}
    const regex = /^\S+@\S+\.\S+$/;

    if (!values.email) {
      errors.email = "Email is required!" 
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid!" 
    }
    //can add more validation
    if (!values.password) {
      errors.password = "Password is required!" 
    } else if (values.password.length < 2) {
      errors.password = "Enter a password!"
    }
    return errors;
  }

  
  return (
    <>
    <Container >
        <Icon to='/cybertrip-test'>CyberTrip</Icon>
        
        <FormWrap>
              <H1Wrapper>
                <FormH1>Sign in</FormH1>
              </H1Wrapper>
              <Form onSubmit={handleSubmit}>
                    <FormLabel htmlfor='for'>Email <EmailIcon/> </FormLabel>
                    <FormInput name='email' type='email' required placeholder='jimmysmith@gmail.com' value={ values.email} onChange={handleChange}/>
                    <FormatError> {formErrors.email}</FormatError>
                    <FormLabel htmlfor='for'>Password <PasswordIcon/></FormLabel>
                    <FormInput name='password'type='password' required placeholder='*********' value={ values.password} onChange={handleChange}/>
                    <FormatError> {formErrors.password}</FormatError>
                    <DivButton>
                      <FormButton type= 'sumbit'>{Object.keys(formErrors).length === 0 && isSumbit ? 'Success' : 'Sumbit'}</FormButton>              
                    </DivButton>
                </Form>
              <TextH2 to='/register'>Create New Account</TextH2>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignIn