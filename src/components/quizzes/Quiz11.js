import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import SpecialCharacters from './SpecialCharacters'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { saveQuizScores } from '../../actions/quizScores.js'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function Quiz11() {
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
        if (value1.toLowerCase() === "te duchas") {
            score += 1
        }
        if (value2.toLowerCase() === "se preocupa") {
            score += 1
        }
        if (value3.toLowerCase() === "os acercáis") {
            score += 1 
        }
        if (value4.toLowerCase() === "me pongo") {
            score += 1
        }
        if (value5.toLowerCase() === "se viste") {
            score += 1
        }
        if (value6.toLowerCase() === "se levantan") {
            score += 1
        }
        if (value7.toLowerCase() === "nos besamos") {
            score += 1
        }
        if (value8.toLowerCase() === "te atrevés") {
            score += 1
        }
        setScore(score)
        const percentage = Math.round(score / 8 * 100) + "%"
        setPercentage(percentage)
        const token = localStorage.getItem("token")
        const payload = { quiz_score: {
          quiz: 11,
          score: score,
          percentage: percentage,
          user_id: user.id
        }
        }
        const thisQuiz = quizScores.find(score => score.quiz === 11)
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
            <h1>Quiz 11: Reflexive and Reciprocal Pronouns</h1>
                <form onSubmit={handleSubmit}>
                <h3>Given the verb infinitive and corresponding subject pronoun, write the correct reflexive/reciprocal verb and pronoun.<br/><br/> Use 
                    the tool below to copy and paste special characters if you need them.
                </h3>
                <SpecialCharacters />
                <hr />
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" color="secondary" focused={focused}>1. ducharse - tú</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value1}
                        onInput={e=>setValue1(e.target.value)}
                        style={{width: "100%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. preocuparse - ella</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value2}
                        onInput={e=>setValue2(e.target.value)}
                        style={{width: "100%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. acercarse - vosotres</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value3}
                        onInput={e=>setValue3(e.target.value)}
                        style={{width: "100%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. ponerse - yo</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value4}
                        onInput={e=>setValue4(e.target.value)}
                        style={{width: "100%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. vestirse - elle</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value5}
                        onInput={e=>setValue5(e.target.value)}
                        style={{width: "100%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. levantarse - ellas</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value6}
                        onInput={e=>setValue6(e.target.value)}
                        style={{width: "100%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>7. besarse - nosotros</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value7}
                        onInput={e=>setValue7(e.target.value)}
                        style={{width: "100%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>8. atreverse - vos</FormLabel>
                    <TextField
                        variant="outlined"
                        value={value8}
                        onInput={e=>setValue8(e.target.value)}
                        style={{width: "100%", margin: "auto", marginTop: "2px"}}
                    />
                    <hr />
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Check Answers
          </Button>
        </FormControl>
      </form> 
      <div className="score">
        <h2>{percentage ? `You got ${score} out of 8 correct. Percentage: ${percentage}` : null}</h2>
      </div>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/11">Return to This Lesson</Link>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/12">Next Lesson: Direct Object Pronouns →</Link>
      </div>
    )
}

export default Quiz11