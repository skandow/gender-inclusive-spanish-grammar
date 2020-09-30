import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loginUser } from '../../actions/user.js'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function Quiz9() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
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
    const [score, setScore] = React.useState('')
    const [percentage, setPercentage] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()
        let score = 0
        if (value1 === "tenemos") {
            score += 1
        }
        if (value2 === "has") {
            score += 1
        }
        if (value3 === "tienen") {
            score += 1 
        }
        if (value4 === "tengo") {
            score += 1
        }
        if (value5 === "habéis") {
            score += 1
        }
        if (value6 === "tiene") {
            score += 1
        }
        if (value7 === "terminado") {
            score += 1
        }
        if (value8 === "abierto") {
            score += 1
        }
        if (value9 === "leido") {
            score += 1
        }
        if (value10 === "visto") {
            score += 1
        }
        if (value11 === "hecho") {
            score += 1
        }
        if (value12 === "ganado") {
            score += 1
        }
        setScore(score)
        const percentage = Math.round(score / 12 * 100) + "%"
        setPercentage(percentage)
        const token = localStorage.getItem("token")
        const payload = { quiz_score: {
          quiz: 9,
          score: score,
          percentage: percentage,
          user_id: user.id
        }
        }
        const thisQuiz = user.quiz_scores.find(score => score.quiz === 9)
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
          dispatch(loginUser(data.user.data.attributes))
    })}

    const focused = true

    return (
        <div>
            <h1>Quiz 9: The Verbs <em lang="es">Tener</em>, <em lang="es">Haber</em>, and the Present Perfect Tense</h1>
                <form onSubmit={handleSubmit}>
                <h3>Given the statement in English (and additional context), choose the single word that means the equivalent of the underlined portion</h3>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="secondary" focused={focused}>1. <u>We have</u> ten balloons for the party.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value1} onChange={e=>setValue1(e.target.value)}>
                        <FormControlLabel value="tengo" control={<Radio />} label="tengo" />
                        <FormControlLabel value="tenemos" control={<Radio />} label="tenemos" />
                        <FormControlLabel value="he" control={<Radio />} label="he" />
                        <FormControlLabel value="hemos" control={<Radio />} label="hemos" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. <u>Have you (singular, familiar)</u> written your paper?</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value2} onChange={e=>setValue2(e.target.value)}>
                        <FormControlLabel value="tienes" control={<Radio />} label="tienes" />
                        <FormControlLabel value="tenéis" control={<Radio />} label="tenéis" />
                        <FormControlLabel value="has" control={<Radio />} label="has" />
                        <FormControlLabel value="habéis" control={<Radio />} label="habéis" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. <u>They have</u> a chance.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value3} onChange={e=>setValue3(e.target.value)}>
                        <FormControlLabel value="tienen" control={<Radio />} label="tienen" />
                        <FormControlLabel value="tiene" control={<Radio />} label="tiene" />
                        <FormControlLabel value="han" control={<Radio />} label="han" />
                        <FormControlLabel value="ha" control={<Radio />} label="ha" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. <u>I am</u> twenty-six years old.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value4} onChange={e=>setValue4(e.target.value)}>
                        <FormControlLabel value="soy" control={<Radio />} label="soy" />
                        <FormControlLabel value="estoy" control={<Radio />} label="estoy" />
                        <FormControlLabel value="he" control={<Radio />} label="he" />
                        <FormControlLabel value="tengo" control={<Radio />} label="tengo" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. <u>You (plural, familiar, Spain) have</u> done it.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value5} onChange={e=>setValue5(e.target.value)}>
                        <FormControlLabel value="tienes" control={<Radio />} label="tienes" />
                        <FormControlLabel value="tienen" control={<Radio />} label="tienen" />
                        <FormControlLabel value="han" control={<Radio />} label="han" />
                        <FormControlLabel value="habéis" control={<Radio />} label="habéis" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. <u>He has</u> a red bicycle.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value6} onChange={e=>setValue6(e.target.value)}>
                        <FormControlLabel value="tiene" control={<Radio />} label="tiene" />
                        <FormControlLabel value="ha" control={<Radio />} label="ha" />
                        <FormControlLabel value="hay" control={<Radio />} label="hay" />
                        <FormControlLabel value="tienen" control={<Radio />} label="tienen" />
                    </RadioGroup>
                    <hr />
                    <h3>Given each sentence and Spanish infinitive, enter the correct Spanish past participle in the blank.</h3>
                    <FormLabel component="legend" color="secondary" focused={focused}>7. I have finished the work. - terminar</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value7}
                        onInput={e=>setValue7(e.target.value)}
                        style={{width: "20%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>8. Ze has opened the door. - abrir</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value8}
                        onInput={e=>setValue8(e.target.value)}
                        style={{width: "20%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>9. We have read the book. - leer</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value9}
                        onInput={e=>setValue9(e.target.value)}
                        style={{width: "20%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>10. You have seen the movie. - ver</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value10}
                        onInput={e=>setValue10(e.target.value)}
                        style={{width: "20%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>11. They have done it. - hacer</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value11}
                        onInput={e=>setValue11(e.target.value)}
                        style={{width: "20%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>12. She has won. - ganar</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value12}
                        onInput={e=>setValue12(e.target.value)}
                        style={{width: "20%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Check Answers
          </Button>
        </FormControl>
      </form> 
      <div className="score">
        <h2>{percentage ? `You got ${score} out of 12 correct. Percentage: ${percentage}` : null}</h2>
      </div>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/9">Return to This Lesson</Link>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/10">Next Lesson: Stem-Changing Verbs →</Link>
      </div>
    )
}

export default Quiz9