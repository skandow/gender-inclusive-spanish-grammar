import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector(state => state.user)
  console.log(user)
  let greeting 
  if (user.preferred_pronouns.substr(0, 2) === "he") {
      greeting = "¡Bienvenido "
  } else if (user.preferred_pronouns.substr(0, 3) === "she") {
      greeting = "¡Bienvenida "
  } else {
      greeting = "¡Bienvenide "
  }

  return (
    <div className="profile">
        <h1>{greeting} {user.username}!</h1>
        <h2>Preferred Pronouns: {user.preferred_pronouns}</h2>
    </div>
  );
}

export default Profile;