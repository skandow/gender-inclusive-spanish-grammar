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

function Lesson8() {
    const classes = useStyles();
    
    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
            <h1>Commonly Used Irregular Verbs</h1>
            <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3><em>To Go</em> - <em lang="es">ir</em>:</h3>
            <p>One of the most common verbs in English - <em>to go</em> - is also one of the most common verbs in Spanish, and it is conjugated
            thusly: 
            </p> 
            <div>
                <table className="conjugation">
                    <caption><em>ir</em><br/>
                        Present Simple - Indicative</caption>
                    <tbody>
                        <tr>
                            <td colSpan="2" lang="es">voy</td>
                            <td colSpan="2" lang="es">vamos</td>
                        </tr>
                        <tr>
                            <td lang="es" style={{backgroundColor: "#f1bf00"}}>vas</td>
                            <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>vas</td>                    
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">vais</td>
                        </tr>
                        <tr>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>va</span></td>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>van</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>When using <em lang="es">ir</em>, the verb is followed often by the preposition <em lang="es">a</em>, which in Spanish is 
            often equivalent to the English <em>to</em>.</p>
            <p className="example">She goes to the store on Sundays. =<br/>
                <em>Ella va a la tienda los domingos.</em>
            </p>
            <p>You can also use <em lang="es">ir </em> + <em lang="es">a</em> to talk about plans for the future, similar to how we 
            use the expression <em>going to</em> in English to accomplish the same thing.  The verb after <em lang="es">a</em>, however,
            must be in the form of the infinitive.</p>
            <p className="example">We are going to swim tomorrow. =<br/>
                <em lang="es">Nosotros vamos a nadar mañana.</em>
            </p>
            <h3>How to Say You Know Something or Someone:</h3>
            <p>Like the English verb <em>to be</em>, the verb <em>to know</em> has two Spanish equivalents, both of which are quite 
            common, and both of which are irregular in the Present Indicative, specifically when looking at the <em lang="es">yo</em> form:</p>
            <div className="grid">
                <div>
                    <table className="conjugation one">
                        <caption><em>saber</em><br/>
                            Present Simple - Indicative</caption>
                        <tbody>
                            <tr>
                                <td colSpan="2" lang="es">sé</td>
                                <td colSpan="2" lang="es">sabemos</td>
                            </tr>
                            <tr>
                                <td lang="es" style={{backgroundColor: "#f1bf00"}}>sabes</td>
                                <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>sabés</td>                    
                                <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">sabéis</td>
                            </tr>
                            <tr>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>sabe</span></td>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>saben</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className="conjugation two">
                        <caption><em>conocer</em><br/>
                            Present Simple - Indicative</caption>
                        <tbody>
                            <tr>
                                <td colSpan="2" lang="es">conozco</td>
                                <td colSpan="2" lang="es">conocemos</td>
                            </tr>
                            <tr>
                                <td lang="es" style={{backgroundColor: "#f1bf00"}}>conoces</td>
                                <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>conocés</td>                    
                                <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">conoceís</td>
                            </tr>
                            <tr>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>conoce</span></td>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>conocen</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="grid">
                <div className="one box">
                    <p>Use <em lang="es">saber</em> as the Spanish verb for the English equivalent <em>to know </em> 
                    in the following cases:</p>
                    <ol>
                        <li>To discuss knowing a piece of information.<br/>
                            They know where the bank is. =<br/>
                            <em lang="es">Elles saben donde está el banco.</em></li>
                        <li>To discuss knowing how to do something (usually followed by <em lang="es">como</em> + <em>verb infinitive</em>).<br/>
                            You know how to read. =<br/> 
                            <em lang="es" style={{color: "#b81140"}}>Vosotros sabéis como leer.</em><br/>
                            or (in Latin America)<br/>
                            <em lang="es" style={{color: "#006341"}}>Ustedes saben como leer.</em></li>
                    </ol>
                </div>
                <div className="two box">
                    <p>Use <em lang="es">conocer</em> as the Spanish verb for the English equivalent <em>to know</em> in the following cases:</p>
                    <ol>
                        <li>To discuss knowing something via familiarity.<br/>
                            I know Chicago well. =<br/>
                            <em lang="es">Conozco bien Chicago.</em>
                        </li>
                        <li>To discuss knowing a person (almost always followed by <em lang="es">a</em> + <em>person's name</em>).<br/>
                            You know Juan. =<br/>
                            <em lang="es" style={{color: "#f1bf00"}}>Conoces a Juan.</em><br/>
                            or (in Argentina)<br/>
                            <em lang="es-419" style={{color: "lightskyblue"}}>Conocés a Juan.</em></li>
                    </ol>
                </div>
            </div>
            <h3>Using Our Senses - <em lang="es">ver</em>, <em lang="es">oír</em>, and <em lang="es">oler</em>:</h3>
            <p>The verbs associated with seeing (<em lang="es">ver</em>), hearing (<em lang="es">oír</em>), and smelling (<em lang="es">oler</em>)
            are all irregular.</p>
            <p>The verb <em lang="es">ver</em> is regular except for its <em lang="es">yo</em>, 
            <em lang="es-419" style={{color: "lightskyblue"}}> vos</em>, and <em lang="es" style={{color: "#b81140"}}> vosotres</em> forms:</p>
            <div>
                <table className="conjugation">
                    <caption><em>ver</em><br/>
                        Present Simple - Indicative</caption>
                    <tbody>
                        <tr>
                            <td colSpan="2" lang="es">veo</td>
                            <td colSpan="2" lang="es">vemos</td>
                        </tr>
                        <tr>
                            <td lang="es" style={{backgroundColor: "#f1bf00"}}>ves</td>
                            <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>ves</td>                    
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">veis</td>
                        </tr>
                        <tr>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>ve</span></td>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>ven</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>The verb <em lang="es">oír</em> also has some interesting irregularities:</p>
            <div>
                <table className="conjugation">
                    <caption><em>oír</em><br/>
                        Present Simple - Indicative</caption>
                    <tbody>
                        <tr>
                            <td colSpan="2" lang="es">oigo</td>
                            <td colSpan="2" lang="es">oímos</td>
                        </tr>
                        <tr>
                            <td lang="es" style={{backgroundColor: "#f1bf00"}}>oyes</td>
                            <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>oís</td>                    
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">oís</td>
                        </tr>
                        <tr>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>oye</span></td>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>oyen</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>And the verb <em em="es">oler</em> actually changes its starting letter in some forms:</p>
            <div>
                <table className="conjugation">
                    <caption><em>oler</em><br/>
                        Present Simple - Indicative</caption>
                    <tbody>
                        <tr>
                            <td colSpan="2" lang="es">huelo</td>
                            <td colSpan="2" lang="es">olemos</td>
                        </tr>
                        <tr>
                            <td lang="es" style={{backgroundColor: "#f1bf00"}}>hueles</td>
                            <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>olés</td>                    
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">oléis</td>
                        </tr>
                        <tr>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>huele</span></td>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>huelen</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Like <em>to be</em> and <em>to know</em>, the English verb <em>to have</em> actually has two equivalent Spanish verbs
            depending on how it is used, both of which are irregular.  One of the two is actually a verb that creates an entire new category of 
            verb tense through its use, so we'll be looking at both of these irregular verbs in the next lesson.</p>
          </div>
          <Box mt={4}>
            <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/quizzes/8">Take Quiz!</Link></Button>
            <br/>
            <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/9">Next Lesson: The Verbs <em lang="es">Tener</em>, <em lang="es">Haber</em>, and the Present Perfect Tense →</Link></Button>
          </Box>
          <Copyright />
      </div>
    );
  }
  
  export default Lesson8;