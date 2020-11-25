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
import Copyright from '../containers/Copyright'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function Quiz16() {
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
        if (value1.toLowerCase() === "mirad") {
            score += 1
        }
        if (value2.toLowerCase() === "bebe") {
            score += 1
        }
        if (value3.toLowerCase() === "hablá") {
            score += 1 
        }
        if (value4.toLowerCase() === "aguanta") {
            score += 1
        }
        if (value5.toLowerCase() === "escuchad") {
            score += 1
        }
        if (value6.toLowerCase() === "ven") {
            score += 1
        }
        if (value7.toLowerCase() === "escribí") {
            score += 1
        }
        if (value8.toLowerCase() === "sé") {
            score += 1
        }
        if (value9.toLowerCase() === "dímelo") {
            score += 1
        }
        if (value10.toLowerCase() === "hacedla") {
            score += 1
        }
        if (value11.toLowerCase() === "vete") {
            score += 1
        }
        if (value12.toLowerCase() === "decidíos") {
            score += 1
        }
        setScore(score)
        const percentage = Math.round(score / 12 * 100) + "%"
        setPercentage(percentage)
        const token = localStorage.getItem("token")
        const payload = { quiz_score: {
          quiz: 16,
          score: score,
          percentage: percentage,
          user_id: user.id
        }
        }
        const thisQuiz = quizScores.find(score => score.quiz === 16)
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
            <h1>Quiz 16: The Positive Imperative Mood with Familiar People</h1>
            <h3>Given the Spanish subject pronoun and verb infinitive, give the conjugated positive imperative form of the verb.<br/><br/>
                Use the tool below to copy and paste special characters if you need them.
            </h3>
            <SpecialCharacters />
            <hr />
            <form onSubmit={handleSubmit}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="secondary" focused={focused}>1. vosotres - mirar</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value1}
                        onInput={e=>setValue1(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. tú - beber</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value2}
                        onInput={e=>setValue2(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. vos - hablar</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value3}
                        onInput={e=>setValue3(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. tú - aguantar</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value4}
                        onInput={e=>setValue4(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. vosotras - escuchar</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value5}
                        onInput={e=>setValue5(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. tú - venir</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value6}
                        onInput={e=>setValue6(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>7. vos - escribir</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value7}
                        onInput={e=>setValue7(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>8. tú - ser</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value8}
                        onInput={e=>setValue8(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <h3>Given the pronouns and Spanish verb infinitive, give the conjugated positive imperative form of the verb.</h3>
                    <FormLabel component="legend" color="secondary" focused={focused}>9. subject: tú, direct object: lo, indirect object: me, verb: decir</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value9}
                        onInput={e=>setValue9(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>10. subject: vosotros, direct object: la, verb: hacer</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value10}
                        onInput={e=>setValue10(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>11. subject: tú, reflexive pronoun: te, verb: ir</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value11}
                        onInput={e=>setValue11(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>12. subject: vosotres, reflexive pronoun: os, verb: decidir</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value12}
                        onInput={e=>setValue12(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <Button style={{width: "30%", margin: "auto"}} type="submit" variant="outlined" color="primary" className={classes.button}>
                        Check Answers
                    </Button>
                </FormControl>
            </form> 
            <div className="score">
                <h2>{percentage ? `You got ${score} out of 12 correct. Percentage: ${percentage}` : null}</h2>
            </div>
            <Box mt={4}>
                <Link className="next-link" exact="true" to="/lessons/16">Return to Lesson 16</Link>
                <br/>
                <Link className="next-link" exact="true" to="/lessons/17">Next Lesson: The Present Progressive and Unique Pronoun Placement →</Link>
            </Box>
            <Copyright />
      </div>
    )
}

export default Quiz16