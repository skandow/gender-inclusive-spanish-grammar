import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector(state => state.user)
  let greeting
    if (user.preferred_pronouns.substr(0, 2) === "he") {
        greeting = "¡Bienvenido"
    } else if (user.preferred_pronouns.substr(0, 3) === "she") {
        greeting = "¡Bienvenida"
    } else {
        greeting = "¡Bienvenide"
    }

  return (
    <div className="profile">
        <div id="profile-info">
        <h2 style={{display: "inline-block", margin: "auto"}}>{greeting}!</h2>
          <img style={{width: "28%", display: "inline-block", float: "left"}} src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Spanish_language_%28main%29.png" alt="Spanish language flag"/>
          <img style={{width: "28%", display: "inline-block", float: "right"}} src="https://upload.wikimedia.org/wikipedia/commons/4/43/Nonbinary_Pride_Flag.png" alt="Spanish language flag"/>
          <div id="profile-details">
            <h3>Username: {user.username}</h3>
            <h3>Preferred Pronouns: {user.preferred_pronouns}</h3>
            {/* <h3>Email Address: {user.email}</h3> */}
          </div>
        </div>
        <div style={{textAlign: "left"}}>
        <p>Spanish, like other gendered languages, can give individuals the power to claim their gender identity via the pronouns AND adjectives they use to describe themselves – unless they identify outside the gender binary.</p>
        <p>Welcome to a comprehensive inclusive website that highlights the affirming and cosmopolitan usage of the modern Spanish language.  Here you find resources for anyone seeking to utilize non-binary gender-neutral rules associated with
            various parts of speech in Spanish, including pronouns, nouns, adjectives, and verbs.
        </p>          
    
        <p>These practices, presented in English, are adapted from rules presented by various sources.</p>
        
        <p>In addition, this website also contains information regarding pronoun and verb usage differences in some of the largest Spanish-speaking countries in the world.  Here you can find resources that will prepare you for using:</p>
    
        <ul>
            <li><i lang="es">vosotros/-as/-es</i> in Spain</li>
            <li><i lang="es-419">vos</i> in Argentina</li>
        </ul>

        <p>So if you’re looking to travel or move to a new country, and you want to find the most effective way to express your gender identity no matter where you are in the Spanish-speaking world, this website is for you!</p>

        </div>
    </div>
  );
}

export default Profile;