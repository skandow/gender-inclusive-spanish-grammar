import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Lesson5() {
    const user = useSelector(state => state.user)
    let subjectPronoun
    if (user.preferred_pronouns.substr(0, 2) === "he") {
        subjectPronoun = "él"
    } else if (user.preferred_pronouns.substr(0, 3) === "she") {
        subjectPronoun = "ella"
    } else {
        subjectPronoun = "elle"
    }

    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
          <h1>Adjectives</h1>
          <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
          <h3>Adjectives With Singular Nouns:</h3>
        <p id="par-1">Adjectives are another component of Spanish grammar that rely on gender and number to determine ending.  Let's take a look 
            at how adjectives transform depending on the nouns they are connected to.  Let's begin with describing "the tall friend" depending
            on the friend's gender.
        </p>
        <p className="example">
            the (male) tall friend = <em lang="es">el amigo alto</em><br/>
            the (female) tall friend = <em lang="es">la amiga alta</em><br/>
            the (non-binary) tall friend = <em lang="es">le amigue alte</em>
        </p>
        <p>Let's look at what happened here.  First, you should remember from the last lesson that the word for friend is 
            <em lang="es">amigo, amiga,</em> or <em lang="es">amigue</em> depending on the gender of the person, and that
            <em lang="es">el, la, </em> and <em lang="es">le</em> are our definite articles, so if we translate this sentence
            literally in its word order from Spanish to English, it would read as: <em>the friend tall</em></p>
        <p>This illustrates the first rule you should remember when using Spanish adjectives: almost all adjectives must appear
            after the noun they describe instead of before.
        </p>
        <p>The other item of note is the ending.  Like the word <em lang="es">amigo</em>, the adjective <em lang="es">alto</em> 
        changes depending on the gender of the person to whom you are referring.  This is true for all adjectives ending with the 
        letter <em>-o</em>.  When referring to a feminine person (or a feminine noun in general), if the adjective ends in <em>-o</em>,
        that letter must be changed to an <em>-a</em>.  Similarly, when referring to a non-binary person, if the adjective ends in 
        <em>-o</em>, that letter should be changed to an <em>-e</em>.</p>
        <p>The above rule <strong>only</strong> applies consistently, however, if the base adjective ends in <em>-o</em>, if the base adjective 
        ends in any other letter (besides <em>-a</em>), the adjective will likely not change no matter what the gender of the person or noun 
        is.</p>
        <p>For example if I were to talk about my intelligent friend:</p>
        <p className="example">
                the (male) intelligent friend = <em lang="es">el amigo inteligente</em><br/>
                the (female) intelligent friend = <em lang="es">la amiga inteligente</em><br/>
                the (non-binary) intelligent friend = <em lang="es">le amigue inteligente</em>
        </p>
        <p>the final letter would not change.  Similarly, if I were to talk about my young friend:</p>
        <p className="example">
                the (male) young friend = <em lang="es">el amigo joven</em><br/>
                the (female) young friend = <em lang="es">la amiga joven</em><br/>
                the (non-binary) young friend = <em lang="es">le amigue joven</em>
        </p>
        <p>the final letter would not change here either.</p>
        <p>There are some base adjectives that <strong>do</strong> end in consonants in which the letter <em>-a</em> must be 
        added to the feminine form.  If I talk about my Spanish friend:</p>
        <p className="example">
                the (male) Spanish friend = <em lang="es">el amigo español</em><br/>
                the (female) Spanish friend = <em lang="es">la amiga española</em><br/>
                the (non-binary) Spanish friend = <em lang="es">le amigue españole</em>
        </p>
        <p>I need to add the <em>-a</em> for the feminine form.  There isn't a hard and fast rule for the non-binary singular form of 
        adjectives such as these, but the above example provides one option for modifying the adjective appropriately.</p>
        <h3>Adjectives With Plural Nouns:</h3>
        <p>Unlike English adjectives, Spanish adjectives also change depending on if they describe singular or plural nouns.
            Let's look at how this affects discussing our friends who are tall, intelligent, young, and Spanish.
        </p>
        <div className="grid">
        <p className="example one">
            the (all-male or mixed group of) tall friends =<br/> <em lang="es">los amigos altos</em><br/>
            the (all-female) tall friends =<br/> <em lang="es">las amigas altas</em><br/>
            the (non-binary) tall friends =<br/> <em lang="es">les amigues altes</em></p>
        <p className="example two">
            the (all-male or mixed group of) intelligent friends =<br/> <em lang="es">los amigos inteligentes</em><br/>
            the (all-female) intelligent friends =<br/> <em lang="es">las amigas inteligentes</em><br/>
            the (non-binary) intelligent friends =<br/> <em lang="es">les amigues inteligentes</em></p>
        </div>
        <div className="grid">
        <p className="example one">
            the (all-male or mixed group of) young friends =<br/> <em lang="es">los amigos jovenes</em><br/>
            the (all-female) young friends =<br/> <em lang="es">las amigas jovenes</em><br/>
            the (non-binary) young friends =<br/> <em lang="es">les amigues jovenes</em></p>
        <p className="example two">
            the (all-male or mixed group of) Spanish friends =<br/> <em lang="es">los amigos españoles</em><br/>
            the (all-female) Spanish friends =<br/> <em lang="es">las amigas españolas</em><br/>
            the (non-binary) Spanish friends =<br/> <em lang="es">les amigues españoles</em>
        </p></div>
        <p>There are two basic rules here:</p>
            <ol>
                <li>If the base adjective ends in a vowel (after taking gender into consideration if applicable), add the letter <em>-s</em> 
                    if the adjective describes a plural noun.</li>
                <li>If the base adjective ends in a consonant (after taking gender into consideration if applicable), 
                    add the letters <em>-es</em>.</li> 
            </ol>
        <h3>A Review of Part 1:</h3>
        <p>At this point, you now have several ways to attach gender to your Spanish speaking skills:</p>
            <ol>
                <li className="text-center-parent">You can provide the subject pronoun <span style={{border: "1px solid black", padding: "2px"}}>{subjectPronoun}</span> as the one by which you would like to be referenced.
                </li>
                <li>You can use the correct nouns to describe:
                    <ul>
                        <li>yourself</li>
                        <li>your role amongst family and friends</li>
                        <li>your occupation</li>
                    </ul>
                </li>
                <li>You can use the correct adjectives to describe yourself using the verb <em lang="es">ser</em>.</li>
            </ol>
        <p>However, <em lang="es">ser</em> is not the only verb in the Spanish language to connect nouns to adjectives.  We'll
        begin Part 2 with a look at another verb used with adjectives: the verb <em lang="es">estar</em>.</p>           
          </div>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/quizzes/5">Take Quiz!</Link>
          <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/6">The Verb <em>Estar</em> →</Link>
      </div>
    );
  }
  
  export default Lesson5;