import React from 'react';
import './App.css';
import { useState } from 'react';

const App = () =>{

  const [fullName, setFullName] = useState({
    firstName : '',
    lastName : '',
    email : '',
    mobile : '',
  });

  const inputEvent = (event) =>{
    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue)=>{
      return{
        ...preValue,
        [name] : value,
      }
      /* if(name === 'firstName'){
        return{
          firstName : value,
          lastName : preValue.lastName,
          email : preValue.email,
          mobile : preValue.mobile,
        }
      }else if(name === 'lastName'){
        return{
          firstName : preValue.firstName,
          lastName : value,
          email : preValue.email,
          mobile : preValue.mobile,
        }
      } else if(name === 'email'){
        return{
          firstName : preValue.firstName,
          lastName : preValue.lastName,
          email : value,
          mobile : preValue.mobile,
        }
      }else if(name === 'mobile'){
        return{
          firstName : preValue.firstName,
          lastName : preValue.lastName,
          email : preValue.email,
          mobile : value,
        }
      } */
    })
  }

  const onSubmits = (event) =>{
    event.preventDefault();
    alert('Form Submitted');
  }

  return (
    <>
    <div>
      <form onSubmit={onSubmits}>
        <h1>hii, {fullName.firstName} {fullName.lastName}</h1>
        <p> {fullName.email}</p>
        <p> {fullName.mobile}</p>
        <input type='text' placeholder='Enter your First Name' onChange={inputEvent} name='firstName' value={fullName.firstName}/>
        <input type ='text' placeholder='Enter your last Name' onChange={inputEvent} name='lastName' value={fullName.lastName}/>
        <br/>
        <input type ='email' placeholder='Enter your Email' onChange={inputEvent} name='email' value={fullName.email}/>
        <input type ='number' placeholder='Enter your Mobile' onChange={inputEvent} name='mobile' value={fullName.mobile}/>
        <button type='submit'>Submit</button>
        
        
      </form>
    </div>
    
    </>
  );
}

export default App;
