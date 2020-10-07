import React from 'react'
import { Link } from 'react-router-dom';

function Lesson13() {

    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
          <h1>Indirect Object Pronouns</h1>
          <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3>Direct vs. Indirect Pronouns in English</h3>
             <p>In the English language, we don't often differentiate between direct and indirect object pronouns. Consider this sentence which began our last lesson.</p>
            <p className="example">When does Sarah read the book to her daughter?<br/>
            <em>She</em> reads <em>it</em> to <em>her</em> every night.</p>
            <p>In the last lesson, we talked about how the pronoun <em>it</em> is the direct object pronoun. In this lesson, we'll look at how the pronoun <em>her</em> is
            functioning.</p>
            <p><strong>Indirect object pronouns</strong> tell us who an action is being done to through the direct object. In the case above, Sarah reads the book directly, but to whom? That is the question
            answered by the indirect object pronoun <em>her</em>, which is a substitue for Sarah's daughter.</p>
            <p>Think of the difference between direct and indirect objects this way: if in English, you would say that the action is being done <strong>to</strong> someone in the sentence itself, it's 
            an indirect object pronoun. If wording the pronoun by connecting it to the verb with <em>to</em> doesn't make sense, it's a direct object pronoun.</p>
            <p>Consider the following examples and see if you can determine if the italicized words are direct object pronouns or indirect object pronouns:</p>
            <p className="example">
                He loves <em>him</em>.<br/>
                I give the newspaper to <em>her</em> every night.<br/>
                We see <em>hir</em> every Saturday at lunch.<br/>
                You speak very clearly to <em>them</em>.<br/>
                I feed <em>it</em> plant food if it looks unhealthy.
            </p>
            <p>Let's break them down:</p>
            <ol>
                <li><p className="example">He loves <em>him</em>.</p>
                In English, we would never say <em>He loves to him</em>. The last word in this sentence, therefore, is a direct object pronoun.</li>
                <li><p className="example">I give the newspaper to <em>her</em> every night.</p>
                We clearly see <em>to her</em> in this sentence, so this pronoun is an indirect object pronoun.</li>
                <li><p className="example">We see <em>hir</em> every Saturday at lunch.</p>
                Similar to the first sentence, we wouldn't say <em>We see to hir</em>, so <em>hir</em> is a direct object pronoun.</li>
                <li><p className="example">You speak very clearly to <em>them</em>.</p>
                Like the second sentence, <em>to them</em> is very clearly stated here, so this is an indirect object pronoun.</li>
                <li><p className="example">I feed <em>it</em> plant food if it looks unhealthy.</p>
                As this sentence is structured now, <em>it</em> appears to be a direct object pronoun due to the absences of <em>to</em> connecting it to the verb. However, we
                could also word this sentence another way:
                <p className="example">I feed plant food to <em>it</em> if it looks unhealthy.</p>
                It's less likely we would word the sentence this way as native English speakers, but because we CAN and the sentence retains its original meaning, <em>it</em> in this case is an
                indirect object pronoun.</li>
            </ol>
             <h3>Spanish Indirect Object Pronouns</h3>
             <p>Here is the chart of Spanish indirect object pronouns. Again, you should compare this chart to the reflexive pronoun and direct object pronoun charts.</p>
            <div>
                <table>
                <caption>Spanish Indirect Object Pronouns</caption>
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
                        <th scope="row">Third Person</th>
                        <td>le</td>
                        <td>les</td>
                    </tr>
                    </tbody>
                </table>
        </div>
        <p>Again, the first and second person forms are identical here to their counterparts in the previous two lessons.</p>
        <p>Regarding third-person usage, <em lang="es">le</em> would be used for any indirect object pronoun that corresponds to <em>él</em>,
        <em> ella</em>, <em>elle</em>, or <em>usted</em>, while <em lang="es">les</em> would be used for any indirect object pronoun that corresponds to 
        <em> ellos</em>, <em>ellas</em>, <em>elles</em>, or <em>ustedes</em>.</p>
        <p>It should also be noted that, like reflexive/reciprocal and direct object pronouns, indirect object pronouns are typically placed before the verb they connect to.</p>
        <p>Let's look at a brief example:</p>
        <p className="example">I write to them every week.<br/>
        <em lang="es">Yo les escribo todas las semanas.</em></p>
        <p>Notice the structure in the above sentence, the subject pronoun, which in this case is optional because of the verb, comes first. The indirect object pronoun is next, followed by the verb.</p>
        <p>In the next lesson, we'll take a look at how to utilize direct and indirect object pronouns together.
        </p>
          </div>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/quizzes/13">Take Quiz!</Link>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/14">Combining Direct and Indirect Object Pronouns →</Link>
      </div>
    );
  }
  
  export default Lesson13;