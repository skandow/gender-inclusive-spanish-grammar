import React from 'react';
import Container from '@material-ui/core/Container';
import Copyright from '../containers/Copyright';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

    const classes= useStyles()
    const urlBase = "https://www.dictionaryapi.com/api/v3/references/spanish/json/"
    const urlKey = process.env.REACT_APP_DICTIONARY_KEY
    const [wordToTranslate, setWordToTranslate] = React.useState('')
    const [translatedWord, setTranslatedWord] = React.useState('')
    
    const url = urlBase + wordToTranslate + urlKey

    console.log(url)

    const handleSubmit = event => {
        event.preventDefault();
        getJSON(url, function(err, data) {
            if (err !== null) {
                console.log('Something went wrong: ' + err);
            } else {
                parseData(data)
            }
        })
    }

    const handleInput = event => {
        setWordToTranslate(event.target.value)
        if (translatedWord !== "") {
            setTranslatedWord('')
        }
    }

    const parseData = data => {
        console.log(data)
        let thisWordData = data.find(word => word.fl === "noun" && word.hwi.hw === wordToTranslate)
        let translatedWordData
        if (thisWordData.shortdef[0].includes(":")) {
            translatedWordData = thisWordData.shortdef[0].split(": ").pop()
        } else {
            translatedWordData = thisWordData.shortdef[0]
        }
        setTranslatedWord(translatedWordData)
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

    return (
        <Container component="main" maxWidth="md" style={{height: '76vh'}}>
            <CssBaseline />
            <div className={classes.paper}>
                <h1>Enter the English word you would like translated.</h1>
                <form className={classes.form} onSubmit={handleSubmit}>
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
                    </div> : null}
                </form>
                <Copyright />
            </div>
        </Container>
    )
}