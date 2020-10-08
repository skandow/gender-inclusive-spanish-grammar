import React from 'react'
import TextField from '@material-ui/core/TextField';

function SpecialCharacters() {
    
    const [value, setValue] = React.useState('')
    
    const characters = ["á", "é", "í", "ó", "ú", "ñ"]

    const createButtons = () => {
        return characters.map(character => {
            return  <button style={{backgroundColor: "#006341", color: "white", width: "35px", margin: "2px"}} onClick={e=>setValue(e.target.value)} value={character}>{character}</button>
        })
    }
    
    return (
        <div>
            {createButtons()}
            <br/>
            <TextField
                variant="outlined"
                value={value}
                style={{width: "20%", margin: "auto", marginTop: "2px"}}
            />
        </div>
    )
}

export default SpecialCharacters