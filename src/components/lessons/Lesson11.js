import React from 'react'
import { Link } from 'react-router-dom'

function Lesson11() {
    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
            <h1>Reflexive and Reciprocal Pronouns</h1>
            <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3>Reflexive and Reciprocal Pronouns - The English Equivalent</h3>
            <p>In this next part of exploring basic inclusive Spanish grammar, we'll be taking a look at 
                the various remaining types of Spanish pronouns we haven't explored yet.</p>
            <p>Subject pronouns tell who is doing the action, while object pronouns tell who or what receives the action. We're 
                going to begin with a special kind of object pronoun, one in which the subject and object of the sentence are the same.</p>
            <p>Consider this example:</p>
            <p className="example"><strong><em>I</em> bathe <em>myself</em> before I eat breakfast.</strong><br/>
            In this sentence, the words <em>I</em> and <em>myself</em> together tell us that the person doing and receiving the action are the same.</p>
            <p>In this context, these two pronouns are the equivalent of the Spanish <strong>reflexive pronoun</strong>. Let's take a look at the English equivalents to these across the board:</p>
            <div>
                <table>
                    <caption>English Subject Pronouns</caption>
                    <thead>
                        <tr>
                            <td>&nbsp;</td>
                            <th scope="col">Singular</th>
                            <th scope="col">Plural</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">First Person</th>
                            <td>I...myself</td>
                            <td>we...ourselves</td>
                        </tr>
                        <tr>
                            <th scope="row">Second Person</th>
                            <td>you...yourself</td>
                            <td>you...yourselves</td>
                        </tr>
                        <tr>
                            <th rowSpan="3" scope="row">Third Person</th>
                            <td>he...himself</td>
                            <td rowSpan="3">they...themselves</td>
                        </tr>
                        <tr><td>she...herself</td></tr>
                        <tr><td>ze...hirself</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Note that this is the only case in the English language where there is a difference between <em>you </em> 
            in the singular form and <em>you</em> in the plural.</p>
            <h3>Spanish Reflexive Pronouns:</h3>
            <p>In Spanish, the second of the above pronouns is replaced with a Spanish reflexive pronoun</p>
            <div>
                <table id="subject-pronoun-chart">
                    <caption>Spanish Reflexive Pronouns</caption>
                    <tbody>
                        <tr>
                            <td lang="es">me</td>
                            <td lang="es">nos</td>
                        </tr>
                        <tr>
                            <td lang="es">te</td>
                            <td style={{backgroundColor: "#b81140"}} lang="es">os</td>
                        </tr>
                        <tr>
                            <td lang="es">se</td>
                            <td lang="es">se</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>There are two things to note here regarding reflexive pronoun usage:</p>
            <ol>
                <li>The chart above corresponds to the subject pronoun chart in terms of which subject pronouns are connected to 
                    each of the reflexive pronouns.  So that means:
                    <ul>
                        <li><em lang="es">me</em> is used when the subject is <em lang="es">yo</em></li>
                        <li><em lang="es">te</em> is used when the subject is <em style={{color: "#f1bf00"}} lang="es">tú</em> or <em style={{color: "lightskyblue"}} lang="es-419">vos</em></li>
                        <li><em lang="es">nos</em> is used when the subject is <em lang="es">nosotros/-as/-es</em></li>
                        <li><em style={{color: "#b81140"}} lang="es">os</em> is used when the subject is <em lang="es">vosotros/-as/-es</em></li>
                        <li><em lang="es">se</em> is used when the subject is <em>él</em>, <em>ella</em>, <em>elle</em>, <em style={{color: "#006341"}} lang="es">usted</em> or their plural equivalents:  
                        <em> ellos</em>, <em>ellas</em>, <em>elles</em>, and <em style={{color: "#006341"}} lang="es">ustedes</em></li>
                    </ul>
                </li>
                <li>Typically, reflexive pronouns go <strong>before</strong> the verb they connect the subject and reflexive object to, so in the case of
                    our example:
                    <p className="example"><em>I</em> bathe <em>myself</em> before I eat breakfast.<br/></p>
                    The Spanish equivalent of the first three words:
                    <p className="example"><em>(Yo) me</em> baño</p>
                    would translate word for word as:
                    <p className="example"><em>I myself</em> bathe</p>
                </li>
            </ol>
            <h3>Reflexive Verbs:</h3>
            <p>One of the tricky aspects of Spanish reflexive pronouns for native English speakers is that we don't often utilize the second reflexive pronoun when
            discussing actions in which the subject and object are the same. In the above example, it's not common in English to say that 
            we bathe ourselves, but this is done in Spanish any time the action in question is done by and to the same person or persons.</p>
            <p>Some Spanish verbs appear most frequently with reflexive pronouns. These verbs are often introduced with the third-person reflexive pronoun attached to its infinitive.</p>
            <p>Here are some common Spanish reflexive verbs:</p>
            <ul>
                <li><em lang="es">bañarse</em> - to bathe</li>
                <li><em lang="es">ducharse</em> - to shower</li>
                <li><em lang="es">vestirse (e --{'>'} i)</em> - to get dressed</li>
                <li><em lang="es">sentirse (e --{'>'} ie)</em> - to feel (a certain emotion/way/state)</li>
                <li><em lang="es">sentarse (e --{'>'} ie</em> - to sit</li>
                <li><em lang="es">preocuparse</em> - to worry</li>
                <li><em lang="es">levantarse</em> - to get up</li>
                <li><em lang="es">atreverse</em> - to dare</li>
                <li><em lang="es">casarse</em> - to get married</li>
                <li><em lang="es">acercarse</em> - to move closer to</li>
            </ul>
            <p>Many Spanish verbs can utilize reflexive verbs even if they aren't most commonly used with reflexive pronouns.</p>
            <p>For example, the verb <em lang="es">ver</em> or <em>to see</em>:</p>
            <p className="example">I see myself.<br/>
                <em lang="es">Me veo.</em></p>
            <p>You can see a variety of things, but if you see yourself, use a reflexive verb to show it.</p>
            <p>Some verbs can actually have significant changes in meaning if a reflexive verb is added. Take a look at the chart below and compare the meanings.</p>
            <table>
                <caption>Verbs that Change Meaning With Reflexive Pronouns</caption>
                <tbody>
                    <tr>
                        <th scope="column">English Meaning</th>
                        <th scope="column">Spanish Verb</th>
                        <th scope="column">Spanish Reflexive Verb</th>
                        <th scope="column">English Meaning</th>
                    </tr>
                    <tr>
                        <td>to go</td>
                        <td lang="es">ir</td>
                        <td lang="es">irse</td>
                        <td>to leave</td>
                    </tr>
                    <tr>
                        <td>to meet/to have left</td>
                        <td lang="es">quedar</td>
                        <td lang="es">quedarse</td>
                        <td>to stay</td>
                    </tr>
                    <tr>
                        <td>to put</td>
                        <td lang="es">poner</td>
                        <td lang="es">ponerse</td>
                        <td>various expressions</td>
                    </tr>
                    <tr>
                        <td>to fix</td>
                        <td lang="es">fijar</td>
                        <td lang="es">fijarse</td>
                        <td>to notice</td>
                    </tr>
                    <tr>
                        <td>to do/to make</td>
                        <td lang="es">hacer</td>
                        <td lang="es">hacerse</td>
                        <td>to make oneself</td>
                    </tr>
                    <tr>
                        <td>to ask</td>
                        <td lang="es">preguntar</td>
                        <td lang="es">preguntarse</td>
                        <td>to wonder</td>
                    </tr>
                    <tr>
                        <td>to believe</td>
                        <td lang="es">creer</td>
                        <td lang="es">creerse</td>
                        <td>to believe (despite doubts)</td>
                    </tr>
                </tbody>
            </table>
            <h3>Reciprocal pronouns:</h3>
            <p>Reflexive pronouns can serve another purpose when used in plural context.  Take this sentence:</p>
            <p className="example">We write to each other every Friday.</p>
            <p>In this case, the subject is <em>we</em>, but what is the object? We don't have the word <em>ourselves</em>. Instead,
            we have reference to <em>each other</em>. In this case, because the individuals in the group referenced do the action mentioned to each other,
            this is what is known in Spanish as a <strong>reciprocal pronoun</strong>, which operates in the same way as a reflexive pronoun.</p>
            <p>Therefore, the first five words in the previous English example can be summed up in this way in Spanish:</p>
            <p className="example" lang="es">Nos escribimos</p>
            <p>One of the most common farewell expressions in Spanish: <em lang="es">nos vemos</em>, literally translates to <em>"We see each other"</em>, but 
            is generally considered to be the equivalent of <em>"See you!"</em></p>
            <p>We've now begun to explore ways in which the Spanish language tells us who is receiving action via pronouns. We'll next explore object pronouns in general.
            </p>
          </div>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/quizzes/11">Take Quiz!</Link>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/12">Next Lesson: Direct Object Pronouns →</Link>
      </div>
    );
  }
  
  export default Lesson11;