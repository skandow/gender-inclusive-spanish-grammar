import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Lesson2() {
    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
          <h1>Subject Pronouns</h1>
          <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3>English Subject Pronouns - How Do They Work?</h3>
            <p>Subject pronouns tell who is doing the action in a particular sentence:</p> 
            <p className="example"><strong><em>He</em> is watching a movie.</strong><br/>
            In this sentence, the word <em>He</em> tells us who is doing the action (is watching).</p>
        <p>Look at the table below to see the subject pronouns you are used to using in English.</p>
            <div>
                <table>
                <caption>English Subject Pronouns</caption>
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
                        <td>I</td>
                        <td>we</td>
                    </tr>
                    <tr>
                        <th scope="row">Second Person</th>
                        <td>you</td>
                        <td>you</td>
                    </tr>
                    <tr>
                        <th rowSpan="3" scope="row">Third Person</th>
                        <td>he</td>
                        <td rowSpan="3">they</td>
                    </tr>
                    <tr><td>she</td></tr>
                    <tr><td>ze</td></tr>
                    </tbody>
                </table>
        </div>
        <p>Note that the word <em>you</em> appears twice in the above table.  In English, we use the same
        word to denote addressing one person or a group of people.  This differentiation, however,
        will be important as we look at the Spanish subject pronouns below.</p>
        <h3>A First Look at Spanish Subject Pronouns:</h3>
        <div>
        <table id="subject-pronoun-chart">
        <caption>Spanish Subject Pronouns</caption>
                <thead>
                
                <tr>
                    <td colSpan="2">&nbsp;</td>
                    <th colSpan="2" scope="col">Singular</th>
                    <th colSpan="2" scope="col">Plural</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th rowSpan="3" colSpan="2" scope="row">First Person</th>
                    <td rowSpan="3" colSpan="2" lang="es">yo</td>
                    <td colSpan="2" lang="es">nosotros</td>
                </tr>
                <tr><td colSpan="2" lang="es">nosotras</td></tr>
                <tr><td colSpan="2" lang="es">nosotres<sup><HashLink className="footnote-link" exact="true" to={"/lessons/2#footnote1"}>*</HashLink></sup></td></tr>
                <tr>
                    <th rowSpan="3" colSpan="2" scope="row">Second Person</th>
                    <td rowSpan="3" lang="es" style={{backgroundColor: "#f1bf00"}}>tú</td>
                    <td rowSpan="3" lang="es-419" style={{backgroundColor: "lightskyblue"}}>vos</td>                    
                    <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">vosotros</td>
                </tr>
                <tr>
                    <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">vosotras</td>
                </tr>
                <tr>
                    <td colSpan="2" style={{backgroundColor: "#b81140"}} lang="es">vosotres<sup><HashLink className="footnote-link" exact="true" to={"/lessons/2#footnote1"}>*</HashLink></sup></td></tr>
                <tr>
                    <th rowSpan="4" colSpan="2" scope="row">Third Person</th>
                    <td colSpan="2" lang="es">él</td>
                    <td colSpan="2" lang="es">ellos</td>
                </tr>
                <tr>
                    <td colSpan="2" lang="es">ella</td>
                    <td colSpan="2" lang="es">ellas</td>
                </tr>
                <tr>
                    <td colSpan="2" lang="es">elle<sup><HashLink className="footnote-link" exact="true" to={"/lessons/2#footnote1"}>*</HashLink></sup></td>
                    <td colSpan="2" lang="es">elles<sup><HashLink className="footnote-link" exact="true" to={"/lessons/2#footnote1"}>*</HashLink></sup></td>
                </tr>
                <tr>
                    <td colSpan="2" lang="es" style={{backgroundColor: "#006341"}}>usted</td>
                    <td colSpan="2" lang="es" style={{backgroundColor: "#006341"}}>ustedes</td>
                </tr>
                </tbody>
        </table>
        </div>
        <p className="footnote" id="footnote1"><sup>*</sup>There are several forms of non-binary Spanish subject pronouns.  The final "e" in each
        of these words can also be replaced with "x," "i," "@," and "u." For consistency purposes, all pronoun
        and verb conjugation charts will reference the "e" endings of non-binary pronouns as these are the easiest
        for native Spanish speakers to pronounce.</p>
        <h3>When and How to Use These Pronouns:</h3>
        <p>Compare the Spanish Subject Pronoun chart to the English Subject Pronoun chart.  Let's see how
            these pronouns translate from English to Spanish.</p>
        <dl>
            <dt>First Person Singular</dt>
            <dd>This is the most straight-forward English-to-Spanish translation.  <em>I</em> in 
            English becomes <em>yo</em> in Spanish.<br/>
            <p className="example"><em>I</em> swim in the pool.<br/>
            translates to:<br/>
            <em lang="es">Yo</em> nado en la piscina.</p>
            </dd>
            <dt>Second Person Singular</dt>
            <dd>Around the world, the Spanish language has six different official words that equate to the English
                <em>you</em>.  We add an additional seventh word for the purposes of this website, which is covered
                below when discussing <strong>Second Person Plural</strong>. The context tells which of these seven
                words to use and is dependent on:
                <ol id="you-conditions">
                    <li>Your location</li>
                    <li>Your familiarity with the person to whom you are addressing</li>
                    <li>The gender of the individuals to whom you are addressing</li>
                </ol>
                For the purposes of <strong>Second Person Singular</strong>, we only need to focus on the first 
                two issues.  <em lang="es">Tú</em> and <em lang="es-419">vos</em> are used to address someone
                you are familiar with and know well.  They are used to specifically address one person to whom
                you are addressing.<br/>
                Most of the Spanish-speaking world uses <em lang="es">tú</em>, but this pronoun has actually faded
                out of use in Argentina and its surrounding countries.  In Argentina especially, <em lang="es-419">vos </em>
                has replaced <em lang="es">tú</em> as the second-person-singular subject pronoun.<br/>
                In any chart on this site related to these pronouns, such as verb conjugation and other pronoun uses,
                everything related to <em lang="es" style={{color: "#f1bf00"}}>tú</em> will appear in yellow, while everything
                related to <em lang="es-419" style={{color: "lightskyblue"}}>vos</em> will appear in blue.
                <p className="example"><em>You (familiar/singular)</em> swim in the pool.<br/>
                translates to:<br/>
                <em lang="es" style={{color:"#f1bf00"}}>Tú</em> nadas en la piscina.<br/>
                or:<br/>
                <em lang="es" style={{color: "lightskyblue"}}>Vos</em> nadás en la piscina.</p>
            </dd>
            <dt>Third Person Singular</dt>
            <dd>The first three words in the Spanish Subject Pronoun chart translate rather clearly from 
                their English counterparts. Comparing, we see that <em>he</em> becomes <em lang="es">él</em>, <em>she </em>
                becomes <em lang="es">ella</em>, and <em>ze</em> becomes <em lang="es">elle</em>.
                <p className="example"><em>He</em> swims in the pool.<br/>
                <em>She</em> swims in the pool.<br/>
                <em>Ze</em> swims in the pool.<br/>
                translate respectively to:<br/>
                <em lang="es">Él</em> nada en la piscina.<br/>
                <em lang="es">Ella</em> nada en la piscina.<br/>
                <em lang="es">Elle</em> nada en la piscina.</p> 
                
                So where does <em>usted</em> fit in?<br/><br/>
                This is another word that translates to the English <em>you</em>, but it is used when addressing someone
                with whom you are not very familiar.  It should also be used when addressing people who are superior to you in some
                way, either by age or by role.  For rules associated with verbs and pronouns, if you are addressing
                one person with whom you have this level of familiarity, you will actually look to this area of the chart
                rather than the <strong>Second Person Singular</strong>.  This is called the formal <em>you</em>. For this reason, anything related  
                to <em lang="es" style={{color: "#006341"}}>usted</em> (and its plural counterpart <em lang="es" style={{color: "#006341"}}>ustedes</em>) will appear in green.
                
                <p className="example"><em>You (formal/singular)</em> swim in the pool.<br/>
                translates to:<br/>
                <em lang="es" style={{color: "#006341"}}>Usted</em> nada en la piscina.</p>
            </dd>
            <dt>First Person Plural</dt>
            <dd>The plural Spanish pronouns rely heavily on gender.  Let's look at how native Spanish speakers
                address themselves as part of a group using their equivalent of <em>we</em>:
                <ul>
                    <li><em lang="es">nosotros</em> - used to discuss a group the speaker is in that consists
                    of all masculine-identifying indivudals or a mixed-gender group of individuals</li>
                    <li><em lang="es">nosotras</em> - used to discuss a group the speaker is in that consists
                    only of feminine-identifying individuals</li>
                </ul>
                    This Spanish grammar rule will apply to <em lang="es">vosotros</em> and <em lang="es">vosotras </em>
                    in the <strong>Second Person Plural</strong> as well as <em lang="es">ellos</em> and <em lang="es">ellas </em>
                    in the <strong>Third Person Plural</strong>.  However, <em lang="es">nosotres</em> and its counterparts (<em lang="es">vosotres </em>
                    and <em lang="es">elles</em>) can be used as you see fit for a number of scenarios related to individuals who identify 
                    as non-binary or non-conforming gender, such as:
                    <ul>
                        <li>You are aware of the presence of a non-binary individual in the group you are referencing</li>
                        <li>You are looking for a gender-neutral way to reference a group that doesn't rely on the masculine pronoun</li>
                        <li>You wish to ignore gender rules related to pronoun or adjective construction</li>
                    </ul>
                    Regardless of your reason, you will want to explore ways of explaining your use of <em lang="es">nosotras</em> or
                    <em lang="es">nosotres</em> should you wish to use them in ways deemed "unconvential" for standard
                    Spanish grammar.
                <p className="example"><em>We</em> swim in the pool.<br/>
                therefore, can translate depending on gender to:<br/>
                <em lang="es">Nosotros</em> nadamos en la piscina.<br/>
                <em lang="es">Nosotras</em> nadamos en la piscina.<br/>
                <em lang="es">Nosotres</em> nadamos en la piscina.</p>
            </dd>
            <dt>Second Person Plural</dt>
            <dd>We've already looked at the forms of addressing a single individual.  Unlike English, the Spanish
                language also has subject pronouns when addressing a group of individuals.  In this case, however,
                all three of the conditions mentioned <a href={"#you-conditions"}>above</a> apply when determining which word to use.<br/>
                The words in this part of the chart are <strong>only</strong> used in Spain and a few other areas
                of the Spanish-speaking world.  Therefore, any reference to <em lang="es" style={{color: "#b81140"}}>vosotros</em>,
                <em lang="es" style={{color: "#b81140"}}> vosotras</em>, and <em lang="es" style={{color: "#b81140"}}>vosotres</em> in any grammar chart will appear in red.<br/>  
                In addition to only using these pronouns in Spain, they are only used if you are addressing a group of
                individuals with whom you have some level of familiarity.  Lastly, the rules about gender for the 
                various forms of the <strong>First Person Plural</strong> apply here as well, but here, they apply to
                the gender identities of the individuals in the group to whom you are addressing.
                <p className="example"><em>You (familiar/plural/in Spain)</em> swim in the pool.<br/>
                therefore, can translate depending on gender to:<br/>
                <em lang="es" style={{color: "#b81140"}}>Vosotros</em> nadáis en la piscina.<br/>
                <em lang="es" style={{color: "#b81140"}}>Vosotras</em> nadáis en la piscina.<br/>
                <em lang="es" style={{color: "#b81140"}}>Vosotres</em> nadáis en la piscina.</p>
            </dd>
            <dt>Third Person Plural</dt>
            <dd>Like <em>we</em> and the plural <em>you</em>, <em>they</em> is another example of an English
            subject pronoun that translates to different Spanish words depending on gender roles.  Here, they apply to
            the gender identities of the group you are referencing.
            <p className="example"><em>They</em> swim in the pool.<br/>
            therefore, can translate depending on gender to:<br/>
            <em lang="es">Ellos</em> nadan en la piscina.<br/>
            <em lang="es">Ellas</em> nadan en la piscina.<br/>
            <em lang="es">Elles</em> nadan en la piscina.</p>
            Once again, we have another form of the English pronoun <em>you</em> in the <strong>Third
            Person</strong> row of our chart.  <em lang="es">Ustedes</em>, like <em lang="es">vosotros</em>,
            <em lang="es"> vosotras</em>, and <em lang="es">vosotres</em>, is used to address a group
            of individuals to whom you are addressing.  If you are addressing a group of individuals
            anywhere in the Spanish-speaking world outside of Spain (ie. Latin America), this is the only
            form of the plural <em>you</em> needed.  <em lang="es">Vosotros</em> and its other forms
            are not used.  This makes the decision very simple regaring which word to use when addressing
            a group in Latin America.<br/><br/>
            If you are in Spain, <em>ustedes</em> is only used when addressing a group of people in a formal
            setting.
            <p className="example"><em>You (plural/Latin America or formal/plural/in Spain)</em> swim in the pool.<br/>
            translates to:<br/>
            <em lang="es" style={{color: "#006341"}}>Ustedes</em> nadan en la piscina.</p>
            </dd>
        </dl>
        <p>That covers translation and usage of Spanish Subject Pronouns.  Let's take a look next at how we can use
            this information to begin conjugating verbs.
        </p>
          </div>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/quizzes/2">Take Quiz!</Link>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/3">The Verb <em>Ser</em> →</Link>
      </div>
    );
  }
  
  export default Lesson2;