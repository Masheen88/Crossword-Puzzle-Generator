const words = [];
let word = words.pop();
let index = prompt("Select an indexed word 0-9:0");

//Fetch Random Words API - Begin
fetch("https://random-word-api.herokuapp.com/word?number=10")
  .then((response) => response.json())
  .then(function (result) {
    //Logs the fetch results to console.
    console.log("Original Result Array:", result);

    //Loop to iterate through each  results - Begin
    for (var i = 0; i < result.length; i++) {
      words.push(`${[i]} ${result[i]} \n`);
    }
    //Logs the returned words to console.
    // console.log("Original Words:", words);

    //Outputs to console, a word from the selected index.
    console.log(`
    Using an index of ${index} the word returned is ${result.at(index)}
    `);

    //Code to execute - Begin

    //Outputs to an alert, a word from the selected index.
    return alert(`
    Using an index of ${index} the word returned is: ${result[index]}`);
  })
  //Returns an error if the API is not working properly.` - Begin
  .catch((error) => console.log("error", error));

//Outside of Code
