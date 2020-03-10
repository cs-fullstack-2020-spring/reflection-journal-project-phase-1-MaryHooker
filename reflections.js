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
//Created for my empty space in browser for the users reflections
let displayInBrowser = document.querySelector('#recent')
//sanity
// console.log(displayInBrowser);

//Create an empty journal entries array
let reflectionEntries = [];

//Create a function that stores the users input and pushes to array
let onClick = (event) => {
    event.preventDefault();
    
    //Create object literal notation to store user input
    let everyEntry = {
        creation_date: reflectionDate.value,
        journal_entry: reflectionText.value,
        confidence_level: confidence.value
    };
    //push the objects into the empty reflections array
    reflectionEntries.push(everyEntry);
    //call function that iterates through the array and display each object in the browser
    displayEntries(reflectionEntries);

};
    

//Create a function that uses the empty string as its parameters and replaces the innerText in the browser
let displayEntries = (reflectionEntries) => {
    //create empty string
    let reflectionString='';
    //create function that iterates through every object in the array
    reflectionEntries.forEach(element =>
    {   //build template literal that will list all of the users data
        reflectionString=`${reflectionString} Date: ${element.creation_date}\nEntry: ${element.journal_entry}\nConfidence: ${element.confidence_level}\n\n`;
        
    });
    //display user inputs inside empty p tags of the 
    displayInBrowser.innerText= `${reflectionString}`;
}
//create an event listener for the submit button
submitButton.addEventListener('click', onClick);




   

