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

function Quiz2() {
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
        setPercentage(Math.round(score / 6 * 100) + "%")
    }

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
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Check Answer
          </Button>
        </FormControl>
      </form> 
      <div className="score">
        <h2>{percentage ? `You got ${score} out of 6 correct. Percentage: ${percentage}` : null}</h2>
      </div>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/2">Return to This Lesson</Link>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/3">Next Lesson: The Verb <em>Ser</em> →</Link>
      </div>
    )
}

export default Quiz2