import React, { useState } from 'react';
import axios from 'axios';
import Profile from './Profile';

const App = ({ url }) => {
  // const [state, setState] = useState({
  //   users: [],
  //   isLoading: true,
  //   error: null
  // });
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')
  const getRandomUser = async () => {
    try {
      const response = await axios.get(url)
      const data = response.data.results;
      console.log(data);
      setUsers(data);
      setIsLoading(false)
    } catch (error) {
      setError(error);
    } 
  }
  const buttonText = 'Get Users';
  return (
    <React.Fragment>
      <div className="container">
        <h1>Hello there, I am Aminat.</h1>
        <br />
        <button data-testid="get-user-button" onClick={getRandomUser}> {buttonText} </button>
      </div>
      <div className="row" >

        {!isLoading ? (
          users.map(user => {
            return (
              <Profile data-testid="resolved" key={user.login.username} user={user} />
            );
          })
        ) : (
            <p data-testid="loading">Click to button to get users</p>
          )}
         
      </div>
    </React.Fragment>
  )

}

export default App;
