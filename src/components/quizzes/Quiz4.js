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

function Quiz4() {
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
        if (value1 === "las") {
            score += 1
        }
        if (value2 === "el") {
            score += 1
        }
        if (value3 === "les") {
            score += 1 
        }
        if (value4 === "la") {
            score += 1
        }
        if (value5 === "los") {
            score += 1
        }
        if (value6 === "le") {
            score += 1
        }
        setScore(score)
        setPercentage(Math.round(score / 6 * 100) + "%")
    }

    const focused = true

    return (
        <div>
            <h1>Quiz 4: Nouns</h1>
                <form onSubmit={handleSubmit}>
                <h3>For each sentence, identfy which definite article should be used with each noun</h3>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" color="secondary" focused={focused}>1. The friends (all female): _____ amigas</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value1} onChange={e=>setValue1(e.target.value)}>
                        <FormControlLabel value="el" control={<Radio />} label="el" />
                        <FormControlLabel value="los" control={<Radio />} label="los" />
                        <FormControlLabel value="las" control={<Radio />} label="las" />
                        <FormControlLabel value="la" control={<Radio />} label="la" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>2. The brother: _____ hermano</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value2} onChange={e=>setValue2(e.target.value)}>
                        <FormControlLabel value="los" control={<Radio />} label="los" />
                        <FormControlLabel value="les" control={<Radio />} label="les" />
                        <FormControlLabel value="le" control={<Radio />} label="le" />
                        <FormControlLabel value="el" control={<Radio />} label="el" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>3. The cousins (non-binary): _____ primes</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value3} onChange={e=>setValue3(e.target.value)}>
                        <FormControlLabel value="las" control={<Radio />} label="las" />
                        <FormControlLabel value="les" control={<Radio />} label="les" />
                        <FormControlLabel value="la" control={<Radio />} label="la" />
                        <FormControlLabel value="los" control={<Radio />} label="los" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>4. The female teacher: _____ profesora</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value4} onChange={e=>setValue4(e.target.value)}>
                        <FormControlLabel value="la" control={<Radio />} label="la" />
                        <FormControlLabel value="le" control={<Radio />} label="le" />
                        <FormControlLabel value="el" control={<Radio />} label="el" />
                        <FormControlLabel value="los" control={<Radio />} label="los" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>5. The boys: _____ chicos</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value5} onChange={e=>setValue5(e.target.value)}>
                        <FormControlLabel value="el" control={<Radio />} label="el" />
                        <FormControlLabel value="les" control={<Radio />} label="les" />
                        <FormControlLabel value="la" control={<Radio />} label="la" />
                        <FormControlLabel value="los" control={<Radio />} label="los" />
                    </RadioGroup>
                    <hr />
                    <FormLabel component="legend" color="secondary" focused={focused}>6. The non-binary small child: _____ niñe</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value6} onChange={e=>setValue6(e.target.value)}>
                        <FormControlLabel value="le" control={<Radio />} label="le" />
                        <FormControlLabel value="los" control={<Radio />} label="los" />
                        <FormControlLabel value="la" control={<Radio />} label="la" />
                        <FormControlLabel value="el" control={<Radio />} label="el" />
                    </RadioGroup>
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Check Answer
          </Button>
        </FormControl>
      </form> 
      <div className="score">
        <h2>{percentage ? `You got ${score} out of 6 correct. Percentage: ${percentage}` : null}</h2>
      </div>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/4">Return to This Lesson</Link>
      <Link style={{display: "inline-block"}} className="next-link" exact="true" to="/lessons/5">Next Lesson: Spanish Subject Pronouns →</Link>
      </div>
    )
}

export default Quiz4