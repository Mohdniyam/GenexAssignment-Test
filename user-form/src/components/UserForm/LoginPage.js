import React, {useState} from 'react'
import './LoginPage.css';

export default function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, SetPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    const handleChange = () => {
     alert("Login success");
     
    }
  return (
    <div className='container'>
    <div className='box'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <br/>
        <input type="email" placeholder='youremail@gmail.com' id='email' name='email' value= {email} onChange={(event)=>{
          setEmail(event.target.value);
        }}/>
        <br/>
        <label htmlFor='password'>Password</label>
        <input type="password" placeholder='******' id='password' name='password' value={password} onChange={(event)=>{
          SetPassword(event.target.value);
        }}/>
        <button type="submit" onClick={handleChange}>Log In</button>
        <br/>
        <button onClick={()=> props.onFormSwitch('Registered')}>Don't have account Registed here</button>
      </form>
      </div>
      </div>  

  )
}
