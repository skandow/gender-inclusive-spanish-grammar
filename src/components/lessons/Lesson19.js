import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Copyright from '../containers/Copyright'

function Lesson19() {

    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
            <h1>Possessive Adjectives & Pronouns</h1>
            <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3>Possessive Adjectives in English:</h3>
            <p>
                Possessive adjectives help us convey to whom or what something belongs.
            </p>
            <p className="example">
                Where is <em>my</em> pencil?<br/>
                Show me <em>your</em> homework.<br/>
                This is <em>hir</em> book.<br/>
                <em>Our</em> house is the red one.<br/>
                I don't see <em>their</em> car.<br/> 
            </p>
            <p>Let's take a look at possessive adjectives in English:</p>
            <div>
                <table>
                    <caption>English Possessive Adjectives</caption>
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
                            <td>my</td>
                            <td>our</td>
                        </tr>
                        <tr>
                            <th scope="row">Second Person</th>
                            <td>your</td>
                            <td>your</td>
                        </tr>
                        <tr>
                            <th rowSpan="4" scope="row">Third Person</th>
                            <td>his</td>
                            <td rowSpan="4">their</td>
                        </tr>
                        <tr><td>her</td></tr>
                        <tr><td>hir</td></tr>
                        <tr><td>its</td></tr>
                    </tbody>
                </table>
            </div>
            <h3>Possessive Adjectives in Spanish:</h3>
            <p>There are two ways to show possession in Spanish. One is to utilize the preposition <em lang="es">de</em>,
            which means <em>of</em> in this particular context. If the owner of the noun referenced is a pronoun (me, you, etc.),
            then the proper prepositional pronoun should be used after <em lang="es">de</em>.</p>
            <p className="example">
                Where is my pencil?<br/>
                <em lang="es">¿Dónde está el lápiz de mí?</em><br/><br/>
                Show me your homework.<br/>
                <em lang="es">Muéstrame la tarea de tí.</em><br/><br/>
                This is hir book.<br/>
                <em lang="es">Este es el libro de elle.</em><br/><br/>
                Our house is the red one.<br/>
                <em lang="es">La casa de nosotros es el rojo.</em><br/><br/>
                I don't see their car.<br/>
                <em lang="es">No veo el coche de ellas.</em>
            </p>
            <p>The other way is to utilize a possessive adjective. Let's see these in both English and Spanish.</p> 
            <div>
                <table id="subject-pronoun-chart">
                    <caption>Spanish Possessive Adjectives - Singular Objects</caption>
                    <thead>
                        <tr>
                            <td>&nbsp;</td>
                            <th scope="col">Singular</th>
                            <th scope="col">Plural</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="3" scope="row">First Person</th>
                            <td rowSpan="3" lang="es">mi</td>
                            <td lang="es">nuestro</td>
                        </tr>
                        <tr><td lang="es">nuestra</td></tr>
                        <tr><td lang="es">nuestre</td></tr>
                        <tr>
                            <th rowSpan="3" scope="row">Second Person</th>
                            <td rowSpan="3" lang="es">tu</td>                    
                            <td style={{backgroundColor: "#b81140"}} lang="es">vuestro</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor: "#b81140"}} lang="es">vuestra</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor: "#b81140"}} lang="es">vuestre</td>
                        </tr>
                        <tr>
                            <th scope="row">Third Person</th>
                            <td lang="es">su</td>
                            <td lang="es">su</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="example">
                Where is my pencil?<br/>
                <em lang="es">¿Dónde está mi lápiz?</em><br/><br/>
                Show me your homework.<br/>
                <em lang="es">Muéstrame tu tarea.</em><br/><br/>
                This is hir book.<br/>
                <em lang="es">Este es su libro.</em><br/><br/>
                Our house is the red one.<br/>
                <em lang="es">Nuestra casa es el rojo.</em><br/><br/>
                I don't see their car.<br/>
                <em lang="es">No veo su coche.</em>
            </p>
            <p>A few items to note:</p>
            <ol>
                <li>The above chart corresponds to highlighting ownership of a particular object, so if we need to talk about 
                    <em> his food</em>, we would use the corresponding word in the third-person-singular component of the chart, because
                    the pronoun <em>his</em> is singular and third-person.
                </li>
                <li>To that end, if you are referencing something that belongs to someone or a group of people you would identify as 
                    <em lang="es"> usted</em> or <em lang="es">ustedes</em>, the third-person row would still apply.
                </li>
                <li>Notice, however, that there are multiple forms of the pronouns <em lang="es">nuestro</em> and <em lang="es">vuestro</em>. The 
                endings of these, which do correspond to gender, are connected to the object, not the owner of the object. Remember that all nouns and 
                adjectives have gender, so the possessive adjective you use to describe a noun must match the noun's gender. In the case of:
                    <p className="example">That is our pool.</p>
                where the group referenced would use <em lang="es">nosotros</em> as the pronoun, the adjective in use would be <em lang="es">nuestra</em>, because
                <em> pool</em> in Spanish - <em lang="es">la piscina</em> - is feminine.</li>
                <li>For any of the above adjectives, the rule regarding plural nouns applies. If the noun that is owned is plural, an <em>-s</em> must 
                be added to the pronoun. Discussing <em>my shirts</em>, therefore, would result in <em lang="es">mis camisas</em>.</li>
            </ol>
            <h3>Combining the Methods:</h3>
            <p>It's not uncommon in Spanish to see both of the above methods utilized together, particularly when utilizing the third-person possessive adjectives.</p>
            <p className="example">
                This is hir book.<br/>
                <em lang="es">Este es su libro de elle.</em><br/><br/>
                I don't see their car.<br/>
                <em lang="es">No veo su coche de ellas.</em>
            </p>
            <p>Doing so allows us to more clearly clarify who the owner is of a particular object</p>
            <h3>Possessive Pronouns:</h3>
            <p>Let's take a look at one of the above examples we've been using and see it written to convey the same meaning two different ways:</p>
            <p className="example">This is <em>hir</em> book.<br/>
                This book is <em>hirs</em>.</p>
            <p>In the first sentence, which we've seen before, the word used to designate that the book belongs to someone is an adjective. But in the second sentence, the
                word being utilized for the same task is a pronoun.
            </p>
            <p>Let's look at possessive pronouns in English.</p>
            <div>
                <table>
                    <caption>English Possessive Pronouns</caption>
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
                            <td>mine</td>
                            <td>ours</td>
                        </tr>
                        <tr>
                            <th scope="row">Second Person</th>
                            <td>yours</td>
                            <td>yours</td>
                        </tr>
                        <tr>
                            <th rowSpan="4" scope="row">Third Person</th>
                            <td>his</td>
                            <td rowSpan="4">their</td>
                        </tr>
                        <tr><td>hers</td></tr>
                        <tr><td>hirs</td></tr>
                        <tr><td>its</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Like possessive Spanish adjectives, possessive Spanish pronouns base their endings on the number and gender of the noun they are replacing. Like the previous charts, this 
                chart structures the pronouns based on who the owner is. Notice for each of these there are six possible endings:
            </p>
            <div>
                <table className="spanish-possessive-pronoun-chart">
                    <caption>Spanish Possessive Pronouns</caption>
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
                            <td lang="es">mío/-a/-e/-os/-as/-es</td>
                            <td lang="es">nuestro/-a/-e/-os/-as/-es</td>
                        </tr>
                        <tr>
                            <th scope="row">Second Person</th>
                            <td lang="es">tuyo/-a/-e/-os/-as/-es</td>                    
                            <td style={{backgroundColor: "#b81140"}} lang="es">vuestro/-a/-e/-os/-as/-es</td>
                        </tr>
                        <tr>
                            <th scope="row">Third Person</th>
                            <td lang="es">suyo/-a/-e/-os/-as/-es</td>
                            <td lang="es">suyo/-a/-e/-os/-as/-es</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Let's take a look at some of these possessive pronouns in action. For each example, we'll italicize the object being replaced by the pronoun as 
            well as the pronoun itself.
            </p>
            <p className="example">
                That <em>cat</em> is <em>mine</em>.<br/>
                <span lang="es">Ese <em>gato</em> es <em>mío</em>.</span><br/><br/>
                These <em>plates</em> are <em>yours (singular, familiar)</em>.<br/>
                <span lang="es">Estos <em>platos</em> son <em>tuyos</em>.</span><br/><br/>
                This <em>bed</em> is <em>hers</em>.<br/>
                <span lang="es">Esta <em>cama</em> es <em>suya</em>.</span><br/><br/>
                Those <em>apples</em> are <em>ours</em>.<br/>
                <span lang="es">Esas <em>manzanas</em> son <em>nuestras</em>.</span><br/><br/>
                Are the <em>children</em> yours (plural, familiar)?<br/>
                <span style={{color: "#b81140"}} lang="es">¿Les <em>chiques</em> son <em>vuestres</em>?</span><br/>
                OR<br/>
                <span lang="es">¿Les <em>chiques</em> son <em>suyes</em>?</span><br/><br/>
                The <em>little child (gender neutral)</em> is <em>theirs</em>.<br/>
                <span lang="es">Le <em>niñe</em> es <em>suye</em>.</span>
            </p>
            <p>Remember that for BOTH possessive adjectives and pronouns, the gender and count must match the object whose ownership is being referenced!</p>
            <p>For our final lesson, we'll look at one more category of pronouns and adjectives that we've seen a bit of in previous lessons: demonstrative pronouns and adjectives.</p>
          </div>
          <Box mt={4}>
            <Link className="next-link" exact="true" to="/quizzes/19">Take Quiz!</Link>
            <br/>
            <Link className="next-link" exact="true" to="/lessons/20">Next Lesson: Demonstrative Adjectives and Pronouns →</Link>
          </Box>
          <Copyright />
      </div>
    );
  }
  
  export default Lesson19;