import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { saveQuizScores } from '../../actions/quizScores.js';
import Box from '@material-ui/core/Box';
import Fade from 'react-reveal/Fade';
import Copyright from '../containers/Copyright'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function Quiz3() {
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
    const [score, setScore] = React.useState('')
    const [percentage, setPercentage] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()
        let score = 0
        if (value1 === "eres") {
            score += 1
        }
        if (value2 === "es") {
            score += 1
        }
        if (value3 === "sois") {
            score += 1 
        }
        if (value4 === "son") {
            score += 1
        }
        if (value5 === "soy") {
            score += 1
        }
        if (value6 === "sos") {
            score += 1
        }
        if (value7 === "son") {
            score += 1
        }
        if (value8 === "es") {
            score += 1
        }
        setScore(score)
        const percentage = Math.round(score / 8 * 100) + "%"
        setPercentage(percentage)
        const token = localStorage.getItem("token")
        const payload = { quiz_score: {
          quiz: 3,
          score: score,
          percentage: percentage,
          user_id: user.id
        }
        }
        const thisQuiz = quizScores.find(score => score.quiz === 3)
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
        fetch(`https://inclusive-spanish-grammar-serv.herokuapp.com/quiz_scores${endURL}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
          dispatch(saveQuizScores(data.user.data.attributes.quiz_scores))
    })}

    const focused = true

    return (
        <div>
            <h1>Quiz 3: The Verb <em>Ser</em></h1>
            <form onSubmit={handleSubmit}>
              <h3>For each sentence, select the appropriate verb to fill in the blank.</h3>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="secondary" focused={focused}>1. You are beautiful. - Tú _____ bonita.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value1} onChange={e=>setValue1(e.target.value)}>
                        <FormControlLabel value="soy" control={<Radio />} label="soy" />
                        <FormControlLabel value="eres" control={<Radio />} label="eres" />
                        <FormControlLabel value="somos" control={<Radio />} label="somos" />
                        <FormControlLabel value="es" control={<Radio />} label="es" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. Who are you? - ¿Quién _____ usted?</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value2} onChange={e=>setValue2(e.target.value)}>
                        <FormControlLabel value="somos" control={<Radio />} label="somos" />
                        <FormControlLabel value="sois" control={<Radio />} label="sois" />
                        <FormControlLabel value="es" control={<Radio />} label="es" />
                        <FormControlLabel value="sos" control={<Radio />} label="sos" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. You're all fun. - Vosotres _____ muy divertides.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value3} onChange={e=>setValue3(e.target.value)}>
                        <FormControlLabel value="sois" control={<Radio />} label="sois" />
                        <FormControlLabel value="son" control={<Radio />} label="son" />
                        <FormControlLabel value="es" control={<Radio />} label="es" />
                        <FormControlLabel value="soy" control={<Radio />} label="soy" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. They're boring. - Ellos _____ aburridos.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value4} onChange={e=>setValue4(e.target.value)}>
                        <FormControlLabel value="es" control={<Radio />} label="es" />
                        <FormControlLabel value="son" control={<Radio />} label="son" />
                        <FormControlLabel value="sos" control={<Radio />} label="sos" />
                        <FormControlLabel value="somos" control={<Radio />} label="somos" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. I am from the United States. - Yo _____ estadiounidense.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value5} onChange={e=>setValue5(e.target.value)}>
                        <FormControlLabel value="soy" control={<Radio />} label="soy" />
                        <FormControlLabel value="eres" control={<Radio />} label="eres" />
                        <FormControlLabel value="somos" control={<Radio />} label="somos" />
                        <FormControlLabel value="sois" control={<Radio />} label="sois" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. You are tall. - Vos _____ alta. </FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value6} onChange={e=>setValue6(e.target.value)}>
                        <FormControlLabel value="somos" control={<Radio />} label="somos" />
                        <FormControlLabel value="sos" control={<Radio />} label="sos" />
                        <FormControlLabel value="es" control={<Radio />} label="es" />
                        <FormControlLabel value="soy" control={<Radio />} label="soy" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>7. Where are you from? - ¿De dónde _____ ustedes? </FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value7} onChange={e=>setValue7(e.target.value)}>
                        <FormControlLabel value="son" control={<Radio />} label="son" />
                        <FormControlLabel value="sos" control={<Radio />} label="sos" />
                        <FormControlLabel value="somos" control={<Radio />} label="somos" />
                        <FormControlLabel value="eres" control={<Radio />} label="eres" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>8. Eric is interesting, don't you think? - Eric _____ interesante, ¿no? </FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value8} onChange={e=>setValue8(e.target.value)}>
                        <FormControlLabel value="sois" control={<Radio />} label="sois" />
                        <FormControlLabel value="eres" control={<Radio />} label="eres" />
                        <FormControlLabel value="soy" control={<Radio />} label="soy" />
                        <FormControlLabel value="es" control={<Radio />} label="es" />
                    </RadioGroup>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                      Check Answers
                    </Button>
                </FormControl>
            </form> 
            <div className="score">
            {percentage ?
              <Fade right> 
                <h2>You got {score} out of 8 correct. Percentage: {percentage}</h2>
              </Fade>
            : null}
            </div>
            <Box mt={4}>
              <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/3">Return to Lesson 3</Link></Button>
              <br/>
              <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/4">Next Lesson: Nouns →</Link></Button>
            </Box>
            <Copyright />
      </div>
    )
}

export default Quiz3