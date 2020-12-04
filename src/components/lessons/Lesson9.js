import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Copyright from '../containers/Copyright';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
  }));

function Lesson9() {
    const classes = useStyles();
    
    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
            <h1>The Verbs <em lang="es">Tener</em>, <em lang="es">Haber</em>, and the Present Perfect Tense</h1>
            <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3>To Have and to Help:</h3>
            <p>Consider the following sentences, both of which use the English verb <em>to have</em>: 
            </p>
            <p className="example">I <em>have</em> a big house.<br/>
            I <em>have</em> lived in my house for twelve years.</p>
            <p>What is the difference in how the verb <em>have</em> is used in these two examples?</p>
            <ol>
                <li>The first uses <em>have</em> as an action verb.  It is a verb of possession.</li>
                <li>The second uses <em>have</em> as an auxiliary (or helping) verb to make the basis for the present perfect tense in English.</li>
            </ol>
            <p>As a result of this distinction, it's much easier to determine which of the two Spanish verbs for <em>to have</em> to use 
            depending on its purpose of use:</p> 
            <div className="grid">
                <div className="one box">
                    <p>Use <em lang="es">tener</em> as the Spanish verb for the English equivalent <em>to have</em> when you need an action
                    verb.</p>
                </div>
                <div className="two box">
                    <p>Use <em lang="es">haber</em> as the Spanish verb for the English equivalent <em>to have</em> when using an auxiliary verb 
                    to create the Present Perfect tense.</p>
                </div>
            </div>
            <p>As mentioned in the previous lesson, both of these verbs are irregular.  Let's take a look at them separately.</p>
            <h3><em lang="es">Tener</em> - To Have (in Action):</h3>
            <div>
                <table className="conjugation">
                    <caption><em>tener</em><br/>
                        Present Simple - Indicative</caption>
                    <tbody>
                        <tr>
                            <td colSpan="2" lang="es">tengo</td>
                            <td colSpan="2" lang="es">tenemos</td>
                        </tr>
                        <tr>
                            <td lang="es" style={{backgroundColor: "#f1bf00"}}>tienes</td>
                            <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>tenés</td>                    
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">tenéis</td>
                        </tr>
                        <tr>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>tiene</span></td>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>tienen</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>For practice, let's look at this verb conjugated in a sentence to state ownership of a large house (<em lang="es">una casa grande</em>):</p>
            <p className="example"><em lang="es">Tengo una casa grande.<br/>
                <span style={{color: "#f1bf00"}}>Tienes una casa grande.</span><br/>
                <span style={{color: "lightskyblue"}}>Tenés una casa grande.</span><br/>
                Él tiene una casa grande.<br/>
                Ella tiene una casa grande.<br/>
                Elle tiene una casa grande.<br/>
                <span style={{color: "#006341"}}>Usted tiene una casa grande.</span><br/>
                Nosotros/-as/-es tenemos una casa grande.<br/>
                <span style={{color: "#b81140"}}>Vosotros/-as/-es</span> tenéis una casa grande.<br/>
                Ellos/-as/-es tienen una casa grande.<br/>
                <span style={{color: "#006341"}}>Ustedes tienen una casa grande.</span></em></p>
            <p>Another important use of the verb <em lang="es">tener</em> in Spanish is to express age.  While in English, we say we <em>are</em> a 
            certain age (using the verb <em>to be</em>), in Spanish, the expression is that you <em>have</em> those years.  Take a look at this conversation:</p>
            <p className="example"><em lang="es">¿Cuántos años tiene Pablo?<br/>
                Pablo tiene veinte años.</em></p>
            <p>The literal translation of this conversation (from more primitive forms of Google translate) would look like this:</p>
            <p className="example">How many years does Pablo have?<br/>
                He has twenty years.</p>
            <p>But the more direct translation in terms of conveying meaning is this:</p>
            <p className="example"><em lang="es">¿Cuántos años tiene Pablo?</em> = How old is Pablo?<br/>
                <em lang="es">Pablo tiene veinte años.</em> = Pablo is twenty years old.</p>
            <h3><em lang="es">Haber</em> - To Have (as a Helper):</h3>
            <p>Let's conjugate <em lang="es">haber</em> first.  You'll notice there is something special in the third-person singular
            area of our conjugation chart.  Ignore the verb in the black box in the bottom row for now.  It will be necessary later.</p>
            <div>
                <table className="conjugation">
                    <caption><em>haber</em><br/>
                        Present Simple - Indicative</caption>
                    <tbody>
                        <tr>
                            <td colSpan="2" lang="es">he</td>
                            <td colSpan="2" lang="es">hemos</td>
                        </tr>
                        <tr>
                            <td lang="es" style={{backgroundColor: "#f1bf00"}}>has</td>
                            <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>has</td>                    
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">habéis</td>
                        </tr>
                        <tr>
                            <td lang="es"><span style={{color: "#006341"}}>ha</span></td>
                            <td lang="es" style={{backgroundColor: "black"}}><span style={{color: "white"}}>hay</span></td>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>han</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>The verb <em lang="es">haber</em> can help in several ways.  In order to see the first way, however, we'll need to use the 
            Spanish equivalent of the past participle.</p>
            <p>For most verbs, the past participle can be formed very easily:</p>
            <p className="example">If the infinitive ends in <em>-ar</em>, remove the <em>-ar</em> and add <em>-ado</em>:<br/>
                to listen = <em lang="es">escuchar</em><br/>
                listened (past participle) = <em lang="es">escuchado</em><br/><br/>
                If the infinitive ends in <em>-er</em> or <em>-ir</em>, remove the <em>-er</em> or <em>-ir</em> and add <em>-ido</em>:<br/>
                to eat = <em lang="es">comer</em><br/>
                eaten = <em lang="es">comido</em><br/><br/>
                to receive = <em lang="es">recibir</em><br/>
                received (past participle) = <em lang="es">recibido</em>
            </p>
            <p>Let's take a look at the third example from above and use it with the conjugation of <em>haber</em> to state receipt of
            a gift:</p>
            <p className="example">I have received the gift. = <em lang="es">He recibido el regalo.</em><br/>
                You (familiar/singular) have received the gift. = <em lang="es">Has recibido el regalo.</em><br/>
                He/she/ze has received the gift. = <em lang="es">Ha recibido el regalo.</em><br/>
                You (formal/singular) have received the gift. = <em lang="es" style={{color: "#006341"}}>Ha recibido el regalo.</em><br/>
                We have received the gift. = <em lang="es">Hemos recibido el regalo.</em><br/>
                You (familiar/plural) have received the gift. = <em lang="es" style={{color: "#b81140"}}>Habéis recibido el regalo.</em><br/>  
                They have received the gift. = <em lang="es">Han recibido el regalo.</em><br/>
                You (plural) have received the gift. = <em lang="es" style={{color: "#006341"}}>Han recibido el regalo.</em></p>
            <p>The use of <em lang="es">haber</em> in this way creates a new verb tense: the Present Perfect.  This verb tense is used 
            to discuss events that have recently happened in the past.</p>
            <h3>Irregular Past Participles:</h3>
            <p>There are several verbs that have irregular past participles, but all of them have one of the following twelve as part of them:</p>
            <table>
                <caption>Irregular Past Participles</caption>
                <tbody>
                    <tr>
                        <th scope="column">English Infinitive</th>
                        <th scope="column">Spanish Infinitive</th>
                        <th scope="column">Spanish Past Participle</th>
                        <th scope="column">English Past Participle</th>
                    </tr>
                    <tr>
                        <td>to open</td>
                        <td lang="es">abrir</td>
                        <td lang="es">abierto</td>
                        <td>opened</td>
                    </tr>
                    <tr>
                        <td>to cover</td>
                        <td lang="es">cubrir</td>
                        <td lang="es">cubierto</td>
                        <td>covered</td>
                    </tr>
                    <tr>
                        <td>to say</td>
                        <td lang="es">decir</td>
                        <td lang="es">dicho</td>
                        <td>said</td>
                    </tr>
                    <tr>
                        <td>to write</td>
                        <td lang="es">escribir</td>
                        <td lang="es">escrito</td>
                        <td>written</td>
                    </tr>
                    <tr>
                        <td>to do/make</td>
                        <td lang="es">hacer</td>
                        <td lang="es">hecho</td>
                        <td>made</td>
                    </tr>
                    <tr>
                        <td>to die</td>
                        <td lang="es">morir</td>
                        <td lang="es">muerto</td>
                        <td>died</td>
                    </tr>
                    <tr>
                        <td>to put</td>
                        <td lang="es">poner</td>
                        <td lang="es">puesto</td>
                        <td>put</td>
                    </tr>
                    <tr>
                        <td>to break</td>
                        <td lang="es">romper</td>
                        <td lang="es">roto</td>
                        <td>broken</td>
                    </tr>
                    <tr>
                        <td>to solve</td>
                        <td lang="es">resolver</td>
                        <td lang="es">resuelto</td>
                        <td>resolved</td>
                    </tr>
                    <tr>
                        <td>to satisfy</td>
                        <td lang="es">satisfacher</td>
                        <td lang="es">satisfecho</td>
                        <td>satisfied</td>
                    </tr>
                    <tr>
                        <td>to see</td>
                        <td lang="es">ver</td>
                        <td lang="es">visto</td>
                        <td>seen</td>
                    </tr>
                    <tr>
                        <td>to return</td>
                        <td lang="es">volver</td>
                        <td lang="es">vuelto</td>
                        <td>returned</td>
                    </tr>
                </tbody>
            </table>
            <p>From this chart, you can also construct the irregular past participles of other Spanish verbs that combine a prefix
            with one of the base verbs listed above:
            </p>
            <p className="example">
                to compose = <em lang="es">com<u>poner</u></em><br/>
                composed (past participle) = <em lang="es">com<u>puesto</u></em><br/>
                She has composed this for you. = <br/>
                <em lang="es">Ella ha compuesto ésta para usted.</em>
            </p>
            <p>In a later lesson, we will look at how to use these past participles to enhance our adjective constructing capabilities.</p>
            <h3 id="hay">Using <em lang="es">Hay</em>:</h3>
            <p>If you refer back to our conjugation chart for <em>haber</em>, recall that there was an additional verb in the chart we 
            haven't used yet: <em lang="es">hay</em>.</p>
            <p>The verb <em lang="es">hay</em> in Spanish is very special.  It's what is called an impersonal verb, meaning that the subject 
            is something unseen and intangible.  It is used as the equivalent of the phrases <em>there is</em> and <em>there are</em> in 
            English to describe the existence of something or somethings.  The verb <em lang="es">hay</em> is used in this context regardless
            of the number of objects referenced.</p>
            <p className="example">There is a car in the road. =<br/>
                <em lang="es">Hay un coche en la calle.</em><br/><br/>
                There are four cars in the road. =<br/>
                <em lang="es">Hay cuatro coches en la calle.</em></p>   
            <h3>You Have to Know This! - Another Use of <em lang="es">Tener</em> and <em lang="es">Haber</em>:</h3>
            <p>There is another very useful way in which the verbs presented in this lesson can be used.  When we want to utilize
            the phrase <em>have to + (an action)</em> such as</p> 
            <p className="example"><em>I have to know this.</em>
            </p>
            <p>there are three ways this can be accomplished in Spanish:</p>
            <ol>
                <li><em lang="es">tener que</em> + infinitive</li>
                <li><em lang="es">haber de</em> + infinitive</li>
                <li><em lang="es">hay que</em> + infinitive</li>
            </ol>
            <p>For the first two methods above, the verb <em lang="es">tener</em> or <em lang="es">haber</em> should be conjugated 
            to reflect who has to do something.  No conjugation is required for the third method.</p>
            <p>Therefore, to translate the sentence above, we have three options:</p>
            <ol className="example numbered">
                <li>Tengo que saber esto.</li>
                <li>He de saber esto.</li>
                <li>Hay que saber esto.</li>
            </ol>
            <p>As you can see, these two verbs are extremely useful.  We'll conclude Part 2 in the next lesson by looking at the concept 
            of stem-changing verbs.
            </p>
          </div>
          <Box mt={4}>
            <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/quizzes/9">Take Quiz!</Link></Button>
            <br/>
            <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/10">Next Lesson: Stem-Changing Verbs →</Link></Button>
          </Box>
          <Copyright />
      </div>
    );
  }
  
  export default Lesson9;