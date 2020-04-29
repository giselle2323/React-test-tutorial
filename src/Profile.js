import React from 'react';

const cardWidth = {
  width: '20rem'
}

const Profile = ({ user }) => {
  return (
    <React.Fragment>
      <div key={user.login.username} className="card" style={cardWidth}>
        <p>My name: {user.name.first}</p>
        <div>
          <img src={user.picture.medium} alt={user.name.first} />
        </div>
        <p>Location: {user.location.city}</p>
        <p>Email: {user.email}</p>
        <hr />
      </div>
    </React.Fragment>
  )
}

export default Profile;
