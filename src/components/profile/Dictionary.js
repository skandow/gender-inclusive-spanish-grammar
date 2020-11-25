import React from 'react';

export default function Dictionary() {
    const url = "https://www.dictionaryapi.com/api/v3/references/spanish/json/language?key=b1947923-495e-4218-b698-eafcbf46899c"

    const onButton = () => {
        getJSON(url, function(err, data) {
            if (err !== null) {
                console.log('Something went wrong: ' + err);
            } else {
                console.log(data)
            }
        })
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
        <div>
            <button onClick={onButton}>Click this button</button>
        </div>
    )
}