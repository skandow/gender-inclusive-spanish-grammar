import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Lesson3() {
    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
          <h1>The Verb <em lang="es">Ser</em></h1>
          <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
          <h3>Verb Conjugation:</h3>
        <p>Now that we've looked at subject pronouns, we can begin to explore verb conjugation.  All Spanish
            verbs require conjugation.  English verbs use conjugation, but for most of them, the process is
            rather simple. One of the more complex conjugations occurs with the English verb "to be" in
            the present tense:
        </p> 
        <div>
        <table className="conjugation">
            <caption><em>to be</em><br/>
            Present Simple</caption>
            <thead>
            
            </thead>
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
        <p>Notice that with this verb, the word <em>are</em> appears in multiple boxes.
            Remember this when we look at our first conjugated Spanish verb.
            For now, let's look at how these conjugations operate in a sentence:</p>
            <p className="example">I <em>am</em> intelligent.<br/>
            You <em>are</em> intelligent.<br/>
            He <em>is</em> intelligent.<br/>
            She <em>is</em> intelligent.<br/>
            Ze <em>is</em> intelligent.<br/>
            We <em>are</em> intelligent.<br/>
            You (all) <em>are</em> intelligent.<br/>
            They <em>are</em> intelligent.</p>

        <h3>Our First Verb Conjugation: <em lang="es">Ser</em></h3>
        <p>Let's look at the English and Spanish versions of the first example above:</p>
        <p className="example">I <em>am</em> intelligent.<br/>
        translates to:<br/>
        <span lang="es">Yo <em>soy</em> inteligente.</span></p>
        <p>Let's look at the conjugation of the Spanish verb in this sentence:</p>
        <div>
        <table id="conjugation-1">
        <caption><em>ser</em><br/>
                Present Simple - Indicative</caption>
                <thead>
                </thead>
                <tbody>
                <tr>
                    <td colSpan="2" lang="es">yo soy</td>
                    <td colSpan="2" lang="es">nosotros/-as/-es somos</td>
                </tr>
                <tr>
                    <td lang="es" style={{backgroundColor: "#f1bf00"}}>tú eres</td>
                    <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>vos sos</td>                    
                    <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">vosotros/-as/-es sois</td>
                </tr>
                <tr>
                    <td colSpan="2" lang="es">él/ella/elle es</td>
                    <td colSpan="2" lang="es">ellos/-as/-es son</td>
                </tr>
                <tr>
                    <td colSpan="2" lang="es" style={{backgroundColor: "#006341"}}>usted es</td>
                    <td colSpan="2" lang="es" style={{backgroundColor: "#006341"}}>ustedes son</td>
                </tr>
                </tbody>
        </table>
        </div>
        <p>A few things to note:</p>
        <ol>
            <li>The chart follows a very similar pattern to the Spanish Subject Pronoun chart.  Take a look 
                at this <HashLink exact="true" to="/lessons/2#subject-pronoun-chart">reminder</HashLink> if you need
                it.</li>
            <li>Because Spanish verb conjugation results in verbs that clearly go with a particular subject
                pronoun, Spanish speakers will often omit the pronoun with verbs associated with first-person and second-person singular
                and plural subjects.  The verb can stand in for both the 
                subject pronoun and the verb itself.  So:
                <p className="example">Yo <em>soy</em> inteligente.<br/>
                can also be expressed by simply stating:<br/>
                <em>Soy</em> inteligente.</p>
            </li>
            <li>Because <em style={{color: "#006341"}}>usted</em> and <em style={{color: "#006341"}}>ustedes</em> appear in the third-person singular and plural 
                parts of the Subject Pronoun chart respectively, they share the same verb conjugation as the 
                other third-person pronouns in their respective categories.  This is why:
                <p className="example">You (formal/singular) <em>are</em> intelligent.<br/>
                and<br/>
                He <em>is</em> intelligent.</p>
                translate to:
                <p className="example"><span style={{color: "#006341"}}>Usted <em>es</em> inteligente.</span><br/>
                and<br/>
                Él <em>es</em> inteligente.</p>
                with both subject pronouns using the <strong>same</strong> verb.<br/>
                Because of this, you <strong>should</strong> as a rule state the subject
                of the sentence when using verbs associated with third-person singular or plural subjects.</li>
        </ol>
        <h3>The Spanish Verb Conjugation Chart:</h3>
        <p>Because of the specificity of the subject-verb relationship, all remaining verb conjugation 
            charts on this site will use the following table format:.</p>
                <div>
                    <table id="conjugation-2">
                    <caption>Subject/Verb Chart</caption>
                            <thead>
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan="2" lang="es">yo</td>
                                <td colSpan="2" lang="es">nosotros/-as/-es</td>
                            </tr>
                            <tr>
                                <td lang="es" style={{backgroundColor: "#f1bf00"}}>tú</td>
                                <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>vos</td>                    
                                <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">vosotros/-as/-es</td>
                            </tr>
                            <tr>
                                <td colSpan="2" lang="es">él/ella/elle/<span style={{color: "#006341"}}>usted</span>/<br/>
                                    all singular nouns</td>
                                <td colSpan="2" lang="es">ellos/-as/-es/<span style={{color: "#006341"}}>ustedes</span>/<br/>
                                    all plural nouns</td>
                            </tr>
                            </tbody>
                    </table>
                </div>
            <p>Our conjugation chart of the verb <em>ser</em> will now appear like so:</p>
                <div>
                    <table className="conjugation">
                    <caption><em>ser</em><br/>
                            Present Simple - Indicative</caption>
                            <thead>
                            
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan="2" lang="es">soy</td>
                                <td colSpan="2" lang="es">somos</td>
                            </tr>
                            <tr>
                                <td lang="es" style={{backgroundColor: "#f1bf00"}}>eres</td>
                                <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>sos</td>                    
                                <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">sois</td>
                            </tr>
                            <tr>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>es</span></td>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>son</span></td>
                            </tr>
                            </tbody>
                    </table>
                </div>
            <p>Let's use this chart to create the Spanish equivalents of the English sentences at the 
                top of this page:
            </p>
            <p className="example" lang="es"><em>Soy</em> inteligente.<br/>
                <span style={{color: "#f1bf00"}}><em>Eres</em> inteligente.</span><br/>
                <span style={{color: "lightskyblue"}}><em lang="es-419">Sos</em> inteligente.</span><br/>
                Él <em>es</em> inteligente.<br/>
                Ella <em>es</em> inteligente.<br/>
                Elle <em>es</em> inteligente.<br/>
                <span style={{color: "#006341"}}>Usted <em>es</em> inteligente.</span><br/>
                <em>Somos</em> inteligentes.<br/>
                <span style={{color: "#b81140"}}><em>Sois</em> inteligentes.</span><br/>
                Ellos <em>son</em> inteligentes.<br/>
                Ellas <em>son</em> inteligentes.<br/>
                Elles <em>son</em> inteligentes.<br/>
                <span style={{color: "#006341"}}>Ustedes <em>son</em> inteligentes.</span></p>
            <p>You may have noticed that the adjective for intelligent - <em lang="es">inteligente</em> - changed
            once the examples shifted to the plural side of things.  This is a good time to discuss next
            how nouns and adjectives work in Spanish.</p>
          </div>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/quizzes/3">Take Quiz!</Link>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/4">Nouns →</Link>
      </div>
    );
  }
  
  export default Lesson3;