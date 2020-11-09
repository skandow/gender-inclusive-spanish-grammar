import React from 'react'
import { Link } from 'react-router-dom';

function Lesson18() {

    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
          <h1>The Spanish Negative</h1>
          <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3>Negative Indicative Actions:</h3>
             <p>
                 Up to this point, we've only looked at verbs in their affirmative state, acknowledging that the action takes place.
             </p>
             <p>
                 In order to create the negative form of the present simple, present perfect, or present progressive tenses of the Indicative mood, simply place a <em>no</em>
                 before the verb.
             </p>
             <p className="example">
                 I drink coffee.<br/>
                 <em lang="es">Bebo café.</em><br/>
                 I don't drink coffee.<br/>
                 <em lang="es">No bebo café.</em><br/><br/>
                 I am drinking coffee.<br/>
                 <em lang="es">Estoy bebiendo café.</em><br/>
                 I am not drinking coffee.<br/>
                 <em lang="es">No estoy bebiendo café.</em><br/><br/>
                 I have drunken coffee.<br/>
                 <em lang="es">He bebido café.</em><br/>
                 I have not drunken coffee.<br/>
                 <em lang="es">No he bebido café.</em>
             </p>
             <p>If any of the above verb tenses look unfamiliar, be sure to review them.</p>
             <p>When dealing with pronouns attached to a verb, the use of the negative word must not separate the pronouns from the verb.</p>
             <p className="example"><em lang="es">No lo he leido.</em> - good<br/>
             <em lang="es">Lo no he leido.</em> - incorrect
             </p>
             <h3>The Spanish Double Negative:</h3>
             <p>In the English language, there cannot be two words of negative connotation in the same sentence, because they 
                 would arguably cancel each other out. The sentence:
             </p>
             <p className="example">I don't know nobody.</p>
             <p>Would be considered poor grammar because of the use of both <em>no</em>, and <em>nobody</em> in the same sentence.</p>
             <p>In Spanish, however, not only is the use of the double negative encouraged, but it's typically the default. Consider the
                 acceptable translation of the above example, in which the final word, <em lang="es">nadie</em>, literally translates by itself to <em>nobody</em>.
             </p>
             <p className="example" lang="es">No conozco a nadie.</p>
             <h3>Negative Commands:</h3>
             <p>Polite negative commands are formed in the exact same way as the present indicative:</p>
             <p className="example">Swim in the pool.<br/>
             <em lang="es">Nade en la piscina.</em><br/><br/>
             Don't swim in the pool.<br/>
             <em lang="es">No nade en la piscina.</em><br/><br/>
             Walk here.<br/>
             <em lang="es">Caminen aquí.</em><br/><br/>
             Don't walk here.<br/>
             <em lang="es">No caminen aquí.</em>
             </p>
             <p>
             However, there are actually different forms of informal commands depending on whether the command is positive or negative. A <em>no</em> is still required, but 
             the conjugation of the verb changes.
             </p>
             <p className="example">Swim in the pool.<br/>
             <em lang="es">Nada en la piscina.</em><br/><br/>
             Don't swim in the pool.<br/>
             <em lang="es">No nades en la piscina.</em><br/><br/>
             Walk here.<br/>
             <em lang="es">Camina aquí.</em><br/><br/>
             Don't walk here.<br/>
             <em lang="es">No caminéis aquí.</em>
             </p>
             <p>To form the negative of the singular informal command for both <em lang="es" style={{color: "#f1bf00"}}>tú</em> or <em lang="es" style={{color: "lightskyblue"}}>vos</em>, create the singular formal command and add <em>-s</em>.</p> 
             <p lang="es" style={{color: "#b81140"}}>To create the plural informal command, create the singular formal command, add an accent to the final letter, and 
             add <em>-is</em>.</p>
             <p className="example">Don't speak.<br/>
             <em lang="es">No hables.</em><br/><br/>
             Don't eat that.<br/>
             <em lang="es">No nades en la piscina.</em><br/><br/>
             Walk here.<br/>
             <em lang="es">Camina aquí.</em><br/><br/>
             Don't walk here.<br/>
             <em lang="es">No caminéis aquí.</em>
             </p>
            <p>In the next lesson, we'll look at a special kind of adjectives: possessive adjectives.</p>
          </div>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/quizzes/18">Take Quiz!</Link>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/19">Possessive Adjectives →</Link>
      </div>
    );
  }
  
  export default Lesson18;