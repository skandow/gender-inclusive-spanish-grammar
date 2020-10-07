import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Lesson12() {
    const user = useSelector(state => state.user)
    let subjectPronoun
    let directObjectPronoun
    if (user.preferred_pronouns.substr(0, 2) === "he") {
        subjectPronoun = "él"
        directObjectPronoun = "lo"
    } else if (user.preferred_pronouns.substr(0, 3) === "she") {
        subjectPronoun = "ella"
        directObjectPronoun = "la"
    } else {
        subjectPronoun = "elle"
        directObjectPronoun = "le"
    }

    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
          <h1>Direct Object Pronouns</h1>
          <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3>Object Pronouns in English</h3>
             <p>Let's first review how object pronouns work in English. Take a look at these two sentences:</p>
            <p className="example">When does Sarah read the book to her daughter?<br/>
            <em>She</em> reads <em>it</em> to <em>her</em> every night.</p>
            <p>In the second sentence, the word <em>She</em> is the subject of the second, standing in for <em>Sarah</em> in the first. The other two pronouns, 
            <em> it</em> and <em>her</em>, which replace <em>the book</em> and <em>her daughter</em> respectively, are object pronouns. In this lesson, we will focus on 
            the kinds of object pronouns that correspond to <em>it</em> in the above sentence: <strong>direct object pronouns</strong></p>
            <p>Here is the table of object pronouns in English:</p>
            <div>
                <table>
                <caption>English Object Pronouns</caption>
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
                        <td>me</td>
                        <td>us</td>
                    </tr>
                    <tr>
                        <th scope="row">Second Person</th>
                        <td>you</td>
                        <td>you</td>
                    </tr>
                    <tr>
                        <th rowSpan="4" scope="row">Third Person</th>
                        <td>him</td>
                        <td rowSpan="4">them</td>
                    </tr>
                    <tr><td>her</td></tr>
                    <tr><td>hir</td></tr>
                    <tr><td>it</td></tr>
                    </tbody>
                </table>
        </div>
            <p>While <em>it</em> is also used as a subject pronoun in English, our chart in the first lesson didn't reference it much because in Spanish, the word for <em>it</em> - <em lang="es">ello</em> is
            used infrequently, and it is almost always used as an object pronoun when it is.</p>
            <h3>What are Direct Object Pronouns?</h3>
            <p>Direct object pronouns are object pronouns that are the direct recipients of a particular action. In a sentence, the direct object should be able to be directly connected
                to the verb.
            </p>
            <p>Consider these examples, all of which have the direct object italicized:</p>
            <p className="example">I see <em>her</em>.<br/>
            I bake <em>them</em> in the oven for three minutes.<br/>
            You can give <em>it</em> to me later.
             </p>
             <p>Notice in the third sentence that there is another object pronoun - <em>me</em>. This is an <strong>indirect object pronoun</strong>,
             which we will cover in a later lesson.</p>
             <h3>Spanish Direct Object Pronouns</h3>
             <p>Here is the chart of Spanish direct object pronouns. Compare this chart to the reflexive pronoun chart from the previous lesson.</p>
            <div>
                <table>
                <caption>Spanish Direct Object Pronouns</caption>
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
                        <td>me</td>
                        <td>nos</td>
                    </tr>
                    <tr>
                        <th scope="row">Second Person</th>
                        <td>te</td>
                        <td style={{backgroundColor: "#b81140"}}>os</td>
                    </tr>
                    <tr>
                        <th rowSpan="3" scope="row">Third Person</th>
                        <td>lo</td>
                        <td>los</td>
                    </tr>
                    <tr>
                        <td>la</td>
                        <td>las</td>
                    </tr>
                    <tr>
                        <td>le</td>
                        <td>les</td>
                    </tr>
                    </tbody>
                </table>
        </div>
        <p>Note that the first and second person forms are identical here to their reflexive/reciprocal pronoun counterparts.</p>
        <p>The third person forms are where things can get tricky in translation. Here are three things to consider:</p>
        <ol> 
            <li>If you recall the rules regarding gender as they apply to Spanish subject pronouns in the third person, you will be able to find most of the corresponding direct object pronouns to use:
            <table style={{width: "100%"}}>
            <caption>Subject - Direct Object Pronoun Correspondence</caption>
            <thead>
            </thead>
            <tbody>
                <tr>
                <th scope="column">Subject Pronoun</th>
                <th scope="column">Reference</th>
                <th scope="column">Corresponding Direct Object Pronoun</th>
                </tr>
                <tr>
                    <td lang="es">él</td>
                    <td>singular masculine identifying person</td>
                    <td lang="es">lo</td>
                </tr>
                <tr>
                    <td lang="es">ella</td>
                    <td>singular feminine identifying person</td>
                    <td lang="es">la</td>
                </tr>
                <tr>
                    <td lang="es">elle</td>
                    <td>singular non-binary identifying person</td>
                    <td lang="es">le</td>
                </tr>
                <tr>
                    <td lang="es">ellos</td>
                    <td>group of masculine (or mixed) identifying persons</td>
                    <td lang="es">los</td>
                </tr>
                <tr>
                    <td lang="es">ellas</td>
                    <td>group of feminine identifying person</td>
                    <td lang="es">las</td>
                </tr>
                <tr>
                    <td lang="es">elles</td>
                    <td>group of non-binary (or mixed) identifying person</td>
                    <td lang="es">les</td>
                </tr>
            </tbody>
        </table>
        </li>
        <li>If the direct object pronoun's English equivalent is <em>it</em>, you will need to know the gender of the noun <em>it</em> is
        replacing, and then match that to its corresponding gender equivalent in the chart above. Take a look at these two examples:
        <p className="example">Do you see the car?<br/>
        Yes, I see it.<br/><br/>
        Do you see the store?<br/>
        Yes, I see it.</p>
        In English, the second of each of these sentences is the same. This will not be the case in Spanish:
        <p className="example"lang="es">¿Ves el coche? - <em>el coche</em> is a masculine noun<br/>
        Sí, lo veo.<br/><br/>
        ¿Ves la tienda? - <em>la tienda</em> is a feminine noun<br/>
        Sí, la veo.</p>
        Notice here that like reflexive/reciprocal pronouns, direct object pronouns are typically placed <strong>before</strong> the verb they're connected to.
        </li>
        <li>Remember that <em style={{color: "#006341"}} lang="es">usted</em> and <em style={{color: "#006341"}} lang="es">ustedes</em> follow the pattern of third person pronouns 
        in the Spanish language. The same is true here. This means that you must be aware of the gender identity of the person(s) you are referencing when using the formal you in its singular 
        or plural forms. Recall that in Latin America, <em style={{color: "#006341"}} lang="es">ustedes</em> is the only equivalent to English's plural <em>you</em>.
        <p>Let's see how this plays out with the various forms of <em style={{color: "#006341"}} lang="es">usted</em> and <em style={{color: "#006341"}} lang="es">ustedes</em> to say:</p>
        <p className="example">I hear you<br/><br/>
        Referencing formally a singular:<br/>
        Masculine-identifying person: <em lang="es">Lo oigo.</em><br/>
        Feminine-identifying person: <em lang="es">La oigo.</em><br/>
        Non-binary-identifying person: <em lang="es">Le oigo.</em><br/><br/>
        Referencing (formally in Spain) a group of:<br/>
        Masculine-identifying (or mixed) persons: <em lang="es">Los oigo.</em><br/>
        Feminine-identifying persons: <em lang="es">Las oigo.</em><br/>
        Non-binary-identifying (or mixed) persons: <em lang="es">Les oigo.</em>
        <em lang="es"></em></p></li>
        </ol>
        <p>With these rules in mind, you can now expand your Spanish pronoun list.</p>
        <p>Your subject pronoun: <span style={{border: "1px solid black", padding: "2px"}}>{subjectPronoun}</span></p>
        <p>Your direct object pronoun: <span style={{border: "1px solid black", padding: "2px"}}>{directObjectPronoun}</span></p>
        <p>We'll next explore the other type of object pronoun: indirect object pronouns.
        </p>
          </div>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/quizzes/12">Take Quiz!</Link>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/13">Indirect Object Pronouns →</Link>
      </div>
    );
  }
  
  export default Lesson12;