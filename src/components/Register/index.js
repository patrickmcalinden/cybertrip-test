import React, {useState, useEffect} from 'react'
import { Container, FormWrap, Icon, Form, FormH1, FormLabel, FormInput, FormButton, TextH2, H1Wrapper, Left, Right, ButtonDiv, TextDiv, FormSelect, FormatError} from './RegisterElements'
import axios from 'axios';

const REGISTER_URL ='http://localhost/php_program/login.php'


const Register = () => {
      
  const identityValues = {firstName: '' , lastName: '', email: '',password:'',dateBirth:'',gender:'',phoneNumber:'',aitaCode:'',budget:'',depDate:'',returnDate:''};
  const [values, setValues] = useState(identityValues);
  const [formErrors, setFormErors] = useState({});
  const [isSumbit, setIsSubmit] = useState(false);
 

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});

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
    const passwordRegex= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
    const budgetRegex = new RegExp("^[0-9]*$")

    if (!values.email) {
      errors.email = "Email is required!" 
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid!" 
    }
    if (!values.password) {
      errors.password = "Password is required!" 
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Password: 8 Characters, 1 uppercase letter, 1 lowercase letter & 1 number!"
    }
    if (!values.depDate) {
      errors.depDate = "Date is required!" 
    } else if (values.depDate > values.returnDate ) {
      errors.depDate = "Departure Date cannot be after Return Date!"
    }
    if (!values.budget) {
      errors.depDate = "Please include a budget!" 
    } else if (!budgetRegex.test(values.budget)) {
      errors.budget = "Only use Numbers!"
    }
    return errors;
  }
  return (
    <>
    <Container >
          <Icon to='/cybertrip-test'>CyberTrip</Icon>
          <FormWrap>
                <H1Wrapper>
                  <FormH1>Register</FormH1>
                </H1Wrapper>
                <Form onSubmit={handleSubmit}>
                    <Left>
                        <FormLabel htmlfor='for'>First Name</FormLabel>
                        <FormInput name="firstName" type='FirstName' required placeholder='Jimmy' value={values.firstName} onChange={handleChange}/>
                        <FormLabel htmlfor='for'>Last Name</FormLabel>
                        <FormInput name="lastName" type='LastName' required placeholder='Smith' value={values.lastName} onChange={handleChange}/>
                        <FormLabel htmlfor='for'>Email</FormLabel>
                        <FormInput name="email" type='email' required placeholder='atblank@gmail.com' value={values.email} onChange={handleChange}/>
                        <FormatError> {formErrors.email}</FormatError>
                        <FormLabel htmlfor='for'>Password</FormLabel>
                        <FormInput name="password" type='password' required placeholder='*********' value={values.password} onChange={handleChange}/>
                        <FormatError> {formErrors.password}</FormatError>
                        <FormLabel htmlfor='for'>Date of Birth</FormLabel>
                        <FormInput name="dateBirth" type='date' value={values.dateBirth} onChange={handleChange}/>
                        <FormLabel htmlfor='for'>Gender</FormLabel>
                        <FormSelect name="gender" type='select' required placeholder='Select One' value={values.gender} onChange={handleChange}>
                              <option value="" disabled>Select One...</option>
                              <option value="MALE">MALE</option>
                              <option value="FEMALE">FEMALE</option>
                              <option value="OTHER">OTHER</option>
                        </FormSelect>
                      </Left>
                      <Right>
                            <FormLabel htmlfor='for'>Phone Number</FormLabel>
                            <FormInput name="phoneNumber" type='number' required placeholder='777-777-7777' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={values.phoneNumber} onChange={handleChange} />
                            <FormLabel htmlfor='for'>Home Airport</FormLabel>
                            <FormInput name="aitaCode" type='text' required placeholder='Aita Code' value={values.aitaCode} onChange={handleChange}/>
                            <FormLabel htmlfor='for'>Trip Budget</FormLabel>
                            <FormInput name="budget" type='number' required placeholder='5000' value={values.budget} onChange={handleChange} />
                            <FormatError> {formErrors.budget}</FormatError>
                            <FormLabel htmlfor='for'>Departure Date</FormLabel>
                            <FormInput name="depDate" type='date' value={values.depDate} onChange={handleChange}/>
                            <FormatError> {formErrors.depDate}</FormatError>
                            <FormLabel htmlfor='for'>Return Date</FormLabel>
                            <FormInput name="returnDate" type='date' value={values.returnDate} onChange={handleChange}/>
                                <ButtonDiv>
                                    <FormButton type= 'sumbit'>{Object.keys(formErrors).length === 0 && isSumbit ? 'Success' : 'Sumbit'}</FormButton>
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