//Get references to reflection elements in HTML
//store reflection date in variable
let reflectionDate = document.querySelector('#date');
//sanity
// console.log(reflectionDate);
//store reflection text in variable
let reflectionText = document.querySelector('#reflectionText');
//sanity
// console.log(reflectionText);
//store

//get reference to radio buttons
let confidence = document.querySelector('#confidence');
//sanity
// console.log(confidence);

//get reference to submit reflections button
let submitButton = document.querySelector('.save');
//sanity
// console.log(submitButton);
let displayInBrowser = document.querySelector('.renderedReflection')
//sanity
// console.log(displayInBrowser);

let reflectionEntries = [];

//Create a function that stores the users input and pushes to array
let onClick = (event) => {
    event.preventDefault();
    //Create a journal entries array with object literal notation
    reflectionEntries = [];
    //Create object literal notation to store user input
    let everyEntry = {
        creation_date: reflectionDate,
        journal_entry: reflectionText,
        confidence_level: confidence
    };
    reflectionEntries.push(everyEntry);

    // reflectionEntries.forEach();
    //display the inputs inside the browser
    displayInBrowser.innerText= `Reflection date: ${everyEntry.creation_date.value}\nReflection: ${everyEntry.journal_entry.value}.\nConfidence level: ${everyEntry.confidence_level.value}`;

    console.log(reflectionEntries);
}


//create an event listener for the submit button
submitButton.addEventListener('click', onClick);










// renderReflectionJournalEntries();

// let renderReflectionJournalEntries = () => {
    
// };

//   `The reflection date is: ${reflectionEntries.creation_date}.
//   Their reflection is: ${reflectionEntries.journal_entry}.Their confidence level is: ${reflectionEntries.confidence_level}.`
// );

// everyEntry.creation_date = reflectionDate.value;
//     everyEntry.journal_entry = reflectionText.value;
//     everyEntry.confidence_level = confidence.value;