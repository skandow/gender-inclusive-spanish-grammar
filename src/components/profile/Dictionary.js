import React from 'react';
import Container from '@material-ui/core/Container';
import Copyright from '../containers/Copyright';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    form: {
      width: '50%',
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function Dictionary() {

    const classes = useStyles()
    const urlBase = "https://www.dictionaryapi.com/api/v3/references/spanish/json/"
    const urlKey = process.env.REACT_APP_DICTIONARY_KEY
    const [partOfSpeech, setPartOfSpeech] = React.useState('')
    const [language, setLanguage] = React.useState('')
    const [wordToTranslate, setWordToTranslate] = React.useState('')
    const [translatedWord, setTranslatedWord] = React.useState('')
    const [error, setError] = React.useState('')
    
    const url = urlBase + wordToTranslate + urlKey

    const handleSubmit = event => {
        event.preventDefault();
        setTranslatedWord('')
        if (!partOfSpeech || !language || !wordToTranslate) {
            setError('Error: Be sure that all fields are filled in.')
        } else {
            setError('')
            getJSON(url, function(err, data) {
                if (err !== null) {
                    console.log('Something went wrong: ' + err);
                } else {
                    parseData(data)
                }
            })
        }
    }

    const handleInput = event => {
        setWordToTranslate(event.target.value)
        if (translatedWord !== "") {
            setTranslatedWord('')
        }
    }

    const parseData = data => {
        console.log(data)
        let thisWordData = data.find(word => word.fl === partOfSpeech && word.meta.lang === language && word.hwi.hw === wordToTranslate)
        console.log(thisWordData)
        if (!thisWordData) {
            setError("Error: There was no matching word for the entered data.")
        } else {
            let translatedWordData
            if (thisWordData.shortdef[0].includes(":")) {
                translatedWordData = thisWordData.shortdef[0].split(": ").pop()
            } else {
                translatedWordData = thisWordData.shortdef[0]
            }
            setTranslatedWord(translatedWordData)
        }
    }

    const getJSON = function(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            const status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response)
            } else {
                callback(status, xhr.response)
            }
        };
        xhr.send();
    }

    const focused = true

    return (
        <Container component="main" maxWidth="md" style={{height: '76vh'}}>
            <CssBaseline />
            <div className={classes.paper}>
                <h1>Enter the word you would like translated.</h1>
                
                <form className={classes.form} onSubmit={handleSubmit}>
                    <FormLabel style={{textAlign: "left"}} component="legend" color="secondary" focused={focused}>Part of speech:</FormLabel>
                    <RadioGroup style={{margin: "auto"}} row value={partOfSpeech} onChange={e=>setPartOfSpeech(e.target.value)}>
                        <FormControlLabel value="noun" control={<Radio />} label="noun" />
                        <FormControlLabel value="pronoun" control={<Radio />} label="pronoun" />
                        <FormControlLabel value="adjective" control={<Radio />} label="adjective" />
                    </RadioGroup>
                    <FormLabel style={{textAlign: "left"}} component="legend" color="secondary" focused={focused}>Language:</FormLabel>
                    <RadioGroup style={{margin: "auto"}} row value={language} onChange={e=>setLanguage(e.target.value)}>
                        <FormControlLabel value="en" control={<Radio />} label="English to Spanish" />
                        <FormControlLabel value="es" control={<Radio />} label="Spanish to English" />
                    </RadioGroup>
                    <TextField
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    fullWidth
                    id="translated word"
                    label="Word To Translate"
                    name="translated word"
                    value={wordToTranslate}
                    onInput={e=>handleInput(e)}
                    autoFocus
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                    Translate This Word
                    </Button>
                    {translatedWord ? 
                    <div style={{border: "solid #006341 2px", padding: "2px", marginTop: "15px"}}>
                    {wordToTranslate} = {translatedWord}
                    </div> : error ?
                    <div>
                        <div style={{border: "solid #b81140 2px", padding: "2px", marginTop: "15px"}}>{error}</div>
                    </div> :
                    null}
                </form>
                <Copyright />
            </div>
        </Container>
    )
}