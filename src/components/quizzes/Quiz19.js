import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import SpecialCharacters from './SpecialCharacters';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { saveQuizScores } from '../../actions/quizScores.js';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function Quiz19() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const quizScores = useSelector(state => state.quizScores)
    const [value1, setValue1] = React.useState('')
    const [value2, setValue2] = React.useState('')
    const [value3, setValue3] = React.useState('')
    const [value4, setValue4] = React.useState('')
    const [value5, setValue5] = React.useState('')
    const [value6, setValue6] = React.useState('')
    const [value7, setValue7] = React.useState('')
    const [value8, setValue8] = React.useState('')
    const [value9, setValue9] = React.useState('')
    const [value10, setValue10] = React.useState('')
    const [value11, setValue11] = React.useState('')
    const [value12, setValue12] = React.useState('')
    const [value13, setValue13] = React.useState('')
    const [value14, setValue14] = React.useState('')
    const [value15, setValue15] = React.useState('')
    const [value16, setValue16] = React.useState('')
    const [score, setScore] = React.useState('')
    const [percentage, setPercentage] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()
        let score = 0
        if (value1.toLowerCase() === "tu") {
            score += 1
        }
        if (value2.toLowerCase() === "nuestros") {
            score += 1
        }
        if (value3.toLowerCase() === "mi") {
            score += 1 
        }
        if (value4.toLowerCase() === "vuestres") {
            score += 1
        }
        if (value5.toLowerCase() === "sus") {
            score += 1
        }
        if (value6.toLowerCase() === "su") {
            score += 1
        }
        if (value7.toLowerCase() === "tu") {
            score += 1
        }
        if (value8.toLowerCase() === "su") {
            score += 1
        }
        if (value9.toLowerCase() === "suyo") {
            score += 1
        }
        if (value10.toLowerCase() === "tuye") {
            score += 1
        }
        if (value11.toLowerCase() === "nuestra") {
            score += 1 
        }
        if (value12.toLowerCase() === "mías") {
            score += 1
        }
        if (value13.toLowerCase() === "vuestros") {
            score += 1
        }
        if (value14.toLowerCase() === "suyas") {
            score += 1
        }
        if (value15.toLowerCase() === "tuyes") {
            score += 1
        }
        if (value16.toLowerCase() === "suya") {
            score += 1
        }
        setScore(score)
        const percentage = Math.round(score / 16 * 100) + "%"
        setPercentage(percentage)
        const token = localStorage.getItem("token")
        const payload = { quiz_score: {
          quiz: 19,
          score: score,
          percentage: percentage,
          user_id: user.id
        }
        }
        const thisQuiz = quizScores.find(score => score.quiz === 19)
        let method 
        let endURL 
        if (!thisQuiz) {
          method = "POST"
          endURL = "" 
        } else {
          method = "PATCH"
          endURL = `/${thisQuiz.id}`
        }
        const reqObj = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      }
        fetch(`http://localhost:3001/quiz_scores${endURL}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
          dispatch(saveQuizScores(data.user.data.attributes.quiz_scores))
    })}

    const focused = true

    return (
        <div>
            <h1>Quiz 19: Possessive Adjectives & Pronouns</h1>
                
                <h3>Given the noun and the owner in Spanish, write the proper possessive adjective to be used with this noun.<br/><br/>
                Use the tool below to copy and paste special characters if you need them.
                </h3>
                <SpecialCharacters />
                <hr />
                <form onSubmit={handleSubmit}>
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" color="secondary" focused={focused}>1. noun: el gato, owner: tú</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value1}
                        onInput={e=>setValue1(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. noun: los libros, owners: nosotras</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value2}
                        onInput={e=>setValue2(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. noun: la cama, owner: yo</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value3}
                        onInput={e=>setValue3(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. noun: les niñes, owners: vosotros</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value4}
                        onInput={e=>setValue4(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. noun: las guitarras, owners: elles</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value5}
                        onInput={e=>setValue5(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. noun: la casa, owner: usted</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value6}
                        onInput={e=>setValue6(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>7. noun: el reloj, owner: vos</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value7}
                        onInput={e=>setValue7(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>8. noun: le chique, owners: ustedes</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value8}
                        onInput={e=>setValue8(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <h3>Given the noun and the owner in Spanish, write the proper possessive pronoun to be used in place of this noun.
                </h3>
                <FormLabel component="legend" color="secondary" focused={focused}>9. noun: el dormitorio, owner: usted</FormLabel>
                <TextField
                        variant="outlined"
                        value={value9}
                        onInput={e=>setValue9(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>10. noun: le niñe, owner: tú</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value10}
                        onInput={e=>setValue10(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>11. noun: la pelota, owners: nosotros</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value11}
                        onInput={e=>setValue11(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>12. noun: las tiendas, owners: yo</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value12}
                        onInput={e=>setValue12(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>13. noun: los profesores, owners: vosotras</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value13}
                        onInput={e=>setValue13(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>14. noun: las chaquetas, owner: ustedes</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value14}
                        onInput={e=>setValue14(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>15. noun: les muchaches, owner: vos</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value15}
                        onInput={e=>setValue15(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>16. noun: la escuela, owners: ellos</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value16}
                        onInput={e=>setValue16(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Check Answers
          </Button>
        </FormControl>
      </form> 
      <div className="score">
        <h2>{percentage ? `You got ${score} out of 16 correct. Percentage: ${percentage}` : null}</h2>
      </div>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/19">Return to This Lesson</Link>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/20">Next Lesson: →</Link>
      </div>
    )
}

export default Quiz19