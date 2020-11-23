import React from 'react'
import { useSelector } from 'react-redux'
import Copyright from '../containers/Copyright'

function FinalMessage() {
    const user = useSelector(state => state.user)
    let subjectPronoun
    let directObjectPronoun
    let demonstrativePronounNear
    let demonstrativePronounFar
    let demonstrativePronounVeryFar
    if (user.preferred_pronouns.substr(0, 2) === "he") {
        subjectPronoun = "él"
        directObjectPronoun = "lo"
        demonstrativePronounNear = "este"
        demonstrativePronounFar = "ese"
        demonstrativePronounVeryFar = "aquel"
    } else if (user.preferred_pronouns.substr(0, 3) === "she") {
        subjectPronoun = "ella"
        directObjectPronoun = "la"
        demonstrativePronounNear = "esta"
        demonstrativePronounFar = "esa"
        demonstrativePronounVeryFar = "aquella"
    } else {
        subjectPronoun = "elle"
        directObjectPronoun = "le"
        demonstrativePronounNear = "este"
        demonstrativePronounFar = "ese"
        demonstrativePronounVeryFar = "aquelle"
    }

    return (
      <div className="lesson">
          <div style={{color: "#006341"}}>
            <h1>The End of Our Journey</h1>
            <hr style={{border: "2px solid #006341"}}></hr>
          </div>
          <div style={{textAlign: "left"}}>
            <p>At this point, you have now learned every aspect of Spanish language grammar that is unique to the concepts of 
              non-binary Spanish. From here, you can explore other sites to continue your knowledge and development in both 
              vocabulary and other grammar areas.</p>  
            <p>If you need recommendations of topics to explore, consider the following:</p>

            <ul>
                <li>The Spanish language has multiple ways of discussing events in the past, the two primary being verb tenses 
                    known as the <strong>preterite</strong> and <strong>imperfect</strong>. How to construct these tenses and the 
                    differences between them are items worth knowing.
                </li>
                <li>There is also a future verb tense.</li>
                <li>The <strong>subjunctive</strong> mood was mentioned in a previous lesson. This mood is one that is often 
                    confusing to grasp for native English speakers. In addition, almost all of the verb tenses used in the indicative 
                    mood have a corresponding form in the subjunctive mood.
                </li>
                <li>There were numerous prepositions and conjunctions that are worth exploring.</li>
                <li>Consider also exploring the comparative and superlative forms of adjectives as well as how to form adverbs 
                    from adjectives.
                </li>
                <li>We briefly touched on the negative in Spanish. You'll want to further explore words that have negative connotation in Spanish.</li>
            </ul>  
            <p>At this point, you should be aware of pronouns you can ask others to utilize when referring to you:</p>
            <ul>
                <li>Subject Pronoun/Prepositional Pronoun: <span style={{border: "1px solid black", padding: "3px"}}>{subjectPronoun}</span> </li>
                <li>Direct Object Pronoun: <span style={{border: "1px solid black", padding: "3px"}}>{directObjectPronoun}</span></li>
                <li>Demonstrative Adjective/Pronoun (near): <span style={{border: "1px solid black", padding: "3px"}}>{demonstrativePronounNear}</span></li>
                <li>Demonstrative Adjective/Pronoun (far): <span style={{border: "1px solid black", padding: "3px"}}>{demonstrativePronounFar}</span></li>
                <li>Demonstrative Adjective/Pronoun (very far): <span style={{border: "1px solid black", padding: "3px"}}>{demonstrativePronounVeryFar}</span></li>
            </ul>
            <p>Feel free to review any previous lessons and take quizzes over in order to review these concepts.
            </p>
            <h1>Happy language learning!</h1>
          </div>
          <Copyright />
      </div>
    );
  }
  
  export default FinalMessage;