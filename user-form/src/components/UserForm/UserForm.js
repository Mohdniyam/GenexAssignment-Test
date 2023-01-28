import React, { useState } from "react";
import "./UserForm.css";

export default function UserForm(props) {
  const [userData, setUserData] = useState({
    enteredEmail: "",
    enteredPassword: "",
    enteredFirstName: "",
    enteredLastName: "",
    enteredRadioButton: "",
    enteredSelected: "",
    enteredCheckbox: "",
  });

  const handleChangeEmail = (event) => {
    setUserData({
      ...userData,
      enteredEmail: event.target.value,
    });
  };
  const handleChangePassword = (event) => {
    setUserData({
      ...userData,
      enteredPassword: event.target.value,
    });
  };
  const handleChangeFirstName = (event) => {
    setUserData({
      ...userData,
      enteredFirstName: event.target.value,
    });
  };
  const handleChangeLastName = (event) => {
    setUserData({
      ...userData,
      enteredLastName: event.target.value,
    });
  };
  const handleRadioButton = (event) => {
    setUserData({
      ...userData,
      enteredRadioButton: event.target.value,
    });
  };
  const handleOptionSelect = (event) => {
    setUserData({
      ...userData,
      enteredSelected: event.target.value,
    });
  } 
    const handleChangeCheckedBox = (event) => {
      setUserData({
        ...userData,
        enteredCheckbox: event.target.value,
      });
    };
    //connect with Firebase
    const submitData = async (event) => {
      const {
        enteredEmail,
        enteredPassword,
        enteredFirstName,
        enteredLastName,
        enteredRadioButton,
        enteredSelected,
        enteredCheckbox,
      } = userData;
      const res = fetch(
        "https://registrationform1-7142a-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          Headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            enteredEmail,
            enteredPassword,
            enteredFirstName,
            enteredLastName,
            enteredRadioButton,
            enteredSelected,
            enteredCheckbox,
          }),
        }
      );
      if (res) {
        alert("Data received");
      } else {
        alert("Data not received");
      }
    };

    return (
      <div className="container">
        <form method="POST">
          <h1>Responsive Registration Form</h1>
          <input
            type="email"
            className="email"
            onChange={handleChangeEmail}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            placeholder="Paaword"
            onChange={handleChangePassword}
          />
          <br />
          <input
            type="password"
            placeholder="Re-Type Paaword"
            onChange={handleChangePassword}
          />
          <br />
          <input
            type="name"
            placeholder="First Name"
            className="FirstName"
            onChange={handleChangeFirstName}
          />
          <input
            type="name"
            placeholder="Last Name"
            className="LastName"
            onChange={handleChangeLastName}
          />
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            placeholder="Last Name"
            onChange={handleRadioButton}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            placeholder="Last Name"
            onChange={handleRadioButton}
          />
          <label>Female</label>
          <br />
          <select onChange={handleOptionSelect}>
            <option >India</option>
            <option >Pakistan</option>
            <option >Sri-Lanka</option>
          </select>
          <br />
          <input type="checkbox" onChange={handleChangeCheckedBox} />
          <label>I agree with terms and condition</label>
          <br />
          <input type="checkbox" onChange={handleChangeCheckedBox} />
          <label>I want to receive the newsletter</label>
          <br />
          <button type="submit" onClick={submitData}>
            Registration
          </button><br/>
        <button onClick={()=> props.onFormSwitch('login')}>Don't have an account? Registed here</button>
        </form>
      </div>
    );
}
