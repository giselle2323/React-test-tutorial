import React, { useState } from 'react';
import axios from 'axios';
import Profile from './Profile';


const App = () => {
  // const [state, setState] = useState({
  //   users: [],
  //   isLoading: true,
  //   error: null
  // });
  const [users, setUsers] = useState('')
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')
  const getRandomUser = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=6")
      const data = response.data;
      console.log(data);
      setUsers(data);
      setIsLoading(false)
      console.log(users.results, isLoading);
    } catch (error) {
      setError(error);
    }


  }
  return (
    <React.Fragment>
      <div className="container">
        Hello, there I am Aminat.
        <button onClick={getRandomUser}>Get Users</button>
      </div>
      <div className="row">
        {!isLoading ? (
          users.results.map(user => {
            return (
              <Profile key={user.login.username} user={user} />
            );
          })
        ) : (
            <p>Loading...</p>
          )}
         <p>{error}</p>
      </div>
    </React.Fragment>
  )

}

export default App;

