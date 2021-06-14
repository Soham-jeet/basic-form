//import logo from './logo.svg';
//import './App.css';
import React,{ useState } from "react";
import "./index.css";

function App() {
  const [values,setValues]=useState({
      firstname:"",
      lastname:"",
      email:"",
      age:"",
      phone:""
  });
  const [submitted,setSubmitted]=useState(false);
  const handleFirsteNameInputChange = (event) => {
    setValues({...values,firstname:event.target.value})
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values,lastname:event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values,email:event.target.value})
  }
  const handleAgeInputChange = (event) => {
    setValues({...values,age:event.target.value})
  }
  const handlePhoneInputChange = (event) => {
    setValues({...values,phone:event.target.value})
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(values.firstname && values.lastname && values.email && values.age && values.phone){
      setValid(true);
    }
    setSubmitted(true);
  }
  const [Valid,setValid]=useState(false);
  return (
    <div class="form-container">
    <form class="register-form" onSubmit={handleSubmit}>
      {submitted && Valid ? <div class="success-message">Success  !! Thanks for registering</div> : null}
      <input
        onChange={handleFirsteNameInputChange}
        value={values.firstname}
        class="form-field"
        type="text"
        placeholder="First Name"
        name="firstName"
      />
      {submitted && !values.firstname ? <span id="first-name-error">Please enter a first name</span> : null}
      <input
        onChange={handleLastNameInputChange}
        value={values.lastname}
        class="form-field"
        type="text"
        placeholder="Last Name"
        name="lastName"
      />
      {submitted && !values.lastname ? <span id="last-name-error">Please enter a last name</span> : null}
      <input
        onChange={handleEmailInputChange}
        value={values.email}
        class="form-field"
        type="text"
        placeholder="E-mail"
        name="email"
      />
      {submitted && !values.email ? <span id="email-error">Please enter a valid email address</span> : null}
      <input
        onChange={handleAgeInputChange}
        value={values.age}
        class="form-field"
        type="text"
        placeholder="Age"
        name="age"
      />
      {submitted && !values.age ? <span id="age-error">Please enter valid age</span> : null}
      <input
        onChange={handlePhoneInputChange}
        value={values.phone}
        class="form-field"
        type="text"
        placeholder="Phone no."
        name="phone no."
      />
      {submitted && !values.phone ? <span id="phn no.-error">Please enter valid phone no.</span> : null}
      <label style={{
        fontSize: 20,
        fontWeight:'bold',
        fontStyle:"inherit"
      }}> Choose Gender :</label>
      <select>
       <option value=""></option> 
      <option value="Male"> Male </option>
      <option value="Female">Female </option>
      <option value="Others">Others </option>
      </select>
      <button class="form-field" type="submit">
        Submit
      </button>
    </form>
  </div>
  )
}

export default App;
