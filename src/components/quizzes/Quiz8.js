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
import Copyright from '../containers/Copyright'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function Quiz8() {
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
    const [score, setScore] = React.useState('')
    const [percentage, setPercentage] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()
        let score = 0
        if (value1 === "vas") {
            score += 1
        }
        if (value2 === "vemos") {
            score += 1
        }
        if (value3 === "oigo") {
            score += 1 
        }
        if (value4 === "huelen") {
            score += 1
        }
        if (value5 === "veo") {
            score += 1
        }
        if (value6 === "oye") {
            score += 1
        }
        if (value7 === "conozco") {
            score += 1
        }
        if (value8 === "sabes") {
            score += 1
        }
        if (value9 === "sé") {
            score += 1
        }
        if (value10 === "conocen") {
            score += 1
        }
        setScore(score)
        const percentage = Math.round(score / 10 * 100) + "%"
        setPercentage(percentage)
        const token = localStorage.getItem("token")
        const payload = { quiz_score: {
          quiz: 8,
          score: score,
          percentage: percentage,
          user_id: user.id
        }
        }
        const thisQuiz = quizScores.find(score => score.quiz === 8)
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
            <h1>Quiz 8: Commonly Used Irregular Verbs</h1>
            <form onSubmit={handleSubmit}>
              <h3>Given the statement in English (and additional context), choose the single word that means the equivalent of the underlined portion</h3>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="secondary" focused={focused}>1. <u>You (singular, familiar) go</u> to school on Monday.</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value1} onChange={e=>setValue1(e.target.value)}>
                        <FormControlLabel value="veo" control={<Radio />} label="veo" />
                        <FormControlLabel value="vamos" control={<Radio />} label="vamos" />
                        <FormControlLabel value="vas" control={<Radio />} label="vas" />
                        <FormControlLabel value="ven" control={<Radio />} label="ven" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. <u>We see</u> you.</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value2} onChange={e=>setValue2(e.target.value)}>
                        <FormControlLabel value="vas" control={<Radio />} label="vas" />
                        <FormControlLabel value="vemos" control={<Radio />} label="vemos" />
                        <FormControlLabel value="ven" control={<Radio />} label="ven" />
                        <FormControlLabel value="va" control={<Radio />} label="va" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. <u>I hear</u> something strange.</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value3} onChange={e=>setValue3(e.target.value)}>
                        <FormControlLabel value="veo" control={<Radio />} label="veo" />
                        <FormControlLabel value="oigo" control={<Radio />} label="oigo" />
                        <FormControlLabel value="huelo" control={<Radio />} label="huelo" />
                        <FormControlLabel value="voy" control={<Radio />} label="voy" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. <u>Do you (plural, in Mexico) smell</u> that?</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value4} onChange={e=>setValue4(e.target.value)}>
                        <FormControlLabel value="huele" control={<Radio />} label="huele" />
                        <FormControlLabel value="oléis" control={<Radio />} label="oléis" />
                        <FormControlLabel value="huelen" control={<Radio />} label="huelen" />
                        <FormControlLabel value="hueles" control={<Radio />} label="hueles" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. Do you see what <u>I see</u>?</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value5} onChange={e=>setValue5(e.target.value)}>
                        <FormControlLabel value="ves" control={<Radio />} label="ves" />
                        <FormControlLabel value="veo" control={<Radio />} label="veo" />
                        <FormControlLabel value="van" control={<Radio />} label="van" />
                        <FormControlLabel value="voy" control={<Radio />} label="voy" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. Do <u>you hear (singular, formal)</u> what I hear?</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value6} onChange={e=>setValue6(e.target.value)}>
                        <FormControlLabel value="huelen" control={<Radio />} label="huelen" />
                        <FormControlLabel value="huele" control={<Radio />} label="huele" />
                        <FormControlLabel value="oyen" control={<Radio />} label="oyen" />
                        <FormControlLabel value="oye" control={<Radio />} label="oye" />
                    </RadioGroup>
                    <hr />
                    <h3>For each sentence, choose the correct form of the verb <em>saber</em> or <em>conocer</em> that would be used in its Spanish equivalent.</h3>
                    <FormLabel component="legend" color="secondary" focused={focused}>7. I know her very well.</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value7} onChange={e=>setValue7(e.target.value)}>
                        <FormControlLabel value="sé" control={<Radio />} label="sé" />
                        <FormControlLabel value="conozco" control={<Radio />} label="conozco" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>8. Do you know the answer?</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value8} onChange={e=>setValue8(e.target.value)}>
                        <FormControlLabel value="sabes" control={<Radio />} label="sabes" />
                        <FormControlLabel value="conoces" control={<Radio />} label="conoces" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>9. I know how to swim.</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value9} onChange={e=>setValue9(e.target.value)}>
                        <FormControlLabel value="sé" control={<Radio />} label="sé" />
                        <FormControlLabel value="conozco" control={<Radio />} label="conozco" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>10. Do you know this area well?</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value10} onChange={e=>setValue10(e.target.value)}>
                        <FormControlLabel value="saben" control={<Radio />} label="saben" />
                        <FormControlLabel value="conocen" control={<Radio />} label="conocen" />
                    </RadioGroup>
                    <hr />
                    <Button style={{width: "40%", margin: "auto"}} type="submit" variant="outlined" color="primary" className={classes.button}>
                      Check Answers
                    </Button>
                </FormControl>
            </form> 
            <div className="score">
              <h2>{percentage ? `You got ${score} out of 10 correct. Percentage: ${percentage}` : null}</h2>
            </div>
            <Box mt={4}>
              <Link className="next-link" exact="true" to="/lessons/8">Return to Lesson 8</Link>
              <br/>
              <Link className="next-link" exact="true" to="/lessons/9">Next Lesson: The Verbs <em lang="es">Tener</em>, <em lang="es">Haber</em>, and the Present Perfect Tense →</Link>
            </Box>
            <Copyright />
      </div>
    )
}

export default Quiz8