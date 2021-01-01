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
import { saveQuizScores } from '../../actions/quizScores.js'
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

function Quiz2() {
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
    const [score, setScore] = React.useState('')
    const [percentage, setPercentage] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()
        let score = 0
        if (value1 === "usted") {
            score += 1
        }
        if (value2 === "vosotros/as/es") {
            score += 1
        }
        if (value3 === "ustedes") {
            score += 1 
        }
        if (value4 === "vos") {
            score += 1
        }
        if (value5 === "él/ella/elle") {
            score += 1
        }
        if (value6 === "yo") {
            score += 1
        }
        setScore(score)
        const percentage = Math.round(score / 6 * 100) + "%"
        setPercentage(percentage)
        const token = localStorage.getItem("token")
        const payload = { quiz_score: {
          quiz: 2,
          score: score,
          percentage: percentage,
          user_id: user.id
        }
        }
        const thisQuiz = quizScores.find(score => score.quiz === 2)
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
            <h1>Quiz 2: Subject Pronouns</h1>
            <form onSubmit={handleSubmit}>
              <h3>For each scenario, select the appropriate Spanish subject pronoun.</h3>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="secondary" focused={focused}>1. To address a person in Mexico you don't know very well.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value1} onChange={e=>setValue1(e.target.value)}>
                        <FormControlLabel value="nosotros/as/es" control={<Radio />} label="nosotros/as/es" />
                        <FormControlLabel value="tú" control={<Radio />} label="tú" />
                        <FormControlLabel value="él/ella/elle" control={<Radio />} label="él/ella/elle" />
                        <FormControlLabel value="usted" control={<Radio />} label="usted" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. To address a group of close friends in Spain.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value2} onChange={e=>setValue2(e.target.value)}>
                        <FormControlLabel value="ustedes" control={<Radio />} label="ustedes" />
                        <FormControlLabel value="tú" control={<Radio />} label="tú" />
                        <FormControlLabel value="vosotros/as/es" control={<Radio />} label="vosotros/as/es" />
                        <FormControlLabel value="yo" control={<Radio />} label="yo" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. To address a group of close friends in Chile.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value3} onChange={e=>setValue3(e.target.value)}>
                        <FormControlLabel value="ustedes" control={<Radio />} label="ustedes" />
                        <FormControlLabel value="tú" control={<Radio />} label="tú" />
                        <FormControlLabel value="vosotros/as/es" control={<Radio />} label="vosotros/as/es" />
                        <FormControlLabel value="ellos/ellas/elles" control={<Radio />} label="ellos/ellas/elles" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. To address a close friend in Argentina</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value4} onChange={e=>setValue4(e.target.value)}>
                        <FormControlLabel value="nosotros/as/es" control={<Radio />} label="nosotros/as/es" />
                        <FormControlLabel value="yo" control={<Radio />} label="tú" />
                        <FormControlLabel value="vos" control={<Radio />} label="vos" />
                        <FormControlLabel value="usted" control={<Radio />} label="usted" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. To refer to a singular person not present in the conversation</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value5} onChange={e=>setValue5(e.target.value)}>
                        <FormControlLabel value="él/ella/elle" control={<Radio />} label="él/ella/elle" />
                        <FormControlLabel value="ellos/ellas/elles" control={<Radio />} label="ellos/ellas/elles" />
                        <FormControlLabel value="vos" control={<Radio />} label="vos" />
                        <FormControlLabel value="yo" control={<Radio />} label="yo" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. To refer to yourself</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value6} onChange={e=>setValue6(e.target.value)}>
                        <FormControlLabel value="él/ella/elle" control={<Radio />} label="él/ella/elle" />
                        <FormControlLabel value="yo" control={<Radio />} label="yo" />
                        <FormControlLabel value="tú" control={<Radio />} label="tú" />
                        <FormControlLabel value="vosotros/as/es" control={<Radio />} label="vosotros/as/es" />
                    </RadioGroup>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                      Check Answers
                    </Button>
                </FormControl>
            </form> 
            <div className="score">
            {percentage ?
              <Fade right> 
                <h2>You got {score} out of 6 correct. Percentage: {percentage}</h2>
              </Fade>
            : null}
            </div>
            <Box mt={4}>
              <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/2">Return to Lesson 2</Link></Button>
              <br/>
              <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/3">Next Lesson: The Verb <em>Ser</em> →</Link></Button>
            </Box>
            <Copyright />
      </div>
    )
}

export default Quiz2