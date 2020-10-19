import React from 'react'
import { Link } from 'react-router-dom';

function Lesson16() {

    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
          <h1>The Positive Imperative Mood with Familiar People</h1>
          <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3>A New Mood:</h3>
             <p>You may have noticed throughout much of Part 1 and 2 that when we discussed verb conjugation in the present tense, we 
                 primarily dealt with something called the <strong>Indicative Mood</strong>. In Spanish, there are three major moods of verbs 
                 to consider. These moods have nothing to do with the tense of the verb, which deals primarily with WHEN the action takes place (in the past, present, 
                 or future).
             </p>
             <p>The first new mood we'll take a look at is the Imperative Mood. In English, we can tell the difference between this and the Present Simple in the Indicative 
                 Sense rather easily:
             </p>
            <p className="example">
            You eat eggs for breaksfast every morning.<br/>
            Eat eggs for breakfast every morning.<br/>
            </p>
            <p>The first sentence provides information about a habit. It gives factual information about an individual. The second gives a command 
                to that individual. In this sense, we see the difference between the Indicative and Imperative.
            </p>
            <p>How do we make the imperative mood in English? The above sentences give the clue. The imperative is formed by taking the same verb as the <em>you</em> form in the present simple and removing the pronoun in front.</p>
            <p>Remember, in English, the pronoun is always necessary in the indicative/declarative mood. It's mood can easily be switched to that of the imperative by removing the pronoun.</p>
            <p className="example">
                You swim six miles before you go to work.<br/>
                Swim six miles before you go to work.<br/><br/>
                You drive more safely than she does.<br/>
                Drive more safely than she does.
            </p>
            <h3>A Review - Addressing "You" in Spanish:</h3>
            <p>Recall that there are numerous ways to say "you" in Spanish. This is important to recall because the imperative mood always implies a "you" as the subject.</p>
            <div>
        <table className="you-chart">
        <caption>The Forms of "You" in Spanish</caption>
                <thead>
                
                <tr>
                    <td colSpan="2">&nbsp;</td>
                    <th colSpan="2" scope="col">Singular</th>
                    <th colSpan="2" scope="col">Plural</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th colSpan="2" scope="row">Second Person</th>
                    <td colSpan="1" lang="es" style={{backgroundColor: "#f1bf00"}}>tú - familiar</td>
                    <td colSpan="1" lang="es-419" style={{backgroundColor: "lightskyblue"}}>vos - familiar</td>                    
                    <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">vosotros/-as/-es - familiar</td>
                </tr>
                <tr>
                    <th colSpan="2" scope="row">Third Person</th>
                    <td colSpan="2" lang="es" style={{backgroundColor: "#006341"}}>usted - formal</td>
                    <td colSpan="2" lang="es" style={{backgroundColor: "#006341"}}>ustedes - formal</td>
                </tr>
                </tbody>
        </table>
        </div>
        <p>It should not surprise you then, that for each of the above ways of say "you", there is a different word in the Spanish language for the command.</p>
        <p>We'll look first at a conjugation chart for the commands of a regular verb for these various "you" possibilities, and in this lesson, we'll primarily focus 
            on how the second-person (familiar) row is formed.
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
                    <th colSpan="2" scope="row">Second Person</th>
                    <td colSpan="1" lang="es" style={{backgroundColor: "#f1bf00"}}>come</td>
                    <td colSpan="1" lang="es-419" style={{backgroundColor: "lightskyblue"}}>comé</td>                    
                    <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">comed</td>
                </tr>
                <tr>
                    <th colSpan="2" scope="row">Third Person</th>
                    <td colSpan="2" lang="es" style={{backgroundColor: "#006341"}}>coma</td>
                    <td colSpan="2" lang="es" style={{backgroundColor: "#006341"}}>coman</td>
                </tr>
                </tbody>
        </table>
        </div>
        <h3>Informal Commands in Spanish</h3>
        <p>If you look at the first of the two charts in the previous section, notice that the forms of "you" are labeled 
            as formal and informal. We've been using this distinction as it relates to the relationship the speaker has with the person(s)
            to whom they are referring.
        </p>
        <p>Similarly, when we've been conjugating verbs in the Indicative mood, we've made this distinction the same when referring to verbs that 
            correspond to the familiar forms of you versus the formal.
        </p>
        <p>This correspondence will typically hold with the imperative mood. You'll most often use the commands in the second-person row 
            with individuals with whom you are familiar, while you'll use the commands in the third-person row with individuals you wish to address in a 
            more formal way.
        </p>
        <p>The labelings typically given, however, for these distinctions are <em>informal</em> commands for the <em>familiar</em> and <em>polite</em> or commands for the <em>formal</em>.</p>
        <p>Let's look at the ways to build the commands associated with <em lang="es">tú</em>, <em lang="es-419">vos</em>, and <em lang="es">vosotros/-as/-es</em>.</p>
        <ol>
            <li style={{color: "#b81140"}}><em lang="es">vosotros/-as/-es</em><br/>
            Let's start with one of the easiest conjugations in the Spanish language. To make the <em lang="es">vosotros/-as/-es</em> form of the imperative, simply replace the last letter
            of the infinitive with a <em>d</em>. This method works for ANY Spanish verb.
            <p className="example">caminar - to walk<br/>
            caminad - walk (informal command to group of people)<br/><br/>
            comer - to eat<br/><br/>
            comed - eat (informal command to group of people)<br/><br/>
            abrir - to open<br/>
            abrid - open (informal command to group of people)</p></li>
            <li style={{color: "#f1bf00"}}><em lang="es">tú</em><br/>
            The general rule when making the <em lang="es">tú</em> form of the imperative is to simply use the third-person singular form of the present simple indicative mood.
            <p className="example">caminar - to walk<br/>
            caminas - you walk (present simple indicative)<br/>
            camina - walk (informal command to one person/third person present simple indicative)<br/><br/>
            comer - to eat<br/>
            comes - you eat (present simple indicative)<br/>
            come - eat (informal command to one person/third person present simple indicative)<br/><br/>
            abrir - to open<br/>
            abres - you open (present simple indicative)<br/>
            abre - open (informal command to one person/third person present simple indicative)</p>
            There are a few exceptions to this rule, which we will discuss in the next section.</li>
            <li style={{color: "lightskyblue"}}><em lang="es-419">vos</em><br/>
            To make the <em lang="es-419">vos</em> form of the imperative, remove the final letter of the infinitive, and add an accent to the last remaining letter.
            <p className="example">caminar - to walk<br/>
            caminá - walk (informal command to one person)<br/><br/>
            comer - to eat<br/>
            comé - eat (informal command to one person)<br/><br/>
            abrir - to open<br/>
            abrí - open (informal command one person)
            </p> There is only one exception to this that comes with the verb <em lang="es">ir</em>, which is typically replaced with the verb <em lang="es-419">andá</em></li>

        </ol>
        <h3>Irregular Informal Commands</h3>
        <p>The following table shows the irregular informal commands. These only correspond when the subject is <em lang="es">tú</em>.</p>
        <div>
                <table>
                <caption>Irregular Informal Commands</caption>
                    <thead>
                    
                    <tr>
                        <th scope="col">English</th>
                        <th scope="col">Spanish Infinitive</th>
                        <th scope="col">Spanish Informal Command</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>to be</td>
                        <td>ser</td>
                        <td>sé</td>
                    </tr>
                    <tr>
                        <td>to go</td>
                        <td>ir</td>
                        <td>ve</td>
                    </tr>
                    <tr>
                        <td>to have</td>
                        <td>tener</td>
                        <td>ten</td>
                    </tr>
                    <tr>
                        <td>to come</td>
                        <td>venir</td>
                        <td>ven</td>
                    </tr>
                    <tr>
                        <td>to say</td>
                        <td>decir</td>
                        <td>di</td>
                    </tr>
                    <tr>
                        <td>to put</td>
                        <td>poner</td>
                        <td>pon</td>
                    </tr>
                    <tr>
                        <td>to do/make</td>
                        <td>hacer</td>
                        <td>haz</td>
                    </tr>
                    <tr>
                        <td>to leave</td>
                        <td>salir</td>
                        <td>sal</td>
                    </tr>
                    </tbody>
                </table>
        </div>
            <h3>Positive Commands with Reflexive, Direct Object, and Indirect Object Pronouns</h3>
            <p>When a positive command is given, and a reflexive, direct object, or indirect object pronoun can be attached 
                to the verb. In this case, remember that if there is an indirect object present, it will always appear first.
            </p>
            <p className="example">
                Do it<br/>
                <em lang="es">Hazlo.</em><br/><br/>
                Give it to me.<br/>
                <em lang="es">Dámelo.</em>
            </p>
            <p>Notice in the second example that an accent was needed. For the <em lang="es" style={{color: "#f1bf00"}}>tú</em> and <em lang="es" style={{color: "#b81140"}}>vosotros/-as/-es </em>
            forms of the positive imperative, if more than one pronoun is added OR the imperative is more than one syllable and any pronouns are added, an accent will have to be added 
            to maintain proper syllable stree.</p>
            
        <p>We'll take a look at how to say "no" in Spanish in the next lesson.
        </p>
          </div>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/quizzes/15">Take Quiz!</Link>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/16">The Present Progressive and Unique Pronoun Placement →</Link>
      </div>
    );
  }
  
  export default Lesson16;