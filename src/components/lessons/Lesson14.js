import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Copyright from '../containers/Copyright'

function Lesson14() {

    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
            <h1>Prepositional Pronouns</h1>
            <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3>Common Prepositions in Spanish:</h3>
            <p>The pronouns in this category are utilized when prepositions connect verbs to object pronouns. In English, there are several different contexts in which this could occur:</p>
            <p className="example">I am telling this <u>to</u> <em>you</em>.<br/>
                She cooks <u>for</u> <em>him</em>.<br/>
                The book was written <u>by</u> <em>them</em>.</p>
            <p>In general, the above underlined prepositions will translate to Spanish in the following ways:</p>
            <p className="example">to - a<br/>
                for - para<br/>
                by - por</p>
            <p>However, the English preposition <em>for</em> can be translated to <em>para</em> or <em>por</em> depending on context:</p>
            <div className="grid">
                <div className="one box">
                    <p>Use <em lang="es">por</em> as the Spanish preposition for the English equivalent <em>for </em> 
                    in the following cases:</p>
                    <ol>
                        <li>To discuss an exchange of something</li>
                        <li>To discuss the length of time of an activity</li>
                        <li>To discuss a reason for doing something</li>
                    </ol>
                </div>
                <div className="two box">
                    <p>Use <em lang="es">para</em> as the Spanish preposition for the English equivalent <em>for</em> in the following cases:</p>
                    <ol>
                        <li>To discuss the intended recipient of an action</li>
                        <li>To discuss deadlines</li>
                        <li>To discuss destinations</li>
                    </ol>
                </div>
            </div>
            <p>Let's see these realized with examples:</p>
            <div className="grid">
                <p className="example one">
                    I pay $10 for lessons. =<br/> <em lang="es">Pago diez dolores por lecciones.</em><br/><br/>
                    You read for two hours. =<br/> <em lang="es">Lees por dos horas.</em><br/><br/>
                    He swims for fun. =<br/> <em lang="es">Él nada por diversión.</em></p>
                <p className="example two">
                    The gift is for you. =<br/> <em lang="es">El regalo es para tí.</em><br/><br/>
                    I must finish this report for Friday. =<br/> <em lang="es">Debo terminar este informe para viernes.</em><br/><br/>
                    I leave for Spain tomorrow. =<br/> <em lang="es">Salgo para España mañana.</em></p>
            </div>
            <h3>Spanish Prepositional Pronouns:</h3>
            <p>Notice the final word in the first <em lang="es">para</em> example. This is a type of pronoun in Spanish used after the prepositions discussed above. Let's look at the entire list of Spanish prepositional pronouns, many of which should look familiar</p>
            <div>
                <table>
                    <caption>Spanish Prepositional Pronouns <em lang="es">(para +)</em></caption>
                    <thead>
                
                        <tr>
                            <td colSpan="2">&nbsp;</td>
                            <th colSpan="2" scope="col">Singular</th>
                            <th colSpan="2" scope="col">Plural</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="3" colSpan="2" scope="row">First Person</th>
                            <td rowSpan="3" colSpan="2" lang="es">para mí</td>
                            <td colSpan="2" lang="es">para nosotros</td>
                        </tr>
                        <tr><td colSpan="2" lang="es">para nosotras</td></tr>
                        <tr><td colSpan="2" lang="es">para nosotres</td></tr>
                        <tr>
                            <th rowSpan="3" colSpan="2" scope="row">Second Person</th>
                            <td rowSpan="3" lang="es" style={{backgroundColor: "#f1bf00"}}>para tí</td>
                            <td rowSpan="3" lang="es-419" style={{backgroundColor: "lightskyblue"}}>para vos</td>                    
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">para vosotros</td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">para vosotras</td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">para vosotres</td>
                        </tr>
                        <tr>
                            <th rowSpan="4" colSpan="2" scope="row">Third Person</th>
                            <td colSpan="2" lang="es">para él</td>
                            <td colSpan="2" lang="es">para ellos</td>
                        </tr>
                        <tr>
                            <td colSpan="2" lang="es">para ella</td>
                            <td colSpan="2" lang="es">para ellas</td>
                        </tr>
                        <tr>
                            <td colSpan="2" lang="es">para elle</td>
                            <td colSpan="2" lang="es">para elles</td>
                        </tr>
                        <tr>
                            <td colSpan="2" lang="es" style={{backgroundColor: "#006341"}}>para usted</td>
                            <td colSpan="2" lang="es" style={{backgroundColor: "#006341"}}>para ustedes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Notice that this is basically the same chart as that for subject pronouns, with the exception of <em>yo</em> and <em>tú</em> being replaced by <em>mí</em> and <em>tí</em> respectively.</p>
            <p>It should also be noted that with the Spanish preposition <em lang="es">a</em>, it's common to see these prepositions utilized
            with indirect objects to clarify what the indirect object is replacing.</p>
            <p className="example">She reads the book to her every night.<br/>
                Ella <em>le</em> lee el libro <em>a ella</em> todas las noches.</p>
            <p>In the above example, even though <em>le</em> and <em>a ella</em> refer to the same person/concept, it's not uncommon to see both 
            in Spanish to more clearly clarify the context of the indirect object.</p>
            <p>In the last lesson of this section, we'll look at another type of verb referenced in a previous lesson and see how the pronouns we've explored are placed when they're used.
            </p>
          </div>
          <Box mt={4}>
            <Link className="next-link" exact="true" to="/quizzes/14">Take Quiz!</Link>
            <br/>
            <Link className="next-link" exact="true" to="/lessons/15">Next Lesson: The Present Progressive and Unique Pronoun Placement →</Link>
          </Box>
          <Copyright />
      </div>
    );
  }
  
  export default Lesson14;