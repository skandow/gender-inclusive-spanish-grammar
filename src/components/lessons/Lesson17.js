import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Copyright from '../containers/Copyright';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
  }));

function Lesson17() {
    const classes = useStyles();

    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
            <h1>Polite Commands</h1>
            <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3>A Third Mood:</h3>
            <p>
                In the previous lesson, we began to explore a second mood of Spanish verbs, the Imperative. Polite commands take their conjugation from a third mood, called 
                the <strong>Subjunctive</strong>. We'll explore the full conjugation of this mood in the next lesson, but you'll start to see the basic approach in this one.
            </p>
            <p>
                 Let's first recall the conjugation of commands as it was revealed in the last lesson:
            </p>
            <div>
                <table className="you-chart">
                    <caption><em>comer - to eat</em><br/>
                        Positive Imperative</caption>
                    <thead>
                        <tr>
                            <td colSpan="2">&nbsp;</td>
                            <th colSpan="2" scope="col">Singular</th>
                            <th colSpan="2" scope="col">Plural</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan="2" scope="row">Familiar</th>
                            <td colSpan="1" lang="es" style={{backgroundColor: "#f1bf00"}}>come</td>
                            <td colSpan="1" lang="es-419" style={{backgroundColor: "lightskyblue"}}>comé</td>                    
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">comed</td>
                        </tr>
                        <tr>
                            <th colSpan="2" scope="row">Polite</th>
                            <td colSpan="2" lang="es" style={{backgroundColor: "#006341"}}>coma</td>
                            <td colSpan="2" lang="es" style={{backgroundColor: "#006341"}}>coman</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>We learned in the previous lesson how to build each form in the <em>familiar command</em> row. Let's now look at 
                the process for builiding the <em>polite command</em> row.</p>
            <h3>Conjugation of Polite Commands:</h3>
            <p>Let's take a look at the three verb examples we saw in the last lesson and see how their conjugations work for polite commands.</p>
            <ul>
                <li>Polite commands with <em lang="es">usted</em><br/>
                    To form polite commands to one person, follow this formula for regular verbs:
                    <ol>
                        <li>Build the <em lang="es">yo</em> form of the Present Simple tense of the Indicative mood of the verb.</li>
                        <li>Remove the <em>-o</em> from the end of the verb.</li>
                        <li>
                            <ul>
                                <li>If the verb is an <em>-ar</em> verb, add <em>-e</em> to the end.</li>
                                <li>If the verb is an <em>-er</em> or <em>-ir</em> verb, add <em>-a</em> to the end.</li>
                            </ul>
                            <p className="example">caminar - to walk<br/>
                                camino - I walk (present simple indicative)<br/>
                                camine - walk (polite command to one person)<br/><br/>
                                comer - to eat<br/>
                                como - I eat (present simple indicative)<br/>
                                coma - eat (polite command to one person)<br/><br/>
                                abrir - to open<br/>
                                abro - I open (present simple indicative)<br/>
                                abra - open (polite command to one person)</p>
                                As before, there are some irregular verbs, which we will discuss in the next section.
                        </li>
                    </ol>
                </li>
                <li>Polite commands with <em lang="es">ustedes</em><br/>
                To form polite commands to a group of people in Spain, or to form commands to any group of people elsewhere in the Spanish-speaking world,
                follow the steps above to build the <em lang="es">usted</em> form of the command. Then add <em>-n</em> to the end of the word.</li>
                <p className="example">caminar - to walk<br/>
                    caminen - walk (polite command to group of people in Spain/command to any group of people elsewhere)<br/><br/>
                    comer - to eat<br/>
                    coman - eat (polite command to group of people in Spain/command to any group of people elsewhere)<br/><br/>
                    abrir - to open<br/>
                    abran - open (polite command to group of people in Spain/command to any group of people elsewhere)</p>
            </ul>
            <p>A few other items to note:</p>
            <ul>
                <li>When building these commands, it's important to take the second step! Consider the following:
                    <p className="example">
                        Have a good day.<br/>
                        To have - <em lang="es">tener</em><br/>
                        <em lang="es">Tenga un buen día.</em>
                    </p>
                    Recall that <em lang="es">tener</em> is a special verb in its <em lang="es">yo</em> form in that a <em>g </em>
                    is added, so that <em>g</em> must appear in the polite command as well.
                </li>
                <li>If the infinitive of a verb ends in <em>-car</em>, <em>-gar</em>, or <em>-zar</em>, the consonant before 
                the end of the <em lang="es">usted</em> command will be <em>-que</em>, <em>-gue</em>, or <em>-ce</em> respecively.
                <p className="example">aparcar - to park<br/>
                    aparque - park (polite command to one person)<br/><br/>
                    cargar - to load<br/>
                    cargue - load (present simple indicative)<br/><br/>
                    lanzar - to throw<br/>
                    lance - throw (polite command to one person)</p></li>
            </ul>
            <h3>Irregular Polite Commands:</h3>
            <p>The following table shows the irregular polite commands.</p>
            <div>
                <table>
                    <caption>Irregular Polite Commands</caption>
                    <thead>
                        <tr>
                            <th scope="col">English</th>
                            <th scope="col">Spanish Infinitive</th>
                            <th scope="col">Spanish Polite Command (Singular)</th>
                            <th scope="col">Spanish Polite Command (Plural)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>to be</td>
                            <td>ser</td>
                            <td>sea</td>
                            <td>sean</td>
                        </tr>
                        <tr>
                            <td>to be</td>
                            <td>estar</td>
                            <td>esté</td>
                            <td>estén</td>
                        </tr>
                        <tr>
                            <td>to go</td>
                            <td>ir</td>
                            <td>vaya</td>
                            <td>vayan</td>
                        </tr>
                        <tr>
                            <td>to give</td>
                            <td>dar</td>
                            <td>dé</td>
                            <td>den</td>
                        </tr>
                        <tr>
                            <td>to know</td>
                            <td>saber</td>
                            <td>sepa</td>
                            <td>sepan</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>Polite Commands with Reflexive, Direct Object, and Indirect Object Pronouns:</h3>
            <p>Like informal commands, polite commands can have reflexive, direct, or indirect objects attached to them.
            </p>
            <p className="example">
                Do it. (one person)<br/>
                <em lang="es">Hágalo.</em><br/><br/>
                Give it to me. (one person)<br/>
                <em lang="es">Démelo.</em><br/><br/>
                Stay here. (a group of people)<br/>
                <em lang="es">Quédense.</em><br/><br/>
                Talk to each other. (a group of people)<br/>
                <em lang="es">Díganse.</em><br/><br/>
                Get out. (a group of people)<br/>
                <em lang="es">Váyanse.</em>
            </p>
            <p>Remember to include tildes as necessary.</p>    
            <p>In the next lesson, we'll look at how to say <em>no</em> in both the Indicative and Imperative moods.
            </p>
          </div>
          <Box mt={4}>
            <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/quizzes/17">Take Quiz!</Link></Button>
            <br/>
            <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/18">Next Lessong: The Spanish Negative →</Link></Button>
          </Box>
          <Copyright />
      </div>
    );
  }
  
  export default Lesson17;