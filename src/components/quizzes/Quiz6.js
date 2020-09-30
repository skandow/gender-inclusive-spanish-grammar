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
import { loginUser } from '../../actions/user.js'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function Quiz6() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
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
        if (value1 === "está") {
            score += 1
        }
        if (value2 === "estamos") {
            score += 1
        }
        if (value3 === "estás") {
            score += 1 
        }
        if (value4 === "están") {
            score += 1
        }
        if (value5 === "estoy") {
            score += 1
        }
        if (value6 === "estáis") {
            score += 1
        }
        if (value7 === "soy") {
            score += 1
        }
        if (value8 === "está") {
            score += 1
        }
        if (value9 === "estás") {
            score += 1
        }
        if (value10 === "somos") {
            score += 1
        }
        setScore(score)
        const percentage = Math.round(score / 10 * 100) + "%"
        setPercentage(percentage)
        const token = localStorage.getItem("token")
        const payload = { quiz_score: {
          quiz: 6,
          score: score,
          percentage: percentage,
          user_id: user.id
        }
        }
        const thisQuiz = user.quiz_scores.find(score => score.quiz === 6)
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
          dispatch(loginUser(data.user.data.attributes))
    })}

    const focused = true

    return (
        <div>
            <h1>Quiz 6: The Verb <em>Estar</em></h1>
                <form onSubmit={handleSubmit}>
                <h3>For each sentence, choose the correct form of the verb <em>estar</em></h3>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="secondary" focused={focused}>1. He is home. - Él _____ en casa.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value1} onChange={e=>setValue1(e.target.value)}>
                        <FormControlLabel value="estás" control={<Radio />} label="estás" />
                        <FormControlLabel value="está" control={<Radio />} label="está" />
                        <FormControlLabel value="estoy" control={<Radio />} label="estoy" />
                        <FormControlLabel value="estamos" control={<Radio />} label="estamos" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. We are in the United States. - Nosotros _____ en los Estados Unidos.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value2} onChange={e=>setValue2(e.target.value)}>
                        <FormControlLabel value="están" control={<Radio />} label="están" />
                        <FormControlLabel value="estáis" control={<Radio />} label="estáis" />
                        <FormControlLabel value="estamos" control={<Radio />} label="estamos" />
                        <FormControlLabel value="estoy" control={<Radio />} label="estoy" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. You are sick. - Vos _____ enferme.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value3} onChange={e=>setValue3(e.target.value)}>
                        <FormControlLabel value="estás" control={<Radio />} label="estás" />
                        <FormControlLabel value="estoy" control={<Radio />} label="estoy" />
                        <FormControlLabel value="está" control={<Radio />} label="está" />
                        <FormControlLabel value="estáis" control={<Radio />} label="estáis" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. They are not happy. - Ellas no _____ contentas.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value4} onChange={e=>setValue4(e.target.value)}>
                        <FormControlLabel value="está" control={<Radio />} label="está" />
                        <FormControlLabel value="estamos" control={<Radio />} label="estamos" />
                        <FormControlLabel value="estoy" control={<Radio />} label="estoy" />
                        <FormControlLabel value="están" control={<Radio />} label="están" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. I'm tired. - Yo _____ cansado.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value5} onChange={e=>setValue5(e.target.value)}>
                        <FormControlLabel value="estás" control={<Radio />} label="estás" />
                        <FormControlLabel value="estoy" control={<Radio />} label="estoy" />
                        <FormControlLabel value="está" control={<Radio />} label="está" />
                        <FormControlLabel value="estáis" control={<Radio />} label="estáis" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. Are you in Spain? - ¿_____ en España vosotres? </FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value6} onChange={e=>setValue6(e.target.value)}>
                        <FormControlLabel value="estáis" control={<Radio />} label="estáis" />
                        <FormControlLabel value="están" control={<Radio />} label="están" />
                        <FormControlLabel value="estoy" control={<Radio />} label="estoy" />
                        <FormControlLabel value="está" control={<Radio />} label="está" />
                    </RadioGroup>
                    <hr />
                    <h3>For each sentence, choose the correct form of the verb <em>ser</em> or <em>estar</em></h3>
                    <FormLabel component="legend" color="secondary" focused={focused}>7. I am from Michigan. - Yo _____ de Michigan.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value7} onChange={e=>setValue7(e.target.value)}>
                        <FormControlLabel value="soy" control={<Radio />} label="soy" />
                        <FormControlLabel value="estoy" control={<Radio />} label="estoy" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>8. She's angry right now. - Ella _____ enojada.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value8} onChange={e=>setValue8(e.target.value)}>
                        <FormControlLabel value="es" control={<Radio />} label="es" />
                        <FormControlLabel value="está" control={<Radio />} label="está" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>9. Are you here? - ¿_____ aquí tú?</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value9} onChange={e=>setValue9(e.target.value)}>
                        <FormControlLabel value="eres" control={<Radio />} label="eres" />
                        <FormControlLabel value="estás" control={<Radio />} label="estás" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>10. We are children. - Nosotres _____ niñes.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value10} onChange={e=>setValue10(e.target.value)}>
                        <FormControlLabel value="somos" control={<Radio />} label="somos" />
                        <FormControlLabel value="estamos" control={<Radio />} label="estamos" />
                    </RadioGroup>
                    <hr />
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Check Answers
          </Button>
        </FormControl>
      </form> 
      <div className="score">
        <h2>{percentage ? `You got ${score} out of 10 correct. Percentage: ${percentage}` : null}</h2>
      </div>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/6">Return to This Lesson</Link>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/7">Next Lesson: Regular Verbs in the Present Indicative →</Link>
      </div>
    )
}

export default Quiz6