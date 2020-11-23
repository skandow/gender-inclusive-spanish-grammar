import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Copyright from '../containers/Copyright'

function Lesson20() {

    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
            <h1>Demonstrative Adjectives & Pronouns</h1>
            <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <h3>Demonstrative Adjectives & Pronouns in English:</h3>
            <p>
                Demonstrative adjectives help us clarify which object we're referring to when 
                there could be confusion due to their being multiple objects of the same or similar type.
            </p>
            <p className="example">
                I want <em>that</em> car<br/>
                <em>This</em> child is taller than <em>that</em> one.<br/>
                I haven't seen <em>this</em> film.<br/>
                <em>These</em> birds are tiny.<br/>
                Where are <em>those</em> reports?<br/> 
            </p>
            <p>Typically, we delineate which demonstrative adjective to use based on whether the noun 
                we're pointing to is singular or plural and how close the object is to the speaker.</p>
            <p>As we saw with possessive adjectives and pronouns, demonstrative adjectives have a corresponding 
                pronoun counterpart:
            </p>
            <p className="example">
                Give me <em>that</em>!<br/>
                <em>This</em> is much bigger than <em>that</em>.<br/>
                I haven't seen <em>this</em> before.<br/>
                <em>These</em> are delicious!<br/>
                I want <em>those</em>.<br/> 
            </p>
            <p>In terms of actual words used, these are identical whether they're used as pronouns or adjectives.</p>
            <div>
                <table>
                    <caption>English Demonstrative Adjectives/Pronouns</caption>
                    <thead>
                        <tr>
                            <td>&nbsp;</td>
                            <th scope="col">Closer</th>
                            <th scope="col">Distant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Singular</th>
                            <td>this</td>
                            <td>that</td>
                        </tr>
                        <tr>
                            <th scope="row">Plural</th>
                            <td>these</td>
                            <td>those</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>Demonstrative Adjectives & Pronouns in Spanish:</h3>
            <p>Like English, the words utilized for Spanish demonstrative adjectives and pronouns are the same. However, 
                two additional things must be taken into account when determining which word to use:
            </p>
            <ol>
                <li>The first should not surprise you: gender.</li>
                <li>The second requires understanding of the "distance" qualifier from our English counterparts. Recall 
                    that in English, the second deciding factor deals with how close the object is to the speaker, with <em>this </em>
                    and <em>these</em> used for objects close to the speaker while <em>that</em> and <em>those</em> being 
                    used for objects that are farther away.<br/>
                    In Spanish, there is a third degree of distance to choose from, typically reserved for objects that are extremely far away 
                    from the speaker.</li>
            </ol>
            <p>Let's break this down into three charts based on gender.</p>
            <div>
                <table>
                    <caption>Spanish Masculine Demonstrative Adjectives/Pronouns</caption>
                    <thead>
                        <tr>
                            <td>&nbsp;</td>
                            <th scope="col">Closer</th>
                            <th scope="col">Distant</th>
                            <th scope="col">Very Distant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Singular</th>
                            <td>este</td>
                            <td>ese</td>
                            <td>aquel</td>
                        </tr>
                        <tr>
                            <th scope="row">Plural</th>
                            <td>estos</td>
                            <td>esos</td>
                            <td>aquellos</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <caption>Spanish Feminine Demonstrative Adjectives/Pronouns</caption>
                    <thead>
                        <tr>
                            <td>&nbsp;</td>
                            <th scope="col">Closer</th>
                            <th scope="col">Distant</th>
                            <th scope="col">Very Distant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Singular</th>
                            <td>esta</td>
                            <td>esa</td>
                            <td>aquella</td>
                        </tr>
                        <tr>
                            <th scope="row">Plural</th>
                            <td>estas</td>
                            <td>esas</td>
                            <td>aquellas</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <caption>Spanish Non-Binary Demonstrative Adjectives/Pronouns</caption>
                    <thead>
                        <tr>
                            <td>&nbsp;</td>
                            <th scope="col">Closer</th>
                            <th scope="col">Distant</th>
                            <th scope="col">Very Distant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Singular</th>
                            <td>este</td>
                            <td>ese</td>
                            <td>aquelle</td>
                        </tr>
                        <tr>
                            <th scope="row">Plural</th>
                            <td>estes</td>
                            <td>eses</td>
                            <td>aquelles</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Let's see the first two of these tables realized via examples:</p>
            <p className="example">
                <strong>Masculine noun(s):</strong><br/>
                <strong>Singular:</strong><br/>
                I want this book.<br/>
                <em lang="es">Quiero este libro.</em><br/>
                I want this.<br/>
                <em lang="es">Quiero este.</em><br/>
                I want that book.<br/>
                <em lang="es">Quiero ese libro.</em><br/>
                I want that.<br/>
                <em lang="es">Quiero ese.</em><br/>
                I want that book (over there).<br/>
                <em lang="es">Quiero aquel libro.</em><br/>
                I want that (over there).<br/>
                <em lang="es">Quiero aquel.</em><br/><br/>
                <strong>Plural:</strong><br/>
                I want these books.<br/>
                <em lang="es">Quiero estos libros.</em><br/>
                I want these.<br/>
                <em lang="es">Quiero estos.</em><br/>
                I want those books.<br/>
                <em lang="es">Quiero esos libros.</em><br/>
                I want those.<br/>
                <em lang="es">Quiero esos.</em><br/>
                I want those books (over there).<br/>
                <em lang="es">Quiero aquellos libros.</em><br/>
                I want those (over there).<br/>
                <em lang="es">Quiero aquellos.</em>
            </p>
            <p className="example">
                <strong>Feminine noun(s):</strong><br/>
                <strong>Singular:</strong><br/>
                You eat this apple.<br/>
                <em lang="es">Comes esta manzana.</em><br/>
                You eat this.<br/>
                <em lang="es">Comes esta.</em><br/>
                You eat that apple.<br/>
                <em lang="es">Comes esa manzana.</em><br/>
                I want that.<br/>
                <em lang="es">Comes esa.</em><br/>
                You eat that apple (over there).<br/>
                <em lang="es">Comes aquella manzana.</em><br/>
                You eat that (over there).<br/>
                <em lang="es">Comes aquella.</em><br/><br/>
                <strong>Plural:</strong><br/>
                You eat these apples.<br/>
                <em lang="es">Comes estas manzanas.</em><br/>
                You eat these.<br/>
                <em lang="es">Comes estas.</em><br/>
                You eat those apples.<br/>
                <em lang="es">Comes esas manzanas.</em><br/>
                You eat those.<br/>
                <em lang="es">Comes esas.</em><br/>
                You eat those (over there).<br/>
                <em lang="es">Comes aquellas manzanas.</em><br/>
                You eat those (over there).<br/>
                <em lang="es">Comes aquellas.</em>
            </p>
            <p>There are three special demonstrative pronouns that are utilized when you don't know the specific gender of something.
                These are called the gender neutral demonstrative pronouns.
            </p>
            <div>
                <table>
                    <caption>Spanish Gender Neutral Demonstrative Pronouns</caption>
                    <thead>
                        <tr>
                            <th scope="col">Closer</th>
                            <th scope="col">Distant</th>
                            <th scope="col">Very Distant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>esto</td>
                            <td>eso</td>
                            <td>aquello</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Notice that there is only a singular version of each of these, because if we cannot identify the object, we don't know the object's quantity in addition the gender.</p>
            <p className="example">
                What is this?<br/>
                <em lang="es">¿Qué es esto?</em><br/>
                What is that?<br/>
                <em lang="es">¿Qué es eso?</em><br/>
                What is that (over there)?<br/>
                <em lang="es">¿Qué es aquello?</em><br/>
            </p>
            <p>We'll give a final message regarding next steps on the next page.</p>
          </div>
          <Box mt={4}>
            <Link className="next-link" exact="true" to="/quizzes/20">Take Quiz!</Link>
            <br/>
            <Link className="next-link" exact="true" to="/final_message">Next Steps →</Link>
          </Box>
          <Copyright />
      </div>
    );
  }
  
  export default Lesson20;