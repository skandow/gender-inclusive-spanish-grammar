import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Copyright from '../containers/Copyright';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Fade from 'react-reveal/Fade';
const pluralize = require('pluralize');

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    form: {
      width: '50%',
      height: '80%',
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
    const [gender, setGender] = React.useState('')
    const [wordToTranslate, setWordToTranslate] = React.useState('')
    const [translatedWord, setTranslatedWord] = React.useState('')
    const [error, setError] = React.useState('')

    const user = useSelector(state => state.user)
    let subjectPronoun
    if (user.preferred_pronouns.substr(0, 2) === "he" || user.preferred_pronouns.substr(0, 3) === "she" || user.preferred_pronouns.substr(0, 4) === "they") {
        subjectPronoun = "they (singular)"
    } else {
        subjectPronoun = user.preferred_pronouns.split(" ")[0].split(",")[0]
    }

    const urlMiddle = partOfSpeech === "noun" ? pluralize.singular(wordToTranslate.toLowerCase()) : wordToTranslate.toLowerCase()
    
    const url = urlBase + urlMiddle + urlKey

    const specialWordEnglish = ["this", "that", "these", "those", "they", "we"]
    const specialWordSpanishMasculine = ["este", "ese", "estos", "esos", "ellos", "nosotros"]
    const specialWordSpanishFeminine = ["esta", "esa", "estas", "esas", "ellas", "nosotras"]
    const specialWordSpanishNonBinary = ["este", "ese", "estes", "eses", "elles", "nosotres"]
    const nonBinarySubjectPronouns = ["e", "ey", "per", "sie", "ve", "zie", "ze"]
    const nonBinaryObjectPronouns = ["em", "per", "sir", "ver", "zim", "hir", "zir"]
    const nonBinaryPossessivePronouns = ["eirs", "pers", "hirs", "vers", "zirs"]
    const nonBinaryReflexivePronouns = ["eirself", "perself", "hirself", "verself", "zirself"]
    const nonBinaryPossessiveAdjectives = ["eir", "pers", "hir", "vis", "zir"]
    const nonBinarySpanishPronouns = ["elle", "elles"]

    const handleSubmit = event => {
        event.preventDefault();
        setTranslatedWord('')
        console.log("Is this word plural?", pluralize.isPlural(wordToTranslate.toLowerCase()))
        setWordToTranslate(wordToTranslate.toLowerCase())
        if (!partOfSpeech || !language || !wordToTranslate) {
            setError('Error: Be sure that all fields are filled in.')
        } else {
            setError('')
            console.log("Word to translate: ", wordToTranslate)
            let specialWordReply = checkForSpecialWord(wordToTranslate.toLowerCase())
            if (specialWordReply !== "") {
                setTranslatedWord(specialWordReply)
            } else {
                getJSON(url, function(err, data) {
                    if (err !== null) {
                        console.log('Something went wrong: ' + err);
                    } else {
                        determineRefetch(data)
                    }
                })
            }
        }
    }

    const determineRefetch = data => {
        let compareWord = pluralize.singular(wordToTranslate)
        let lastLetter = compareWord.charAt(compareWord.length - 1)
        console.log("in determine refectch")
        if (!data[0].fl && language === "es") {
            if (lastLetter === "a" || lastLetter === "e") {
                console.log("last letter is e or a")
                let masculineForm = compareWord.substr(0, wordToTranslate.length - 1) + "o"
                let newUrl = urlBase + masculineForm + urlKey
                getJSON(newUrl, function(err, data) {
                    if (err !== null) {
                        console.log('Something went wrong: ' + err)
                    } else {
                        parseData(data)
                    }
                })
            }
        } else {
            parseData(data)
        }
    }

    const checkForSpecialWord = word => {
        console.log("Checking for special word", specialWordEnglish, word)
        console.log("Is the word included? ", specialWordEnglish.includes(word))
        if (nonBinarySpanishPronouns.includes(word) && language === "es") {
            if (word === "elles") {
                return "they"
            } else {
                return subjectPronoun
            }            
        }
        if (nonBinarySubjectPronouns.includes(word)) {
            return "elle"
        }
        if (nonBinaryObjectPronouns.includes(word) && partOfSpeech === "pronoun") {
            return "le"
        }
        if (nonBinaryPossessivePronouns.includes(word)) {
            switch(gender) {
                case "masculine":
                    return "suyo";
                case "feminine":
                    return "suya";
                case "non-binary":
                    return "suye";
                default:
                    return "suyo";
            }
        }
        if (nonBinaryReflexivePronouns.includes(word)) {
            return "se"
        }
        if (nonBinaryPossessiveAdjectives.includes(word) && partOfSpeech === "adjective") {
            if (pluralize.isPlural(word)) {
                return "sus"
            } else {
                return "su"
            }
        }
        if (language === "en" && specialWordEnglish.includes(word)) {
            let index = specialWordEnglish.indexOf(word)
            if (gender === "masculine" || gender === "") {
                return specialWordSpanishMasculine[index]
            } else if (gender === "feminine") {
                return specialWordSpanishFeminine[index]
            } else if (gender === "non-binary") {
                return specialWordSpanishNonBinary[index]
            }
        } else if (language === "es") {
            if (specialWordSpanishMasculine.includes(word)) {
                let index = specialWordSpanishMasculine.indexOf(word)
                return specialWordEnglish[index]
            } else if (specialWordSpanishFeminine.includes(word)) {
                let index = specialWordSpanishFeminine.indexOf(word)
                return specialWordEnglish[index]
            } else if (specialWordSpanishNonBinary.includes(word)) {
                let index = specialWordSpanishNonBinary.indexOf(word)
                return specialWordEnglish[index]
            } else {
                return ""
            }
        } else {
            return ""
        }
    }

    const handleInput = event => {
        setWordToTranslate(event.target.value)
        if (translatedWord !== "") {
            setTranslatedWord('')
        }
    }

    const parseData = data => {
        if (language === "en") {
            parseEnglishData(data)
        } else {
            parseSpanishData(data)
        }
    }

    const parseEnglishData = data => {
        let thisWordData
        let compareWord = pluralize.singular(wordToTranslate.toLowerCase())
        if (partOfSpeech === "noun") {
            thisWordData = data.find(word => word.fl.includes(partOfSpeech) && word.meta.lang === language && word.hwi.hw === compareWord)
        }
        else {
            thisWordData = data.find(word => word.fl.includes(partOfSpeech) && word.meta.lang === language && word.hwi.hw === wordToTranslate.toLowerCase())
        }
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
            let masculine = translatedWordData
            let feminine = translatedWordData
            let genderNeutral = translatedWordData
            let typicalMasculineEndings = ["o", "r"]
            let theseWords = translatedWordData.split(",")
            if (translatedWordData.includes(",")) {
                console.log("There is more than one word here...")
                theseWords[1] = theseWords[1].split(';')[0]
                if (theseWords[1].charAt(theseWords[1].length - 1) === "a" && typicalMasculineEndings.includes(theseWords[0].charAt(theseWords[0].length - 1))) {
                    masculine = theseWords[0]
                    feminine = theseWords[1]
                    genderNeutral = theseWords[1].substr(0, theseWords[1].length - 1) + "e"
                } else if (translatedWordData.includes("(")) {
                    let thisWord = theseWords[0].split(" (")[0]
                    translatedWordData = thisWord
                    if (partOfSpeech === "noun" || partOfSpeech === "adjective") {
                        if (typicalMasculineEndings.includes(thisWord.charAt(thisWord.length - 1))) {
                            masculine = thisWord
                            if (masculine[masculine.length - 1] === "o") {
                                feminine = thisWord.substr(0, thisWord.length - 1) + "a"
                                genderNeutral = thisWord.substr(0, thisWord.length - 1) + "e"
                            } else {
                                feminine = thisWord + "a"
                                genderNeutral = thisWord + "e"
                            }
                        } else {
                            masculine = thisWord
                            feminine = thisWord
                            genderNeutral = thisWord
                        } 
                    } else {
                    masculine = thisWord
                    feminine = thisWord
                    genderNeutral = thisWord
                    }
                } else {
                    masculine = theseWords[0]
                    feminine = theseWords[0]
                    genderNeutral = theseWords[0]
                    translatedWordData = theseWords[0]
                }
            }
            console.log(theseWords)
            console.log(partOfSpeech === "adjective")
            console.log(theseWords[0].charAt(theseWords[0].length - 1) === "o")
            if (partOfSpeech === "adjective" && theseWords[0].charAt(theseWords[0].length - 1) === "o") {
                masculine = theseWords[0]
                feminine = theseWords[0].substr(0, theseWords[0].length - 1) + "a"
                genderNeutral = theseWords[0].substr(0, theseWords[0].length - 1) + "e"
            } 
            switch(gender) {
                case "masculine":
                    setTranslatedWord(masculine)
                    break;
                case "feminine":
                    setTranslatedWord(feminine)
                    break;
                case "non-binary":
                    setTranslatedWord(genderNeutral)
                    break;
                default:
                    setTranslatedWord(translatedWordData)
            }
        }
    }

    const parseSpanishData = data => {
        console.log(data)
        let thisWordData
        let compareWord = pluralize.singular(wordToTranslate.toLowerCase())
        console.log("compare word: ", compareWord)
        if (partOfSpeech === "noun") {
            thisWordData = data.find(word => word.fl.includes(partOfSpeech) && word.meta.lang === language && word.hwi.hw === compareWord)
            console.log("compare word: ", compareWord, "this word data: ", thisWordData)
            if (!thisWordData) {
                console.log("got to here", compareWord.charAt(compareWord.length - 1))
                if (compareWord.charAt(compareWord.length - 1) === "a") {
                    console.log("got to here as well")
                    compareWord = compareWord.substr(0, compareWord.length - 1) + "o"
                    console.log("new compare word: ", compareWord)
                    thisWordData = data.find(word => word.fl.includes(partOfSpeech) && word.meta.lang === language && word.hwi.hw === compareWord)
                } 
            }
        } else {
            thisWordData = data.find(word => word.fl.includes(partOfSpeech) && word.meta.lang === language && word.hwi.hw === wordToTranslate.toLowerCase())
        }
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
            let theseWords = translatedWordData.split(",")
            if (translatedWordData.includes(",")) {
                console.log("There is more than one word here...")
                theseWords[1] = theseWords[1].split(';')[0]
            } else {
                translatedWordData = theseWords[0]
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
    const endResult = pluralize.isPlural(wordToTranslate) ? nonBinaryPossessivePronouns.includes(wordToTranslate) ? translatedWord : partOfSpeech !== "noun" ? translatedWord : pluralize.plural(translatedWord) : translatedWord
    const result = wordToTranslate + " = " + endResult
    console.log("Is the word to translate plural? ", wordToTranslate, pluralize.isPlural(wordToTranslate), pluralize.plural(translatedWord))
    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    Enter the word you would like translated.
                </Typography>
                <Typography component="h1" variant="h6">
                    Be sure to make a selection for each field.
                </Typography>
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
                    <FormLabel style={{textAlign: "left"}} component="legend" color="secondary" focused={focused}>Gender (if applicable):</FormLabel>
                    <RadioGroup style={{margin: "auto"}} row value={gender} onChange={e=>setGender(e.target.value)}>
                        <FormControlLabel value="masculine" control={<Radio />} label="masculine" />
                        <FormControlLabel value="feminine" control={<Radio />} label="feminine" />
                        <FormControlLabel value="non-binary" control={<Radio />} label="non-binary" />
                        <FormControlLabel value="" control={<Radio />} label="N/A" />
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
                </form>
                {translatedWord ? 
                    <div style={{border: "solid #006341 2px", padding: "5px", marginTop: "15px", marginBottom: "-20px", width: "50%"}}>
                        <Fade right>
                            {result}
                        </Fade>
                        </div> : error ?
                        <div style={{border: "solid #b81140 2px", padding: "5px", marginTop: "15px", marginBottom: "-20px", width: "50%"}}>
                             <Fade left>{error}</Fade>
                        </div>
                         :
                <div style={{height: "29px"}}>{null}</div>}
                <Copyright />
            </div>
        </Container>
    )
}