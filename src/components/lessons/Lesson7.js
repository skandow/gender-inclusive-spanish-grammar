import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Copyright from '../containers/Copyright'

function Lesson7() {
    
    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
            <h1>Regular Verbs in the Present Indicative</h1>
            <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3>Regular Present Tense Verbs in English:</h3>
            <p>The verbs <em lang="es">ser</em> and <em lang="es">estar</em> are actually irregular verbs in Spanish, meaning
            that they don't follow the set conjugation pattern established by most other Spanish verbs in the present tense.  
            </p> 
            <p>The English language also has regular and irregular verbs.  Compare the present simple conjugation of <em>to be</em> with
            these regular conjugations of <em>to love</em>, <em>to fear</em>, and <em>to live</em>:</p>
            <div>
                <table className="conjugation-three">
                    <caption><em>to be</em><br/>
                    Present Simple</caption>
                    <tbody>
                        <tr>
                            <td>I am</td>
                            <td>we are</td>
                        </tr>
                        <tr>
                            <td>you are</td>
                            <td>you (all) are</td>
                        </tr>
                        <tr>
                            <td>he is</td>
                            <td rowSpan="3">they are</td>
                        </tr>
                        <tr><td>she is</td></tr>
                        <tr><td>ze is</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="grid-three">
                <div>
                    <table className="conjugation-three one">
                        <caption><em>to love</em><br/>
                            Present Simple</caption>
                        <tbody>
                            <tr>
                                <td>I love</td>
                                <td>we love</td>
                            </tr>
                            <tr>
                                <td>you love</td>
                                <td>you (all) love</td>
                            </tr>
                            <tr>
                                <td>he loves</td>
                                <td rowSpan="3">they love</td>
                            </tr>
                            <tr><td>she loves</td></tr>
                            <tr><td>ze loves</td></tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className="conjugation-three two">
                        <caption><em>to fear</em><br/>
                            Present Simple</caption>
                        <tbody>
                            <tr>
                                <td>I fear</td>
                                <td>we fear</td>
                            </tr>
                            <tr>
                                <td>you fear</td>
                                <td>you (all) fear</td>
                            </tr>
                            <tr>
                                <td>he fears</td>
                                <td rowSpan="3">they fear</td>
                            </tr>
                            <tr><td>she fears</td></tr>
                            <tr><td>ze fears</td></tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className="conjugation-three three">
                        <caption><em>to live</em><br/>
                        Present Simple</caption>
                        <tbody>
                            <tr>
                                <td>I live</td>
                                <td>we live</td>
                            </tr>
                            <tr>
                                <td>you live</td>
                                <td>you (all) live</td>
                            </tr>
                            <tr>
                                <td>he lives</td>
                                <td rowSpan="3">they live</td>
                            </tr>
                            <tr><td>she lives</td></tr>
                            <tr><td>ze lives</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>Notice that while there are three very different words in the <em>to be</em> chart (<em>am</em>, <em>are</em>, and <em>is</em>)
            there is only one minor change in the other three charts.  For regular present tense verbs in the English language, an <em>-s </em>
            is added to the end of the third-person singular form only.  The rest of the verbs are the infinitive minus the preposition <em>to</em>.</p>
            <h3>Spanish Verb Endings:</h3>
            <p>Now let's take a look at the conjugations of <em>to love</em>, <em>to fear</em>, and <em>to live</em> in Spanish, which
            are <em lang="es">amar</em>, <em lang="es">temer</em>, and <em lang="es">vivir</em> respectively.</p>
            <div>
                <table className="conjugation">
                    <caption><em>amar</em><br/>
                        Present Simple - Indicative</caption>
                    <tbody>
                        <tr>
                            <td colSpan="2" lang="es">amo</td>
                            <td colSpan="2" lang="es">amamos</td>
                        </tr>
                        <tr>
                            <td lang="es" style={{backgroundColor: "#f1bf00"}}>amas</td>
                            <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>amás</td>                    
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">amáis</td>
                        </tr>
                        <tr>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>ama</span></td>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>aman</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="grid">
                <div>
                    <table className="conjugation one">
                        <caption><em>temer</em><br/>
                        Present Simple - Indicative</caption>
                        <tbody>
                            <tr>
                                <td colSpan="2" lang="es">temo</td>
                                <td colSpan="2" lang="es">tememos</td>
                            </tr>
                            <tr>
                                <td lang="es" style={{backgroundColor: "#f1bf00"}}>temes</td>
                                <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>temés</td>                    
                                <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">teméis</td>
                            </tr>
                            <tr>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>teme</span></td>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>temen</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className="conjugation two">
                        <caption><em>vivir</em><br/>
                        Present Simple - Indicative</caption>
                        <tbody>
                            <tr>
                                <td colSpan="2" lang="es">vivo</td>
                                <td colSpan="2" lang="es">vivimos</td>
                            </tr>
                            <tr>
                                <td lang="es" style={{backgroundColor: "#f1bf00"}}>vives</td>
                                <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>vivís</td>                    
                                <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">vivís</td>
                            </tr>
                            <tr>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>vive</span></td>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>viven</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>Recall from our previous discussion that, because of the uniqueness of Spanish verb conjugation, most of the pronouns 
            are implied by the verbs used.</p>
            <p>Notice the endings of the infinitives of the three Spanish verbs.  ALL Spanish infinitives end with <em>-ar</em>, <em>-er</em>,
            or <em>-ir</em>, and the endings of the verbs determine how you conjugate them regularly.</p>
            <h3>Conjugation of Regular <em>-ar</em> Verbs:</h3>
            <p>Let's take a look at this practice with verbs that end in <em>-ar</em>.  To conjugate regular Spanish verbs in the
            Present Simple Indicative, remove the <em>-ar</em> from the given infinite, and add the following endings depending on the subject:</p>
            <div>
                <table className="conjugation">
                    <caption><em>-ar</em> verb endings<br/>
                        Present Simple - Indicative</caption>
                    <tbody>
                        <tr>
                            <td colSpan="2" lang="es">-o</td>
                            <td colSpan="2" lang="es">-amos</td>
                        </tr>
                        <tr>
                            <td lang="es" style={{backgroundColor: "#f1bf00"}}>-as</td>
                            <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>-ás</td>                    
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">-áis</td>
                        </tr>
                        <tr>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>-a</span></td>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>-an</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Let's use this pattern to practice conjugating another regular Spanish verb: <em lang="es">hablar</em> which means <em>to speak</em>.</p>
            <p>To conjugate <em lang="es">hablar</em> in the Present Indicative:</p>
            <ol>
                <li>Remove the <em>-ar</em> ending to give the root stem <em>habl-</em>.</li>
                <li>Add the appropriate endings from the chart above.</li>
            </ol>
            <p>That should give us the following conjugation:</p> 
            <div>
                <table className="conjugation">
                    <caption><em>hablar</em><br/>
                        Present Simple - Indicative</caption>
                    <tbody>
                        <tr>
                            <td colSpan="2" lang="es">hablo</td>
                            <td colSpan="2" lang="es">hablamos</td>
                        </tr>
                        <tr>
                            <td lang="es" style={{backgroundColor: "#f1bf00"}}>hablas</td>
                            <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>hablás</td>                    
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">habláis</td>
                        </tr>
                        <tr>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>habla</span></td>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>hablan</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Using this, you can now express the fact that you speak English</p>
            <p className="example" lang="es">Hablo inglés.</p>
            <p>or you can reference the fact that others might speak English, Spanish, or another language altogether!</p>
            <h3>Conjugation of Regular <em>-er</em> and <em>-ir</em> Verbs:</h3>
            <p>Now that you have seen the process for conjugating regular Spanish verbs that end in <em>-ar</em>, let's look at
            the process for conjugating verbs that end in <em>-er</em> or <em>-ir</em>.  Just like <em>-ar</em> verbs, you'll start
            by removing the <em>-er</em> or <em>-ir</em> to get the stem of the verb.  Then, add these endings:</p>
            <div className="grid">
                <div>
                    <table className="conjugation one">
                        <caption><em>-er</em> verb endings<br/>
                            Present Simple - Indicative</caption>
                        <tbody>
                            <tr>
                                <td colSpan="2" lang="es">-o</td>
                                <td colSpan="2" lang="es">-emos</td>
                            </tr>
                            <tr>
                                <td lang="es" style={{backgroundColor: "#f1bf00"}}>-es</td>
                                <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>-és</td>                    
                                <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">-éis</td>
                            </tr>
                            <tr>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>-e</span></td>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>-en</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className="conjugation two">
                        <caption><em>-ir</em> verb endings<br/>
                            Present Simple - Indicative</caption>
                        <tbody>
                            <tr>
                                <td colSpan="2" lang="es">-o</td>
                                <td colSpan="2" lang="es">-imos</td>
                            </tr>
                            <tr>
                                <td lang="es" style={{backgroundColor: "#f1bf00"}}>-es</td>
                                <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>-ís</td>                    
                                <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">-ís</td>
                            </tr>
                            <tr>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>-e</span></td>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>-en</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>Just as we did with <em lang="es">hablar</em>, let's conjugate the regular verbs <em lang="es">comer</em> or <em>to eat </em>
            and <em lang="es">abrir</em> or <em>to open</em>.</p>
            <div className="grid">
                <div>
                    <table className="conjugation one">
                        <caption><em>comer</em><br/>
                            Present Simple - Indicative</caption>
                        <tbody>
                            <tr>
                                <td colSpan="2" lang="es">como</td>
                                <td colSpan="2" lang="es">comemos</td>
                            </tr>
                            <tr>
                                <td lang="es" style={{backgroundColor: "#f1bf00"}}>comes</td>
                                <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>comés</td>                    
                                <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">coméis</td>
                            </tr>
                            <tr>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>come</span></td>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>comen</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className="conjugation two">
                        <caption><em>abrir</em><br/>
                            Present Simple - Indicative</caption>
                        <tbody>
                            <tr>
                                <td colSpan="2" lang="es">abro</td>
                                <td colSpan="2" lang="es">abrimos</td>
                            </tr>
                            <tr>
                                <td lang="es" style={{backgroundColor: "#f1bf00"}}>abres</td>
                                <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>abrís</td>                    
                                <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">abrís</td>
                            </tr>
                            <tr>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>abre</span></td>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>abren</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>Knowing these verb conjugations may seem simple at first, but they actually open up doors to conjugation of several 
            verbs in the Spanish language.</p>
            <p>That being said, notice that throughout our lessons so far on verbs, we've been very specific on defining these conjugations
            as being relevant to the Present Simple tense only, and we've been even more specific than that.  The Spanish language actually has 
            various moods of verbs, and the conjugations we've been looking at are specific to the Indicative mood.  You don't need to 
            worry about that for now.  Just know that you can now construct several basic sentences using your name, pronouns, and regular 
            verbs:</p>
            <p className="example">
                <em lang="es">Vivo en Chicago.</em> = I live in Chicago.<br/>
                <em lang="es" style={{color: "#f1bf00"}}>Los sábados, comes huevos.</em> = On Saturdays, you eat eggs.<br/>
                <em lang="es-419" style={{color: "lightskyblue"}}>Hablás español.</em> = You speak Spanish.<br/>
                <em lang="es">Ella abre la puerta.</em> = She opens the door.<br/>
                <em lang="es">Amamos a nuestros padres.</em> = We love our parents.<br/>
                <em lang="es" style={{color: "#b81140"}}>Teméis la verdad.</em> = You fear the truth.<br/>
                <em lang="es">Ellos aprenden bien.</em> = They learn well.<br/> 
            </p>
            <p>The last example above comes from the verb <em>aprender</em>, which is a regular <em>-er</em> verb.  As you can see above,
            it follows the standard pattern of conjugation.</p>
            <p>For all this discussion about "regular" verbs in Spanish, just as in English, there are <strong>several</strong> verbs that are irregular.  
            The next lesson will look at how to conjugate the most common of these in the Present Indicative.</p>  
        </div>
        <Box mt={4}>
          <Link className="next-link" exact="true" to="/quizzes/7">Take Quiz!</Link>
          <br/>
          <Link className="next-link" exact="true" to="/lessons/8">Next Lesson: Commonly Used Irregular Verbs →</Link>
        </Box>
        <Copyright />
      </div>
    );
  }
  
  export default Lesson7;