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

function Quiz13() {
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
        if (value1.toLowerCase() === "le canta") {
            score += 1
        }
        if (value2.toLowerCase() === "os hablamos") {
            score += 1
        }
        if (value3.toLowerCase() === "nos escribe") {
            score += 1 
        }
        if (value4.toLowerCase() === "les grito") {
            score += 1
        }
        if (value5.toLowerCase() === "me leen") {
            score += 1
        }
        if (value6.toLowerCase() === "me lo") {
            score += 1
        }
        if (value7.toLowerCase() === "te las") {
            score += 1
        }
        if (value8.toLowerCase() === "nos la") {
            score += 1
        }
        if (value9.toLowerCase() === "se los") {
            score += 1
        }
        if (value10.toLowerCase() === "se lo") {
            score += 1
        }
        setScore(score)
        const percentage = Math.round(score / 10 * 100) + "%"
        setPercentage(percentage)
        const token = localStorage.getItem("token")
        const payload = { quiz_score: {
          quiz: 13,
          score: score,
          percentage: percentage,
          user_id: user.id
        }
        }
        const thisQuiz = quizScores.find(score => score.quiz === 13)
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
            <h1>Quiz 13: Indirect Object Pronouns</h1>
            <h3>Given the English sentence, Spanish object gender, if applicable, and Spanish verb infinitive, write the indirect object pronoun and conjugated verb in Spanish.<br/><br/> Use 
                the tool below to copy and paste special characters if you need them.
            </h3>
            <SpecialCharacters />
            <hr />
            <form onSubmit={handleSubmit}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" color="secondary" focused={focused}>1. He <u>sings to her</u> on their anniversary. - cantar</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value1}
                        onInput={e=>setValue1(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. We <u>speak to you (plural, informal, Spain)</u> from the heart. - hablar</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value2}
                        onInput={e=>setValue2(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. You (singular, formal) <u>write to us</u> often. - escribir</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value3}
                        onInput={e=>setValue3(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. I <u>shout to them</u> when there is a lot of noise. - gritar</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value4}
                        onInput={e=>setValue4(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. They <u>read to me</u> when I ask them to. - leer</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value5}
                        onInput={e=>setValue5(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <h3>Given the direct object and indirect object in English, write the two pronouns as they would appear in Spanish before a verb.</h3>
                    <FormLabel component="legend" color="secondary" focused={focused}>6. direct object: it (masculine noun), indirect object: me</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value6}
                        onInput={e=>setValue6(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>7. direct object: them (feminine noun), indirect object: you (singular, familiar)</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value7}
                        onInput={e=>setValue7(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>8. direct object: it (feminine noun), indirect object: us</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value8}
                        onInput={e=>setValue8(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>9. direct object: them (masculine noun), indirect object: them</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value9}
                        onInput={e=>setValue9(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>10. direct object: it (masculine noun), indirect object: him</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value10}
                        onInput={e=>setValue10(e.target.value)}
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
                <h2>You got {score} out of 10 correct. Percentage: {percentage}</h2>
              </Fade>
            : null}
            </div>
            <Box mt={4}>
                <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/13">Return to Lesson 13</Link></Button>
                <br/>
                <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/14">Next Lesson: Prepositional Pronouns →</Link></Button>
            </Box>
            <Copyright />
      </div>
    )
}

export default Quiz13