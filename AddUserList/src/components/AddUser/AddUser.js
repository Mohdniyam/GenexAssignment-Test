import React,{useState} from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import classes from '../UI/Card.module.css';
import Wrappers from '../Helpers/Wrappers';



export default function AddUser(props) {
    const[enteredUsername, setEnteredUsername] = useState('');
    const[enteredAge, setEnteredAge] = useState('');
    const[error, setError]=useState();

    const addUserChangeHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
          setError({
            title: 'Invalid username',
            message: 'Please enter a valid username and age (non-empty values).'
          })
            return;
        }
        if(+enteredAge < 1){
          setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (>0)'
          })
          return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }
    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const ageHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const errorHandler = () => {
      setError(null);
    }

  return (
    <Wrappers>
    {error && <ErrorModel title ={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className = {classes.input}>
    <form onSubmit={addUserChangeHandler}>
    <label htmlFor='Username'>Username</label>
    <input id='username' type='text' value={enteredUsername} onChange={usernameHandler}/>
    <label htmlFor='age'>Age (Year)</label>
    <input id='age' type='number' value={enteredAge} onChange={ageHandler}/>
    <Button type='submit'>Add User</Button>
  </form>
  </Card>
  </Wrappers>
  )
}
