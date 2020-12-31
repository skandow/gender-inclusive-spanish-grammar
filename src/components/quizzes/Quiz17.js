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

function Quiz17() {
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
        if (value1.toLowerCase() === "canten") {
            score += 1
        }
        if (value2.toLowerCase() === "haga") {
            score += 1
        }
        if (value3.toLowerCase() === "duerma") {
            score += 1 
        }
        if (value4.toLowerCase() === "conozcan") {
            score += 1
        }
        if (value5.toLowerCase() === "juegue") {
            score += 1
        }
        if (value6.toLowerCase() === "vengan") {
            score += 1
        }
        if (value7.toLowerCase() === "coma") {
            score += 1
        }
        if (value8.toLowerCase() === "cuelgue") {
            score += 1
        }
        if (value9.toLowerCase() === "hágalo") {
            score += 1
        }
        if (value10.toLowerCase() === "díganmela") {
            score += 1
        }
        if (value11.toLowerCase() === "váyase") {
            score += 1
        }
        if (value12.toLowerCase() === "pregúntenme") {
            score += 1
        }
        setScore(score)
        const percentage = Math.round(score / 12 * 100) + "%"
        setPercentage(percentage)
        const token = localStorage.getItem("token")
        const payload = { quiz_score: {
          quiz: 17,
          score: score,
          percentage: percentage,
          user_id: user.id
        }
        }
        const thisQuiz = quizScores.find(score => score.quiz === 17)
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
            <h1>Quiz 17: Polite Commands</h1>
            <h3>Given the Spanish subject pronoun and verb infinitive, give the conjugated positive imperative form of the verb.<br/><br/>
                Use the tool below to copy and paste special characters if you need them.
            </h3>
            <SpecialCharacters />
            <hr />
            <form onSubmit={handleSubmit}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="secondary" focused={focused}>1. ustedes - cantar</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value1}
                        onInput={e=>setValue1(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. usted - hacer</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value2}
                        onInput={e=>setValue2(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. usted - dormir ( o --{'>'} ue)</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value3}
                        onInput={e=>setValue3(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. ustedes - conocer</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value4}
                        onInput={e=>setValue4(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. usted - jugar ( u --{'>'} ue)</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value5}
                        onInput={e=>setValue5(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. ustedes - venir</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value6}
                        onInput={e=>setValue6(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>7. usted - comer</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value7}
                        onInput={e=>setValue7(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>8. usted - colgar (o --{'>'} ue)</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value8}
                        onInput={e=>setValue8(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <h3>Given the pronouns and Spanish verb infinitive, give the conjugated positive imperative form of the verb.</h3>
                    <FormLabel component="legend" color="secondary" focused={focused}>9. subject: usted, direct object: lo, verb: hacer</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value9}
                        onInput={e=>setValue9(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>10. subject: ustedes, direct object: la, indirect object: me, verb: decir</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value10}
                        onInput={e=>setValue10(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>11. subject: usted, reflexive pronoun: se, verb: ir</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value11}
                        onInput={e=>setValue11(e.target.value)}
                        style={{width: "30%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>12. subject: ustedes, indirect object: me, verb: preguntar</FormLabel>
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
                <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/17">Return to Lesson 17</Link></Button>
                <br/>
                <Button variant="contained" color="primary" className={classes.button}><Link className="next-link" exact="true" to="/lessons/18">Next Lesson: The Spanish Negative →</Link></Button>
            </Box>
            <Copyright />
      </div>
    )
}

export default Quiz17