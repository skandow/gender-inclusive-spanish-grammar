import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Lesson6() {
    const user = useSelector(state => state.user)
    let serMessage 
    let estarMessage 
    if (user.preferred_pronouns.substr(0, 2) === "he") {
        serMessage = 'He is fun. = Él es divertido.'
        estarMessage = 'He is funny. = Él está divertido.'
    } else if (user.preferred_pronouns.substr(0, 3) === "she") {
        serMessage = 'She is fun. = Ella es divertida.'
        estarMessage = 'She is funny. = Ella está divertida.'
    } else {
        serMessage = 'Ze is fun. = Elle es divertide.'
        estarMessage = 'Ze is funny. = Elle está divertide.'
    }
    
    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
          <h1>The Verb <em lang="es">Estar</em></h1>
          <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
          <h3>"To Be" or... "To Be"...?:</h3>
        <p>In an earlier lesson, we learned about the verb <em lang="es">ser</em>.  To review:
        </p> 
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
        <p>In the Spanish language, however, there are actually two verbs that translate to the English verb <em>to be</em>.  The
            first is the above verb <em lang="es">ser</em>.  The second is <em lang="es">estar</em>.  Let's take a look at a few
            different contexts in which these verbs are used:</p>
            <div className="grid">
                <p className="example one">
                    She is tall. =<br/> <em lang="es">Ella es alta.</em><br/><br/>
                    I am from the United States. =<br/> <em lang="es">Soy de los Estados Unidos.</em><br/><br/>
                    It's 6:45. =<br/> <em lang="es">Son las siete menos cuarto.</em></p>
                <p className="example two">
                    Eric is happy. =<br/> <em lang="es">Eric está feliz.</em><br/><br/>
                    We are at home. =<br/> <em lang="es">Nosotres estamos en casa.</em><br/><br/>
                    They are cleaning the bathroom. =<br/> <em lang="es">Ellos están limpiando el baño.</em></p>
                </div>
            <p>The above examples represent the broadest use of <em lang="es">ser</em> and <em lang="es">estar</em> in comparison
            with the English verb <em>to be</em>.</p>
        <div className="grid">
            <div className="one box">
            <p>Use <em lang="es">ser</em> as the Spanish verb for the English equivalent <em>to be</em> 
            in the following cases:</p>
            <ol>
                <li>To discuss physical characteristics (tall, short, thin, fat, red-headed, blonde, etc.) or characteristics that
                    are of a long-term or permanent nature (occupation, role in family, etc.)</li>
                <li>To discuss nationality, place of origin, or any other demographic fact about yourself</li>
                <li>To reference time</li>
            </ol>
            </div>
            <div className="two box">
            <p>Use <em lang="es">estar</em> as the Spanish verb for the English equivalent <em>to be</em> in the following cases:</p>
            <ol>
                <li>To discuss emotions or other temporary characteristics (sick, confused, etc.)</li>
                <li>To discuss a person's geographic location</li>
                <li>To use the present progressive tense (which will be discussed in a later section)</li>
            </ol>
            </div>
        </div>
        <h3>The Conjugation of <em lang="es">Estar</em>:</h3>
        <p>Here are the conjugations of the two verbs in Spanish that signify <em>to be</em> in English:</p>
        <div className="grid">
            <table className="conjugation one">
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
            <table className="conjugation two">
                        <caption><em>estar</em><br/>
                        Present Simple - Indicative</caption>
                    <thead>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="2" lang="es">estoy</td>
                            <td colSpan="2" lang="es">estamos</td>
                        </tr>
                        <tr>
                            <td lang="es" style={{backgroundColor: "#f1bf00"}}>estás</td>
                            <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>estás</td>                    
                            <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">estáis</td>
                        </tr>
                        <tr>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>está</span></td>
                            <td colSpan="2" lang="es"><span style={{color: "#006341"}}>están</span></td>
                        </tr>
                        </tbody>
                </table>
        </div>
        <p>Notice that most forms of the conjugated verb <em lang="es">estar</em> have accents on the letter <em>á</em>.  These 
        are NOT optional in writing or in speech.  In fact, not including them with the words above will result in a completely 
        different word in the Spanish language!</p>
        <p>Let's take a look at how we can use both verbs to describe someone.  The adjective <em>kind</em> or <em lang="es">amable </em>
        in Spanish describes a permanent characteristic of one's personality, so it should be used with the verb <em lang="es">ser</em>,
        while the adjective <em>sad</em> or <em lang="es">triste</em> in Spanish describes a temporary emotion, so it should be used 
        with the verb <em lang="es">estar</em>.</p>
        <div className="grid">
                <p className="example one" lang="es"><em>Soy</em> amable.<br/>
                    <span style={{color: "#f1bf00"}}><em>Eres</em> amable.</span><br/>
                    <span style={{color: "lightskyblue"}}><em lang="es-419">Sos</em> amable.</span><br/>
                    Él <em>es</em> amable.<br/>
                    Ella <em>es</em> amable.<br/>
                    Elle <em>es</em> amable.<br/>
                    <span style={{color: "#006341"}}>Usted <em>es</em> amable.</span><br/>
                    <em>Somos</em> amables.<br/>
                    <span style={{color: "#b81140"}}><em>Sois</em> amables.</span><br/>
                    Ellos <em>son</em> amables.<br/>
                    Ellas <em>son</em> amables.<br/>
                    Elles <em>son</em> amables.<br/>
                    <span style={{color: "#006341"}}>Ustedes <em>son</em> amables.</span></p>
                <p className="example two" lang="es"><em>Estoy</em> triste.<br/>
                    <span style={{color: "#f1bf00"}}>Tú <em>estás</em> triste.</span><br/>
                    <span style={{color: "lightskyblue"}}>Vos <em lang="es-419">estás</em> triste.</span><br/>
                    Él <em>está</em> triste.<br/>
                    Ella <em>está</em> triste.<br/>
                    Elle <em>está</em> triste.<br/>
                    <span style={{color: "#006341"}}>Usted <em>está</em> triste.</span><br/>
                    <em>Somos</em> tristes.<br/>
                    <span style={{color: "#b81140"}}><em>Sois</em> tristes.</span><br/>
                    Ellos <em>son</em> tristes.<br/>
                    Ellas <em>son</em> tristes.<br/>
                    Elles <em>son</em> tristes.<br/>
                    <span style={{color: "#006341"}}>Ustedes <em>son</em> tristes.</span></p>
        </div>
        <h3>Changing the Meaning with <em lang="es">Ser</em> and <em lang="es">Estar</em>:</h3>
        <p>Some adjectives will actually change in meaning depending on which verb you choose to use with them.  For example, the
            base adjective associated with both <em>bored</em> and <em>boring</em> is <em lang="es">aburrido</em>.  Depending on
            which verb we use, we convey the meaning we desire:
        </p>
            <div className="grid">
                <p className="example one">
                    Ze <em>is</em> boring. =<br/>
                    <span lang="es">Elle <em>es</em> aburride.</span>
                </p>
                <p className="example two">
                    Ze <em>is</em> bored. =<br/>
                    <span lang="es">Elle <em>está</em> aburride.</span>
                </p>
            </div>
        <p>Another adjective this occurs with is the base adjective for <em>drunk</em>: <em lang="es">borracho</em>:</p>
        <div className="grid">
            <p className="example one">
                He <em>is</em> a drunk. =<br/>
                <span lang="es">Él <em>es</em> borracho.</span>
            </p>
            <p className="example two">
                He <em>is</em> drunk (right now). =<br/>
                <span lang="es">Él <em>está</em> borracho.</span>
            </p>
        </div>
        <h3><em lang="es">Ser</em>, <em lang="es">Estar</em>, and Gendered Adjectives:</h3>
        <p>Now that you can conjugate <em lang="es">ser</em> and <em lang="es">estar</em>, you can now combine these verbs with 
        the appropriate adjectives in order to have yourself desribed appropriately according to your gender identity.  In the following 
        example box, while the pronoun changes, it is always referencing you the user of this web page based on the gender pronoun 
        you entered on the home page.  We'll use the Spanish base adjective <em lang="es">divertido</em>, which when used with 
        <em lang="es">ser</em> means <em>fun</em> and when used with <em lang="es">estar</em> means <em lang="es">funny</em>.</p>
        <div className="grid">
            <p className="example one" id="ser-gender">{serMessage}</p>
            <p className="example two" id="estar-gender">{estarMessage}</p>
        </div>
        <p>Feel free to play around with the option to change your gender identity using the <u>Edit Profile</u> button at the top of the page if you would like 
        to see these sentences for people with other gender identities.</p>
        <p>Now that we've conjugated the two Spanish verbs we use in place of <em>to be</em>, we should look at verb conjugation 
        in general.  That will be featured in the next lesson.</p>    
          </div>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/quizzes/6">Take Quiz!</Link>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/7">Regular Verbs in the Present Indicative →</Link>
      </div>
    );
  }
  
  export default Lesson6;