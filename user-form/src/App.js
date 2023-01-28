import React, { useState } from 'react';
import LoginPage from "./components/UserForm/LoginPage";
import UserForm from "./components/UserForm/UserForm";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
     setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <LoginPage onFormSwitch={toggleForm}/> : <UserForm onFormSwitch={toggleForm}/>
      }
  

    </div>
    
  
  );
}

export default App;
