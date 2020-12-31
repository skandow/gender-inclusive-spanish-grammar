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

function Quiz1() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const quizScores = useSelector(state => state.quizScores)
    const [value1, setValue1] = React.useState('')
    const [value2, setValue2] = React.useState('')
    const [value3, setValue3] = React.useState('')
    const [value4, setValue4] = React.useState('')
    const [score, setScore] = React.useState('')
    const [percentage, setPercentage] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()
        let score = 0
        if (value1 === "Subject pronoun") {
            score += 1
        }
        if (value2 === "Reflexive pronoun") {
            score += 1
        }
        if (value3 === "Possessive pronoun") {
            score += 1 
        }
        if (value4 === "Object pronoun") {
            score += 1
        }
        setScore(score)
        const percentage = score / 4 * 100 + "%"
        setPercentage(percentage)
        const token = localStorage.getItem("token")
        const payload = { quiz_score: {
          quiz: 1,
          score: score,
          percentage: percentage,
          user_id: user.id
        }
        }
        const thisQuiz = quizScores.find(score => score.quiz === 1)
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
            <h1>Quiz 1: Pronouns</h1>
            <form onSubmit={handleSubmit}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="secondary" focused={focused}>1. <em> I walked home the other day.</em><br /><br /> In this sentence, the first word is a/an</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value1} onChange={e=>setValue1(e.target.value)}>
                        <FormControlLabel value="Subject pronoun" control={<Radio />} label="Subject pronoun" />
                        <FormControlLabel value="Object pronoun" control={<Radio />} label="Object pronoun" />
                        <FormControlLabel value="Reflexive pronoun" control={<Radio />} label="Reflexive pronoun" />
                        <FormControlLabel value="Possessive pronoun" control={<Radio />} label="Possessive pronoun" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. <em> Do it yourself.</em><br /><br /> In this sentence, the final word is a/an</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value2} onChange={e=>setValue2(e.target.value)}>
                        <FormControlLabel value="Subject pronoun" control={<Radio />} label="Subject pronoun" />
                        <FormControlLabel value="Object pronoun" control={<Radio />} label="Object pronoun" />
                        <FormControlLabel value="Reflexive pronoun" control={<Radio />} label="Reflexive pronoun" />
                        <FormControlLabel value="Possessive pronoun" control={<Radio />} label="Possessive pronoun" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. <em> I didn't know that recipe was hers.</em><br /><br /> In this sentence, the final word is a/an</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value3} onChange={e=>setValue3(e.target.value)}>
                        <FormControlLabel value="Subject pronoun" control={<Radio />} label="Subject pronoun" />
                        <FormControlLabel value="Object pronoun" control={<Radio />} label="Object pronoun" />
                        <FormControlLabel value="Reflexive pronoun" control={<Radio />} label="Reflexive pronoun" />
                        <FormControlLabel value="Possessive pronoun" control={<Radio />} label="Possessive pronoun" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. <em> Do you know where it is?.</em><br /><br /> In this sentence, the word "it" is a/an</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value4} onChange={e=>setValue4(e.target.value)}>
                        <FormControlLabel value="Subject pronoun" control={<Radio />} label="Subject pronoun" />
                        <FormControlLabel value="Object pronoun" control={<Radio />} label="Object pronoun" />
                        <FormControlLabel value="Reflexive pronoun" control={<Radio />} label="Reflexive pronoun" />
                        <FormControlLabel value="Possessive pronoun" control={<Radio />} label="Possessive pronoun" />
                    </RadioGroup>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                      Check Answers
                    </Button>
                </FormControl>
            </form> 
            <div className="score">
            {percentage ?
              <Fade right> 
                <h2>You got {score} out of 4 correct. Percentage: {percentage}</h2>
              </Fade>
            : null}
            </div>
            <Box mt={4}>
              <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/1">Return to Lesson 1</Link></Button>
              <br/>
              <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/2">Next Lesson: Spanish Subject Pronouns →</Link></Button>
            </Box>
            <Copyright />
      </div>
    )
}

export default Quiz1