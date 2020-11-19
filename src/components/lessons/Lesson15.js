import React from 'react'
import { Link } from 'react-router-dom';

function Lesson15() {

    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
            <h1>The Present Progressive and Unique Pronoun Placement</h1>
            <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3>The Present Progressive:</h3>
            <p>So far, we've explored two verb tenses, both in the indicative mood: the present simple and the present perfect. Consider these two sentences in English and Spanish:</p>
            <p className="example">Present Simple:<br/>
                I speak to my class every day.<br/>
                <em lang="es">Hablo con mi clase todos los días.</em><br/><br/>
                Present Perfect:<br/>
                I have spoken with my class every day this week.<br/>
                <em lang="es">He hablado con mi clase todos los días de esta semana.</em></p>
            <p>In English, there is a third tense in the present: the present continuous, or as it's called in Spanish: the present progressive. This tense is typically used to indicate an
            action occuring in the present that began sometime in the past or an action that will happen in the near future.</p>
            <p className="example">Present Progressive:<br/>
                I am speaking to my class right now.<br/>
                <em lang="es">Estoy hablando con mi clase ahora mismo.</em></p>
            <p>The present progressive is rather simple to form in Spanish. It requires conjugating the verb <em lang="es">estar</em> based on 
            the subject of the sentence and combining it with the present participle, which is regularly formed by doing the following:</p>
            <ol>
                <li>Take the infinitive of the verb and remove the last two letters (<em>-ar</em>, <em>-er</em>, <em>-ir</em>)</li>
                <li>Add to the stem one of the following endings:
                    <ul>
                        <li>If the infinitive ends in <em>-ar</em>, add <em>-ando</em></li>
                        <li>If the infinitive ends in <em>-er</em> or <em>-ir</em>, add <em>-iendo</em></li>
                    </ul>
                </li>
            </ol>
            <p>Let's see this with three verbs, utilized with the subject <em lang="es"></em>:</p>
            <p className="example">Infinitive: <em lang="es">amar</em><br/>
                Present Participle: <em lang="es">amando</em><br/>
                Present Progressive: <em lang="es">estoy amando</em><br/><br/>
                Infinitive: <em lang="es">temer</em><br/>
                Present Participle: <em lang="es">temiendo</em><br/>
                Present Progressive: <em lang="es">estoy temiendo</em><br/><br/>
                Infinitive: <em lang="es">vivir</em><br/>
                Present Participle: <em lang="es">viviendo</em><br/>
                Present Progressive: <em lang="es">estoy viviendo</em></p>
            <h3>Irregular Present Participle Construction Rules:</h3>
            <p>Most Spanish verbs, even irregular verbs such as <em lang="es">ser</em> and <em lang="es">ver</em> can form their present participles using the 
            rules above, but there are some exceptions, all of which correspond to <em>-er</em> or <em>-ir</em> verbs:</p>
            <ol>
                <li>
                    If the last letter of the verb stem is a vowel, instead of adding <em>-iendo</em>, add <em>-yendo</em><br/>
                    Infinitve: <em lang="es">creer</em><br/>
                    Present Participle: <em lang="es">creyendo</em>
                </li>
                <li>
                    If the verb stem ends with <em>ll</em> or <em>ñ</em>, instead of adding <em>-iendo</em>, add <em>-endo</em>.<br/>
                    Infinitive: <em lang="es">gruñir</em><br/>
                    Present Participle: <em lang="es">gruñendo</em>
                </li>
                <li>
                    If the infinitive ends in -ir and has one of the three following stem changes in the present tense, it will affect the present participle in the following ways:
                    <ul>
                        <li><em>e --{'>'} i</em> - The stem will change the corresponding <em>e</em> to <em>i</em> in the present participle.<br/>
                        Infinitive: <em lang="es">pedir</em><br/>
                        Present Participle: <em lang="es">pidiendo</em></li>
                        <li><em>e --{'>'} ie</em> - The stem will change the corresponding <em>e</em> to <em>i</em> in the present participle. Note that this doesn't 
                        match the stem change as presented.<br/>
                        Infinitive: <em lang="es">mentir</em><br/>
                        Present Participle: <em lang="es">mintiendo</em></li>
                        <li><em>o --{'>'} ue</em> - The stem will change the corresponding <em>o</em> to <em>u</em> in the present participle. Note that this doesn't 
                        match the stem change as presented.<br/>
                        Infinitive: <em lang="es">dormir</em><br/>
                        Present Participle: <em lang="es">durmiendo</em></li>
                    </ul>
                </li>
            </ol>
            <p>There is one last special present participle: the one for <em lang="es">ir</em>, which is <em lang="es">yendo</em>.</p>
            <h3>Use of Reflexive, Direct, and Indirect Object Pronouns With the Present Progressive:</h3>
            <p>In the examples we've seen with reflexive, direct and indirect object pronouns up to this point, these are placed before the verb they're connected to. The same
                can be true with the Present Progressive.
            </p>
            <p className="example">
                She is showering.<br/>
                <em lang="es">Ella se está duchando.</em><br/><br/>
                I am reading it (masculine noun) now.<br/>
                <em lang="es">Lo estoy leyendo ahora.</em><br/><br/>
                You (singular, familiar) are singing to me.<br/>
                <em lang="es">Me estás cantando.</em><br/><br/>
                We are giving it (feminine noun) to you (plural, familiar, Spain).<br/>
                <em lang="es">Os la estamos dando.</em>
            </p>
            <p>However, there is another option available when using the Present Progressive. The pronoun(s) can be attached to the end 
                of the Present Participle.
            </p>
            <p className="example">
                She is showering.<br/>
                <em lang="es">Ella está duchándose.</em><br/><br/>
                I am reading it (masculine noun) now.<br/>
                <em lang="es">Estoy leyéndolo ahora.</em><br/><br/>
                You (singular, familiar) are singing to me.<br/>
                <em lang="es">Estás cantándome.</em><br/><br/>
                We are giving it (feminine noun) to you (plural, familiar, Spain).<br/>
                <em lang="es">Estamos dándoosla.</em>
            </p>
            <p>Notice in the above example that a tilde is necessary to preserve the proper syllable stress in the Present Progressive form.</p>
            <p>We returned at the end of Part 3 to looking at verbs. We'll explore verbs in much more detail in Part 4.
            </p>
          </div>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/quizzes/15">Take Quiz!</Link>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/16">Next Lesson: The Positive Imperative Mood With Familiar People →</Link>
      </div>
    );
  }
  
  export default Lesson15;