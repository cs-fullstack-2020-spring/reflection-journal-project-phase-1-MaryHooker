//Get references to reflection elements in HTML
//store reflection date in variable
let reflectionDate = document.querySelector('#date');
//sanity
console.log(reflectionDate);
//store reflection text in variable
let reflectionText = document.querySelector('#reflectionText');
//sanity
console.log(reflectionText);
//store

//get reference to radio buttons
let confidence = document.querySelector('#confidence');
//sanity
console.log(confidence);

//get reference to submit reflections button
let submitButton = document.querySelector('.save');
//sanity
console.log(submitButton);

//Create a journal entries array with object literal notation

const reflectionEntries = [
    {
        creation_date: reflectionDate.value,
        journal_entry: reflectionText.value, 
        confidence_level: confidence.value
    }
    
];

//create a function that stores the users input
let onClick = (event) =>{
    console.log(
        `The reflection date is: ${reflectionEntries.creation_date}.
        Their reflection is: ${reflectionEntries.journal_entry}.Their confidence level is: ${reflectionEntries.confidence_level}.`
    )
};
//create an event listener for the submit button
submitButton.addEventListener('click', onClick);




