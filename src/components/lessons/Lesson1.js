import React from 'react'
import { Link } from 'react-router-dom'

function Lesson1() {
    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
          <h1>Pronouns</h1>
          <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
          <p>Pronouns are extremely important both in the Spanish language and in affirming one’s gender identity.</p>  
        <p>There are four topics related to pronoun usage in Spanish grammar:</p>  
        
        <ul>
            <li>Subject Pronouns</li>
            <li>Object Pronouns</li>
            <li>Reflexive Pronouns</li>
            <li>Possessive Pronouns</li>
        </ul>

        <p>Consider the following sentence, which contain examples of all four of these types of pronouns:</p>
        <p className="example">Even though the book is <em>yours</em>, <em>I</em> want Carlos to give <em>it</em> to <em>me</em> <em>himself</em>.</p>
        <p>Let's look at these pronouns more closely:</p>
        <dl>
            <dt><strong>Subject Pronouns</strong></dt>
            <dd>Subject pronouns are used to tell who is doing the action in a particular sentence.  In this example, <em>I</em> is a subject pronoun because it tells who is doing the action in the sentence (want).</dd>
            <dt><strong>Object Pronouns</strong></dt>
            <dd>Object pronouns are used to tell who is receiving the action in a particular sentence, either directly or indirectly.  The Spanish language actually has several subcategories of this type of pronoun:
                <ul>
                    <li>Direct Object Pronouns</li>
                    <li>Indirect Object Pronouns</li>
                    <li>Pronouns with Prepositions</li>
                    <li>Pronouns with "with"</li>
                </ul>
                however, the English language mainly deals with one blanket type.  In this example, both <em>it</em> and <em>me</em> are object pronouns.</dd>
            <dt><strong>Reflexive Pronouns</strong></dt>
            <dd>Reflexive pronouns are used to emphasize that a person completes an action to, for, or by their own doing.  In English, they always include some form of the word "self," so in this sentence, the reflexive pronoun is <em>himself</em>.  As we will see, reflexive pronouns are used somewhat different in Spanish compared to their English counterparts.</dd>
            <dt><strong>Possessive Pronouns</strong></dt>
            <dd>Possessive pronouns replace an object that belongs to someone.  In this sentence, the possessive adjective is <em>yours</em>.</dd>    
        </dl>
        <p>Now that we have an understanding of how our preferred pronouns work in English, let's begin to explore 
            their Spanish counterparts.  We'll begin with Subject Pronouns as these are connected to our verbs and 
            are probably the easiest to convert from English to Spanish.
        </p>
          </div>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/quizzes/1">Take Quiz!</Link>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/2">Next Lesson: Spanish Subject Pronouns →</Link>
      </div>
    );
  }
  
  export default Lesson1;