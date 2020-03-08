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


//Create a function that stores the users input and pushes to array
let onClick = (event) => {
    event.preventDefault();
    //Create a journal entries array with object literal notation
    let reflectionEntries = [];
    //Create object literal notation to store user input
    let everyEntry = {
        creation_date: reflectionDate.value,
        journal_entry: reflectionText.value,
        confidence_level: confidence.value
    };
    reflectionEntries.push(everyEntry);

    // !! you should be iterating through the array to update the inner text of the empty div 
    //display the inputs inside the browser
    displayInBrowser.innerText= `Date: ${reflectionEntries[0].creation_date}\nReflection: ${reflectionEntries[0].journal_entry}\nConfidence Level: ${reflectionEntries[0].confidence_level}`;

    // console.log(reflectionEntries);
    // reflectionEntries.forEach();
}


//create an event listener for the submit button
submitButton.addEventListener('click', onClick);



