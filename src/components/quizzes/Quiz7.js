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

function Quiz7() {
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
    const [score, setScore] = React.useState('')
    const [percentage, setPercentage] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()
        let score = 0
        if (value1 === "comes") {
            score += 1
        }
        if (value2 === "mandamos") {
            score += 1
        }
        if (value3 === "luchan") {
            score += 1 
        }
        if (value4 === "escribo") {
            score += 1
        }
        if (value5 === "aprendés") {
            score += 1
        }
        if (value6 === "vive") {
            score += 1
        }
        if (value7 === "leéis") {
            score += 1
        }
        if (value8 === "preguntan") {
            score += 1
        }
        if (value9 === "yo") {
            score += 1
        }
        if (value10 === "nosotras") {
            score += 1
        }
        if (value11 === "elles") {
            score += 1
        }
        if (value12 === "ella") {
            score += 1
        }
        setScore(score)
        const percentage = Math.round(score / 12 * 100) + "%"
        setPercentage(percentage)
        const token = localStorage.getItem("token")
        const payload = { quiz_score: {
          quiz: 7,
          score: score,
          percentage: percentage,
          user_id: user.id
        }
        }
        const thisQuiz = quizScores.find(score => score.quiz === 7)
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
        fetch(`https://git.heroku.com/inclusive-spanish-grammar-serv.git/quiz_scores${endURL}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
          dispatch(saveQuizScores(data.user.data.attributes.quiz_scores))
    })}

    const focused = true

    return (
        <div>
            <h1>Quiz 7: Regular Verbs in the Present Indicative</h1>
            <form onSubmit={handleSubmit}>
                <h3>Given the Spanish subject pronoun and the verb infinitive, choose the correct conjugation of the verb</h3>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="secondary" focused={focused}>1. tú - comer</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value1} onChange={e=>setValue1(e.target.value)}>
                        <FormControlLabel value="como" control={<Radio />} label="como" />
                        <FormControlLabel value="come" control={<Radio />} label="come" />
                        <FormControlLabel value="comemos" control={<Radio />} label="comemos" />
                        <FormControlLabel value="comes" control={<Radio />} label="comes" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. nosotras - mandar</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value2} onChange={e=>setValue2(e.target.value)}>
                        <FormControlLabel value="manda" control={<Radio />} label="manda" />
                        <FormControlLabel value="mandas" control={<Radio />} label="mandas" />
                        <FormControlLabel value="mandamos" control={<Radio />} label="mandamos" />
                        <FormControlLabel value="mandan" control={<Radio />} label="mandan" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. elles - luchar</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value3} onChange={e=>setValue3(e.target.value)}>
                        <FormControlLabel value="lucháis" control={<Radio />} label="lucháis" />
                        <FormControlLabel value="luchan" control={<Radio />} label="luchan" />
                        <FormControlLabel value="luchamos" control={<Radio />} label="luchamos" />
                        <FormControlLabel value="lucha" control={<Radio />} label="lucha" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. yo - escribir</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value4} onChange={e=>setValue4(e.target.value)}>
                        <FormControlLabel value="escribo" control={<Radio />} label="escribo" />
                        <FormControlLabel value="escribe" control={<Radio />} label="escribe" />
                        <FormControlLabel value="escriben" control={<Radio />} label="escriben" />
                        <FormControlLabel value="escribimos" control={<Radio />} label="escribimos" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. vos - aprender</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value5} onChange={e=>setValue5(e.target.value)}>
                        <FormControlLabel value="aprendes" control={<Radio />} label="aprendes" />
                        <FormControlLabel value="aprendés" control={<Radio />} label="aprendés" />
                        <FormControlLabel value="aprendéis" control={<Radio />} label="aprendéis" />
                        <FormControlLabel value="aprende" control={<Radio />} label="aprende" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. usted - vivir </FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value6} onChange={e=>setValue6(e.target.value)}>
                        <FormControlLabel value="vives" control={<Radio />} label="vives" />
                        <FormControlLabel value="vivo" control={<Radio />} label="vivo" />
                        <FormControlLabel value="vivimos" control={<Radio />} label="vivimos" />
                        <FormControlLabel value="vive" control={<Radio />} label="vive" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>7. vosotros - leer </FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value7} onChange={e=>setValue7(e.target.value)}>
                        <FormControlLabel value="leemos" control={<Radio />} label="leemos" />
                        <FormControlLabel value="leen" control={<Radio />} label="leen" />
                        <FormControlLabel value="leéis" control={<Radio />} label="leéis" />
                        <FormControlLabel value="leo" control={<Radio />} label="leo" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>8. ustedes - preguntar</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value8} onChange={e=>setValue8(e.target.value)}>
                        <FormControlLabel value="pregunto" control={<Radio />} label="pregunto" />
                        <FormControlLabel value="preguntás" control={<Radio />} label="preguntás" />
                        <FormControlLabel value="preguntáis" control={<Radio />} label="preguntáis" />
                        <FormControlLabel value="preguntan" control={<Radio />} label="preguntan" />
                    </RadioGroup>
                    <hr />
                    <h3>Given the verb and its infinitive, select which of the given subject pronouns is implied as doing the action.</h3>
                    <FormLabel component="legend" color="secondary" focused={focused}>9. creo - creer</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value9} onChange={e=>setValue9(e.target.value)}>
                        <FormControlLabel value="yo" control={<Radio />} label="yo" />
                        <FormControlLabel value="tú" control={<Radio />} label="tú" />
                        <FormControlLabel value="usted" control={<Radio />} label="usted" />
                        <FormControlLabel value="vos" control={<Radio />} label="vos" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>10. escuchamos - escuchar</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value10} onChange={e=>setValue10(e.target.value)}>
                        <FormControlLabel value="vosotres" control={<Radio />} label="vosotres" />
                        <FormControlLabel value="ustedes" control={<Radio />} label="ustedes" />
                        <FormControlLabel value="ellos" control={<Radio />} label="ellos" />
                        <FormControlLabel value="nosotras" control={<Radio />} label="nosotras" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>11. brinden - brindir</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value11} onChange={e=>setValue11(e.target.value)}>
                        <FormControlLabel value="tú" control={<Radio />} label="tú" />
                        <FormControlLabel value="vos" control={<Radio />} label="vos" />
                        <FormControlLabel value="elles" control={<Radio />} label="elles" />
                        <FormControlLabel value="él" control={<Radio />} label="él" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>12. aparca - aparcar</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value12} onChange={e=>setValue12(e.target.value)}>
                        <FormControlLabel value="yo" control={<Radio />} label="yo" />
                        <FormControlLabel value="ella" control={<Radio />} label="ella" />
                        <FormControlLabel value="ellos" control={<Radio />} label="ellos" />
                        <FormControlLabel value="vos" control={<Radio />} label="vos" />
                    </RadioGroup>
                    <hr />
                    <Button style={{width: "40%", margin: "auto"}} type="submit" variant="contained" color="primary" className={classes.button}>
                        Check Answers
                    </Button>
                </FormControl>
            </form> 
            <div className="score">
            {percentage ?
              <Fade right> 
                <h2>You got {score} out of 12 correct. Percentage: {percentage}</h2>
              </Fade>
            : null}
            </div>
            <Box mt={4}>
                <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/7">Return to Lesson 7</Link></Button>
                <br/>
                <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/8">Next Lesson: Commonly Used Irregular Verbs →</Link></Button>
            </Box>
            <Copyright />
      </div>
    )
}

export default Quiz7