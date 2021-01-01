import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SpecialCharacters from './SpecialCharacters';
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

function Quiz14() {
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
        if (value1.toLowerCase() === "para") {
            score += 1
        }
        if (value2.toLowerCase() === "por") {
            score += 1
        }
        if (value3.toLowerCase() === "por") {
            score += 1 
        }
        if (value4.toLowerCase() === "para") {
            score += 1
        }
        if (value5.toLowerCase() === "para") {
            score += 1
        }
        if (value6.toLowerCase() === "por") {
            score += 1
        }
        if (value7.toLowerCase() === "mí") {
            score += 1
        }
        if (value8.toLowerCase() === "ella") {
            score += 1
        }
        if (value9.toLowerCase() === "ustedes") {
            score += 1
        }
        if (value10.toLowerCase() === "tí") {
            score += 1
        }
        if (value11.toLowerCase() === "nosotras") {
            score += 1
        }
        if (value12.toLowerCase() === "mí") {
            score += 1
        }
        setScore(score)
        const percentage = Math.round(score / 12 * 100) + "%"
        setPercentage(percentage)
        const token = localStorage.getItem("token")
        const payload = { quiz_score: {
          quiz: 14,
          score: score,
          percentage: percentage,
          user_id: user.id
        }
        }
        const thisQuiz = quizScores.find(score => score.quiz === 14)
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
        fetch(`https://musi-cal-back-end.herokuapp.com/quiz_scores${endURL}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
          dispatch(saveQuizScores(data.user.data.attributes.quiz_scores))
    })}

    const focused = true

    return (
        <div>
            <h1>Quiz 14: Prepositional Pronouns</h1>
            <h3>Given the English sentence, select whether the word <em>for</em> in the italicized portion should be replaced by <em lang="es">por</em> or 
                <em lang="es"> para</em> in the Spanish translation.<br/><br/>
                Use the tool below to copy and paste special characters if you need them.
            </h3>
            <SpecialCharacters />
            <hr />
            <form onSubmit={handleSubmit}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="secondary" focused={focused}>1. When are you leaving <em>for</em> Mexico?</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value1} onChange={e=>setValue1(e.target.value)}>
                        <FormControlLabel value="por" control={<Radio />} label="por" />
                        <FormControlLabel value="para" control={<Radio />} label="para" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. I want to trade my sandwich <em>for</em> your cookie.</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value2} onChange={e=>setValue2(e.target.value)}>
                        <FormControlLabel value="por" control={<Radio />} label="por" />
                        <FormControlLabel value="para" control={<Radio />} label="para" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. We have to exercise <em>for</em> forty-five minutes.</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value3} onChange={e=>setValue3(e.target.value)}>
                        <FormControlLabel value="por" control={<Radio />} label="por" />
                        <FormControlLabel value="para" control={<Radio />} label="para" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. You need to finish this report <em>for</em> Friday.</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value4} onChange={e=>setValue4(e.target.value)}>
                        <FormControlLabel value="por" control={<Radio />} label="por" />
                        <FormControlLabel value="para" control={<Radio />} label="para" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. Ze made this <em>for</em> me.</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value5} onChange={e=>setValue5(e.target.value)}>
                        <FormControlLabel value="por" control={<Radio />} label="por" />
                        <FormControlLabel value="para" control={<Radio />} label="para" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. Are you traveling <em>for</em> business or pleasure?</FormLabel>
                    <RadioGroup style={{margin: "auto"}} aria-label="quiz" name="quiz" value={value6} onChange={e=>setValue6(e.target.value)}>
                        <FormControlLabel value="por" control={<Radio />} label="por" />
                        <FormControlLabel value="para" control={<Radio />} label="para" />
                    </RadioGroup>
                    <hr />
                    <h3>Given the English sentence, write the prepositional pronoun in Spanish that would replace the English italicized word.</h3>
                    <FormLabel component="legend" color="secondary" focused={focused}>7. I need you to give that to <em>me</em>.</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value7}
                        onInput={e=>setValue7(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>8. He wrote this story for <em>her</em>.</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value8}
                        onInput={e=>setValue8(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>9. We would say it to <em>you (plural, informal, Mexico)</em> if we knew the answer.</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value9}
                        onInput={e=>setValue9(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>10. Was this dish made by <em>you (singular, informal, Spain)</em>?</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value10}
                        onInput={e=>setValue10(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>11. The teacher gave the test to <em>us (all-female group)</em> yesterday.</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value11}
                        onInput={e=>setValue11(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>12. What will you do for <em>me</em>?</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value12}
                        onInput={e=>setValue12(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <Button style={{width: "30%", margin: "auto"}} type="submit" variant="contained" color="primary" className={classes.button}>
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
                <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/14">Return to Lesson 14</Link></Button>
                <br/>
                <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/15">Next Lesson: The Present Progressive and Unique Pronoun Placement →</Link></Button>
            </Box>
            <Copyright />
      </div>
    )
}

export default Quiz14