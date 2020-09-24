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

function Quiz5() {
    const classes = useStyles()
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
        if (value1 === "viejos") {
            score += 1
        }
        if (value2 === "rubia") {
            score += 1
        }
        if (value3 === "pequeño") {
            score += 1 
        }
        if (value4 === "alte") {
            score += 1
        }
        if (value5 === "divertides") {
            score += 1
        }
        if (value6 === "limpias") {
            score += 1
        }
        setScore(score)
        setPercentage(Math.round(score / 6 * 100) + "%")
    }

    const focused = true

    return (
        <div>
            <h1>Quiz 5: Adjectives</h1>
                <form onSubmit={handleSubmit}>
                <h3>For each sentence, identfy which adjective should be used with each noun</h3>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="secondary" focused={focused}>1. The old cats: los gatos _____</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value1} onChange={e=>setValue1(e.target.value)}>
                        <FormControlLabel value="viejos" control={<Radio />} label="viejos" />
                        <FormControlLabel value="viejo" control={<Radio />} label="viejo" />
                        <FormControlLabel value="viejas" control={<Radio />} label="viejas" />
                        <FormControlLabel value="vieja" control={<Radio />} label="vieja" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. The blonde aunt: la tía _____</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value2} onChange={e=>setValue2(e.target.value)}>
                        <FormControlLabel value="rubios" control={<Radio />} label="rubios" />
                        <FormControlLabel value="rubio" control={<Radio />} label="rubio" />
                        <FormControlLabel value="rubia" control={<Radio />} label="rubia" />
                        <FormControlLabel value="rubias" control={<Radio />} label="rubias" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. The small car: el coche _____</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value3} onChange={e=>setValue3(e.target.value)}>
                        <FormControlLabel value="pequeñe" control={<Radio />} label="pequeñe" />
                        <FormControlLabel value="pequeñas" control={<Radio />} label="pequeñas" />
                        <FormControlLabel value="pequeña" control={<Radio />} label="pequeña" />
                        <FormControlLabel value="pequeño" control={<Radio />} label="pequeño" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. The tall non-binary child: le chique _____</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value4} onChange={e=>setValue4(e.target.value)}>
                        <FormControlLabel value="alte" control={<Radio />} label="alte" />
                        <FormControlLabel value="altos" control={<Radio />} label="altos" />
                        <FormControlLabel value="alta" control={<Radio />} label="alta" />
                        <FormControlLabel value="alto" control={<Radio />} label="alto" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. The fun queer friends: les amigues _____</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value5} onChange={e=>setValue5(e.target.value)}>
                        <FormControlLabel value="divertidos" control={<Radio />} label="divertidos" />
                        <FormControlLabel value="divertida" control={<Radio />} label="divertida" />
                        <FormControlLabel value="divertides" control={<Radio />} label="divertides" />
                        <FormControlLabel value="divertide" control={<Radio />} label="divertide" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. The clean beds: las camas _____. </FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value6} onChange={e=>setValue6(e.target.value)}>
                        <FormControlLabel value="limpia" control={<Radio />} label="limpia" />
                        <FormControlLabel value="limpios" control={<Radio />} label="limpios" />
                        <FormControlLabel value="limpio" control={<Radio />} label="limpio" />
                        <FormControlLabel value="limpias" control={<Radio />} label="limpias" />
                    </RadioGroup>
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Check Answer
          </Button>
        </FormControl>
      </form> 
      <div className="score">
        <h2>{percentage ? `You got ${score} out of 6 correct. Percentage: ${percentage}` : null}</h2>
      </div>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/5">Return to This Lesson</Link>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/6">Next Lesson: The Verb <em>Estar</em> →</Link>
      </div>
    )
}

export default Quiz5