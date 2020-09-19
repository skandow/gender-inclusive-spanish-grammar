import React from 'react'
import { Link } from 'react-router-dom'

function Lesson10() {
    
    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
          <h1>Stem-Changing Verbs</h1>
          <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
          <h3>How Stem-Changing Verbs Work</h3>
        <p>We've taken a look at how to conjugate regular and irregular verbs in the present indicative.  There is another category of verbs
            that utilizes the regular endings we've taken a look at.  However, when they are conjugated, the stem - or, the part of the verb that 
            remains after removing the <em>-ar</em>, <em>-er</em>, or <em>-ir</em> ending - changes.  Let's see how this operates in the conjugation 
            of another important verb in Spanish: <em lang="es">querer</em> <em>(e --{'>'} ie)</em>, which means <em>to want</em> or <em>to love</em>:
        </p>
        <div>
            <table className="conjugation">
            <caption><em>querer (e --{'>'} ie)</em><br/>
                    Present Simple - Indicative</caption>
                <thead>
                    
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan="2" lang="es">quiero</td>
                        <td colSpan="2" lang="es">queremos</td>
                    </tr>
                    <tr>
                        <td lang="es" style={{backgroundColor: "#f1bf00"}}>quieres</td>
                        <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>querés</td>                    
                        <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">queréis</td>
                    </tr>
                    <tr>
                        <td colSpan="2" lang="es"><span style={{color: "#006341"}}>quiere</span></td>
                        <td colSpan="2" lang="es"><span style={{color: "#006341"}}>quieren</span></td>
                    </tr>
                    </tbody>
            </table>
        </div>
        <p>Notice in the chart above that after the infinitive is presented, we are given an explanation of a vowel change that 
            will need to happen: <em>e --{'>'} ie</em>.  Let's take a look at how we conjugated this verb using this information, 
            following the steps that we learned with regular verbs but adding one additional step to account for the stem change.
        </p>
        <ol>
            <li>Remove the <em>-er</em> to form the base stem of the verb: <em>quer-</em>.</li>
            <li>Add the appropriate endings for <em>-er</em> verbs:
                <div>
                    <table className="conjugation">
                    <caption><em>querer (e --{'>'} ie)</em><br/>
                            Present Simple - Indicative</caption>
                        <thead>
                            
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan="2" lang="es">quero</td>
                                <td colSpan="2" lang="es">queremos</td>
                            </tr>
                            <tr>
                                <td lang="es" style={{backgroundColor: "#f1bf00"}}>queres</td>
                                <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>querés</td>                    
                                <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">queréis</td>
                            </tr>
                            <tr>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>quere</span></td>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>queren</span></td>
                            </tr>
                            </tbody>
                    </table>
                </div>
            </li>
            <li>Change the appropriate vowel as provided with the infinitive for the following forms of the verb:
                <ul>
                    <li>yo</li>
                    <li style={{color: "#f1bf00"}}>tú</li>
                    <li>third person singular</li>
                    <li>third person plural</li>
                </ul>
                <div>
                    <table className="conjugation">
                    <caption><em>querer (e --{'>'} ie)</em><br/>
                            Present Simple - Indicative</caption>
                        <thead>
                            
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan="2" lang="es">quiero</td>
                                <td colSpan="2" lang="es">queremos</td>
                            </tr>
                            <tr>
                                <td lang="es" style={{backgroundColor: "#f1bf00"}}>quieres</td>
                                <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>querés</td>                    
                                <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">queréis</td>
                            </tr>
                            <tr>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>quiere</span></td>
                                <td colSpan="2" lang="es"><span style={{color: "#006341"}}>quieren</span></td>
                            </tr>
                            </tbody>
                    </table>
                </div>
            </li>
        </ol>
        <p>If it's easier to remember which forms of the verb you <em>don't</em> change the stems of in the third step, you will 
        never do so for the <em lang="es-419" style={{color: "lightskyblue"}}>vos</em>, <em lang="es">nosotros/-as/-es</em>, or
        <em lang="es" style={{color: "#b81140"}}> vosotros/-as/-es</em> forms.</p>
        <h3>The Five Types of Stem Changes:</h3>
        <p>Most sources involved in teaching Spanish as a foreign language (textbooks, websites, etc.) will provide the appropriate 
            stem change when introducing the infinitive of a verb that requires it, just as <em lang="es">querer</em> was introduced above
            with its stem change <em>e --{'>'} ie</em>.  There are four other types of stem changes.  Let's see how each of these operate with
            an example of each:
        </p>
        <h4><em lang="es">pedir</em><em>(e --{'>'} i)</em> - <em>to ask for</em></h4>
        <div>
            <table className="conjugation">
            <caption><em>pedir (e --{'>'} i)</em><br/>
                    Present Simple - Indicative</caption>
                <thead>
                    
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan="2" lang="es">pido</td>
                        <td colSpan="2" lang="es">pedimos</td>
                    </tr>
                    <tr>
                        <td lang="es" style={{backgroundColor: "#f1bf00"}}>pides</td>
                        <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>pedís</td>                    
                        <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">pedís</td>
                    </tr>
                    <tr>
                        <td colSpan="2" lang="es"><span style={{color: "#006341"}}>pide</span></td>
                        <td colSpan="2" lang="es"><span style={{color: "#006341"}}>piden</span></td>
                    </tr>
                    </tbody>
            </table>
        </div>
        <h4><em lang="es">adquirir</em><em>(i --{'>'} ie)</em> - <em>to acquire</em></h4>
        <div>
            <table className="conjugation">
            <caption><em>adquirir (i --{'>'} ie)</em><br/>
                    Present Simple - Indicative</caption>
                <thead>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan="2" lang="es">adquiero</td>
                        <td colSpan="2" lang="es">adquirimos</td>
                    </tr>
                    <tr>
                        <td lang="es" style={{backgroundColor: "#f1bf00"}}>adquieres</td>
                        <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>adquirís</td>                    
                        <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">adquirís</td>
                    </tr>
                    <tr>
                        <td colSpan="2" lang="es"><span style={{color: "#006341"}}>adquiere</span></td>
                        <td colSpan="2" lang="es"><span style={{color: "#006341"}}>adquieren</span></td>
                    </tr>
                    </tbody>
            </table>
        </div>
        <h4><em lang="es">poder</em><em>(o --{'>'} ue)</em> - <em>to be able to</em></h4>
        <div>
            <table className="conjugation">
            <caption><em>poder (o --{'>'} ue)</em><br/>
                    Present Simple - Indicative</caption>
                <thead>
                    
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan="2" lang="es">puedo</td>
                        <td colSpan="2" lang="es">podemos</td>
                    </tr>
                    <tr>
                        <td lang="es" style={{backgroundColor: "#f1bf00"}}>puedes</td>
                        <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>podés</td>                    
                        <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">podéis</td>
                    </tr>
                    <tr>
                        <td colSpan="2" lang="es"><span style={{color: "#006341"}}>puede</span></td>
                        <td colSpan="2" lang="es"><span style={{color: "#006341"}}>pueden</span></td>
                    </tr>
                    </tbody>
            </table>
        </div>
        <h4><em lang="es">jugar</em><em>(u --{'>'} ue)</em> - <em>to play (a sport or game)</em></h4>
        <div>
            <table className="conjugation">
            <caption><em>jugar</em><br/>
                    Present Simple - Indicative</caption>
                <thead>
                    
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan="2" lang="es">juego</td>
                        <td colSpan="2" lang="es">jugamos</td>
                    </tr>
                    <tr>
                        <td lang="es" style={{backgroundColor: "#f1bf00"}}>juegas</td>
                        <td lang="es-419" style={{backgroundColor: "lightskyblue"}}>jugás</td>                    
                        <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">jugáis</td>
                    </tr>
                    <tr>
                        <td colSpan="2" lang="es"><span style={{color: "#006341"}}>juega</span></td>
                        <td colSpan="2" lang="es"><span style={{color: "#006341"}}>juegan</span></td>
                    </tr>
                    </tbody>
            </table>
        </div>
        <h3>Irregular <em lang="es">Yo</em> Forms:</h3>
        <p>In addition to stem-changing and irregular verbs, there is one more category of unique verbs that are worth discussing:
            those whose <em lang="es">yo</em> forms differ from the standard conjugation practices.  We've seen some verbs already 
            where this is the case:</p>
            <ul lang="es">
                <li><em>conocer</em> --{'>'} <em>conozco</em></li>
                <li><em>saber</em> --{'>'} <em>sé</em></li>
                <li><em>tener</em> --{'>'} <em>tengo</em></li>
                <li><em>ver</em> --{'>'} <em>veo</em></li>
            </ul>
        <p>Let's look at some more verbs that have irregular <em lang="es">yo</em> forms:</p>
            <ul>
                <li><em lang="es">caber</em> (to fit) --{'>'} <em lang="es">quepo</em></li>
                <li><em lang="es">caer</em> (to fall) --{'>'} <em lang="es">caigo</em></li>
                <li><em lang="es">dar</em> (to give) --{'>'} <em lang="es">doy</em></li>
                <li><em lang="es">hacer</em> (to do, to make) --{'>'} <em lang="es">hago</em></li>
                <li><em lang="es">poner</em> (to put) --{'>'} <em lang="es">pongo</em></li>
                <li><em lang="es">salir</em> (to leave) --{'>'} <em lang="es">salgo</em></li>
                <li><em lang="es">traducir</em> (to translate) --{'>'} <em lang="es">traduzco</em></li>
                <li><em lang="es">traer</em> (to bring) --{'>'} <em lang="es">traigo</em></li>
                <li><em lang="es">valer</em> (to be worth) --{'>'} <em lang="es">valgo</em></li>
            </ul>
        <p>In addition, there are special rules for the <em lang="es">yo</em> forms of verbs whose infinitives end in <em>-guir</em>,
        <em>-ger</em>, or <em>-gir</em>:</p>
            <ul>
                <li>For verbs that end in <em>-guir</em>, the <em lang="es">yo</em> form removes the <em>-u-</em> after the <em>-g-</em>.
                The verb is then conjugated normally:
                <p className="example"><em lang="es">distinguir</em> (to distinguish) --{'>'} <em lang="es">distingo</em></p></li>
                <li>For verbs that end in <em>-ger</em> or <em>-gir</em>, the <em lang="es">yo</em> form changes the <em>-g-</em>
                to a <em>-j-</em>.  The verb is then conjugated normally:
            <p className="example"><em lang="es">recoger</em> (to pick up) --{'>'} <em lang="es">recojo</em><br/>
            <em lang="es">dirigir</em> (to direct) --{'>'} <em lang="es">dirijo</em></p></li>
            </ul>
        <p>Like our discussion of the irregular past participles, infinitives that add prefixes to any of the above irregular <em lang="es">yo </em>
        examples will see their <em lang="es">yo</em> forms change as well:</p>
        <p className="example" lang="es"><em>poner</em> --{'>'} <em>pongo</em><br/>
        <em>componer</em> --{'>'} <em>compongo</em></p>
        <p>And with that, you should now have a good grasp of two of the many verb tenses in the Spanish language:</p>
            <ol>
                <li>The Present Indicative</li>
                <li>The Present Perfect Indicative</li>
            </ol>
        <p>There are several more verb tenses and forms to learn, but the information provided in this part of the website should provide 
            a solid basis to explore these other forms.  Part 3 will explore the concept of pronouns further in depth.
        </p>
          </div>
      </div>
    );
  }
  
  export default Lesson10;