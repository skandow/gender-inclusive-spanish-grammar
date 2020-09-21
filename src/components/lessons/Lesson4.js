import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Lesson4() {
    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
          <h1>Nouns</h1>
          <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
          <h3>Nouns Have Gender:</h3>
        <p>As you have seen already, gender greatly influences the choice of pronoun, but gender
            also plays a major role when looking at common nouns as well.</p>
        <p> All Spanish nouns have gender, and knowing the gender of a Spanish noun is important to understanding
            how to use articles and adjectives with it, in addition to understanding what pronouns can be used 
            to replace it.</p>
        <p>When learning new nouns, these are often presented with their definite article, the equivalent
            of the English word "the" when learning the following words in English:
        </p>
        <p className="example">the man<br/>
        the woman<br/>
        the genderqueer person<br/>
        the men<br/>
        the women<br/>
        the genderqueer people</p>
        <p> they would appear this way in Spanish:</p>
        <p className="example">el hombre<br/>
        la mujer<br/>
        le genderqueer<br/>
        los hombres<br/>
        las mujeres<br/>
        les genderqueers<br/>
        </p>
        <p>In this example, the gender of each noun is obvious based on the label, but when using adjectives
            and articles, it's important to keep track of whether the noun is singular or plural as well.
        </p>
        <table className="gender">
        <caption>Characteristics of Nouns - Gender and Number</caption>
            <thead>
                <tr>
                    <td>&nbsp;</td>
                    <th scope="col">Masculine</th>
                    <th scope="col">Feminine</th>
                    <th scope="col">Gender Neutral</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Singular</th>
                    <td lang="es">el hombre</td>
                    <td lang="es">la mujer</td>
                    <td lang="es">le genderqueer</td>
                </tr>
                <tr>
                    <th scope="row">Plural</th>
                    <td lang="es">los hombres</td>
                    <td lang="es">las mujeres</td>
                    <td lang="es">les genderqueers</td>
                </tr>
            </tbody>
        </table>    
        <h3>The Definite Article:</h3>
        <p>Notice that while English only has one definite article - <em>the</em> - non-binary Spanish 
        has six (and actually, there is one more, which will be discussed in a later lesson)!  
        To determine which definite article to use, you must know the gender of the noun it's 
        assigned to: </p>
        <table className="gender">
        <caption>Spanish Definite Articles</caption>
            <thead>
                
                <tr>
                    <td>&nbsp;</td>
                    <th scope="col">Masculine</th>
                    <th scope="col">Feminine</th>
                    <th scope="col">Gender Neutral</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Singular</th>
                    <td lang="es">el</td>
                    <td lang="es">la</td>
                    <td lang="es">le</td>
                </tr>
                <tr>
                    <th scope="row">Plural</th>
                    <td lang="es">los</td>
                    <td lang="es">las</td>
                    <td lang="es">les</td>
                </tr>
            </tbody>
        </table>
        <p>This is one of the many reasons why knowing the gender of a Spanish noun is essential when 
            learning it.
        </p>
        <h3>Spanish Nouns, Gender, and Roles in Family:</h3>
        <p>Many Spanish nouns are similar in appearance, but their ending determines the gender of the person 
            fulfilling the role in a particular situation.  For example, the Spanish word for "cousin" changes
            depending on the gender of the person:
        </p>
        <p className="example">
            <em lang="es">primo</em> = the male cousin<br/>
            <em lang="es">prima</em> = the female cousin<br/> 
            <em lang="es">prime</em> = the gender neutral cousin
        </p>
        <p>This is true of many words related to family and friends, such as:</p>
        <p className="example">grandparent = <em lang="es">abuelo/abuela/abuele</em><br/>
        child = <em lang="es">hijo/hija/hije</em><br/>
        sibling = <em lang="es">hermano/hermana/hermane</em><br/>
        siblings of your parents = <em lang="es">tío/tía/tíe</em><br/>
        children of your siblings = <em lang="es">sobrino/sobrina/sobrine</em><br/>
        grandchild = <em lang="es">nieto/nieta/niete</em><br/>
        sibling-in-law = <em lang="es">cuñado/cuñada/cuñade</em><br/>
        spouse = <em lang="es">esposo/esposa/espose</em><br/>
        significant other = <em lang="es">novio/novia/novie</em><br/>
        friend = <em lang="es">amigo/amiga/amigue</em> <sup><HashLink className="footnote-link" exact="true" to="/lessons/4#footnote-2">*</HashLink></sup></p>
        <p className="footnote" id="footnote-2"><sup>*</sup> Note the spelling change required for the word <em lang="es">amigue </em> 
            here.  This is because in order to preserve the <em>/g/</em> sound when it is followed by the letter
            <em>e</em>, the letter <em>u</em> must be added in between the two.
        </p>
        <h3>Other Nouns Based on Gender:</h3>
        <dl>
            <dt>Other Words to Describe People:</dt>
            <dd>Depending on where you are in the Spanish-speaking world, the following words could
                relate to young people or just people in general:
                <p className="example">
                    boy/man = <em lang="es">muchacho/chico</em><br/>
                    girl/woman = <em lang="es">muchacha/chica</em><br/>
                    genderqueer child/adult = <em lang="es">muchache/chique</em> <sup><HashLink className="footnote-link" exact="true" to="/lessons/4#footnote-3">*</HashLink></sup>
                </p>
                These words are typically reserved for young children:
                <p className="example">
                    young boy = <em lang="es">niño</em><br/>
                    young girl = <em lang="es">niña</em><br/>
                    young genderqueer person = <em lang="es">niñe</em>
                </p>
                <p className="footnote" id="footnote-3"><sup>*</sup> Note once again that there is a spelling 
                change required for the word <em lan="es">chique</em> here.  This is because in order to 
                preserve the <em>/k/</em> sound when it is followed by the letter <em>e</em>, the letter <em>u</em>
                must be added in between the two.</p>
            </dd>
            <dt>Professions:</dt>  
            <dd>A similar rule exists for people of a particular gender that work in certain professions, though 
                the rules that connect gender and ending here are a bit different.<br/>
                For example, the word for "engineer" can appear in three different forms depending on the gender of the 
                person in the occupation:
                <p className="example">
                    the male engineer = <em lang="es">el ingeniero</em><br/>
                    the female engineer = <em lang="es">la ingeniera</em><br/>
                    the genderqueer engineer = <em lang="es">le ingeniere</em>
                </p>
                When learning the vocabulary to describe your occupation, check the definite article and ending used to confirm you are referencing
                yourself (or someone else) with the correct word.
            </dd>
            <dt>Groups of People</dt>
            <dd><p>As we saw with plural object pronouns, the endings used for the various gendered forms of 
                <em lang="es"> nosotros</em>, <em lang="es" style={{color: "#b81140"}}>vosotros</em>, and
                <em lang="es"> ellos</em> depend on the collective genders of the inviduals in these groups,
                with the masculine form of the pronoun being used if the group is a mixed-gender group according
                to official Spanish grammar.</p>
                <p>The same is true for groups of the types of individuals we've discussed,
                so if you have a mixed-gender group of children, the plural word used would be <em lang="es">chicos </em>
                or <em lang="es">muchachos</em>.  As with applying this rule to subject pronouns, though, there is
                precent for using the <em>-es</em> plural endings of these words if you sense the presence of a non-binary 
                or genderqueer individual or you do not wish to use the masculine pronoun as the default plural for a 
                mixed-gender group.</p>
            </dd>
        </dl>
        <h3>Other Spanish Nouns:</h3>
        <p>The above nouns were rather simple in determining their gender.  Men identify with masculine 
            pronouns, so the gender of the words <em lang="es">hombre</em> and <em lang="es">hombres </em>
            is masculine, the gender of the words <em lang="es">mujer</em> and <em lang="es">mujeres </em>
            is feminine, and the gender of the words <em lang="es">genderqueer</em> and <em lang="es">genderqueers </em>
            is gender neutral.
        </p>
        <p>Remember, however, that <strong>all</strong> Spanish nouns have gender so for objects that aren't 
        alive or don't have an identifiable gender, you will have to memorize their gender when learning the noun.
        For example:</p>
        <p className="example">
            the bathroom<br/>
            the swimming pool
        </p>
        <p>are both nouns that don't have a clear gender, but when we learn their equivalents in Spanish:</p>
        <p className="example" lang="es">
            el baño<br/>
            la piscina
        </p>
        <p>we see that they do have an assigned gender.  The word <em lang="es">baño</em> is masculine and 
        the word <em lang="es">piscina</em> is feminine.</p>
        <p>And if we talk about multiple bathrooms or swimming pools, we need to change the definite 
            article again:
        </p>
        <p className="example" lang="es">
            los baños<br/>
            las piscinas<br/>
        </p>
        <p>There isn't a hard and fast rule for identifying the gender of a Spanish noun by looking at it,
            but typically, Spanish nouns that end with "o" are masculine, while Spanish nouns that end with 
            "a" are feminine, but there are even exceptions to this rule.  The best plan when learning a new
            Spanish noun is to find it with its definite article.  As we will see in the next section, though,
            the type of adjective used with these nouns can also provide clues to their gender.
        </p>
          </div>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/quizzes/4">Take Quiz!</Link>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/5">Adjectives →</Link>
      </div>
    );
  }
  
  export default Lesson4;