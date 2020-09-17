import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function Quiz3() {
    const classes = useStyles()
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
        if (value1 === "eres") {
            score += 1
        }
        if (value2 === "es") {
            score += 1
        }
        if (value3 === "sois") {
            score += 1 
        }
        if (value4 === "son") {
            score += 1
        }
        if (value5 === "soy") {
            score += 1
        }
        if (value6 === "sos") {
            score += 1
        }
        if (value7 === "son") {
            score += 1
        }
        if (value8 === "es") {
            score += 1
        }
        setScore(score)
        setPercentage(Math.round(score / 8 * 100) + "%")
    }

    const focused = true

    return (
        <div>
            <h1>Quiz 3: Subject Pronouns</h1>
                <form onSubmit={handleSubmit}>
                <h3>For each sentence, select the appropriate verb to fill in the blank.</h3>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="secondary" focused={focused}>1. Tú _____ bonita.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value1} onChange={e=>setValue1(e.target.value)}>
                        <FormControlLabel value="soy" control={<Radio />} label="soy" />
                        <FormControlLabel value="eres" control={<Radio />} label="eres" />
                        <FormControlLabel value="somos" control={<Radio />} label="somos" />
                        <FormControlLabel value="es" control={<Radio />} label="es" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. ¿Quién _____ usted?</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value2} onChange={e=>setValue2(e.target.value)}>
                        <FormControlLabel value="somos" control={<Radio />} label="somos" />
                        <FormControlLabel value="sois" control={<Radio />} label="sois" />
                        <FormControlLabel value="es" control={<Radio />} label="es" />
                        <FormControlLabel value="sos" control={<Radio />} label="sos" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. Vosotres _____ muy divertides.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value3} onChange={e=>setValue3(e.target.value)}>
                        <FormControlLabel value="sois" control={<Radio />} label="sois" />
                        <FormControlLabel value="son" control={<Radio />} label="son" />
                        <FormControlLabel value="es" control={<Radio />} label="es" />
                        <FormControlLabel value="soy" control={<Radio />} label="soy" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. Ellos _____ aburridos.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value4} onChange={e=>setValue4(e.target.value)}>
                        <FormControlLabel value="es" control={<Radio />} label="es" />
                        <FormControlLabel value="son" control={<Radio />} label="son" />
                        <FormControlLabel value="sos" control={<Radio />} label="sos" />
                        <FormControlLabel value="somos" control={<Radio />} label="somos" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. Yo _____ estadiounidense.</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value5} onChange={e=>setValue5(e.target.value)}>
                        <FormControlLabel value="soy" control={<Radio />} label="soy" />
                        <FormControlLabel value="eres" control={<Radio />} label="eres" />
                        <FormControlLabel value="somos" control={<Radio />} label="somos" />
                        <FormControlLabel value="sois" control={<Radio />} label="sois" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. Vos _____ alta. </FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value6} onChange={e=>setValue6(e.target.value)}>
                        <FormControlLabel value="somos" control={<Radio />} label="somos" />
                        <FormControlLabel value="sos" control={<Radio />} label="sos" />
                        <FormControlLabel value="es" control={<Radio />} label="es" />
                        <FormControlLabel value="soy" control={<Radio />} label="soy" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>7. ¿De dónde _____ ustedes? </FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value7} onChange={e=>setValue7(e.target.value)}>
                        <FormControlLabel value="son" control={<Radio />} label="son" />
                        <FormControlLabel value="sos" control={<Radio />} label="sos" />
                        <FormControlLabel value="somos" control={<Radio />} label="somos" />
                        <FormControlLabel value="eres" control={<Radio />} label="eres" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>8. Eric _____ interesante, ¿no? </FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value8} onChange={e=>setValue8(e.target.value)}>
                        <FormControlLabel value="sois" control={<Radio />} label="sois" />
                        <FormControlLabel value="eres" control={<Radio />} label="eres" />
                        <FormControlLabel value="soy" control={<Radio />} label="soy" />
                        <FormControlLabel value="es" control={<Radio />} label="es" />
                    </RadioGroup>
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Check Answer
          </Button>
        </FormControl>
      </form> 
      <div className="score">
        <h2>{percentage ? `You got ${score} out of 8 correct. Percentage: ${percentage}` : null}</h2>
      </div>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/3">Return to This Lesson</Link>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/4">Next Lesson: Spanish Subject Pronouns →</Link>
      </div>
    )
}

export default Quiz3