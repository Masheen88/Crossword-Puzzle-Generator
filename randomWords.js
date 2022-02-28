//A class containing and object array of randomly generated words - Begin
let newWordsAPI = randomWordsAPI();

class randomWordsClass {
  constructor() {
    this.randomlyGeneratedWords = [];
  }
}

function randomWordsAPI(blankWordsArr) {
  //Fetch Random Words API - Begin
  let index = prompt("Select an indexed word: 0-9");

  let words = [];
  let newblankWordsArr = [];
  let getWords = fetch("https://random-word-api.herokuapp.com/word?number=10")
    .then((response) => response.json())
    .then(function (result) {
      //Logs the fetch results to console.
      console.log("Results inside promise:", result);

      //Loop to iterate through each  results - Begin
      for (var i = 0; i < result.length; i++) {
        words.push(`${result[i]}`);
      }

      /*
      Logs the returned words to console.
      console.log("Original Words:", words);
      */

      //Outputs to console, a word from the selected index.
      console.log(`
      Inside promise: You selected index: ${index} and the word returned is - ${result.at(index)}
      `);

      //Alerts which index and word you chose.
      // alert(`
      // Inside promise: Using an index of ${index} the word returned is: ${result[index]}`);
      //*** Looking to return the api array to a new array to interact with. ***/
    })
    //Returns an error if the API is not working properly.` - Begin
    .catch((error) => {
      console.log("This is an error:", error);
    });
  console.log("Inside Function: Words Generated -", words);

  newblankWordsArr.push(words);

  for (let i = 0; i < newblankWordsArr.length; i++) {
    return newblankWordsArr[i];
  }
}

//Start API

// console.log("You randomly generate array is:", newWordsAPI);

//Random Words Main Menu - Begin
class mainMenu {
  constructor() {
    this.sections = [];
    this.selectedSection = null;
  }

  //Displays the mainMenu when requesting to start - Begin
  start() {
    //Displays the mainMenu until a selected has been made.
    let menuSelection = this.displayMainMenuOptions();
    while (menuSelection != "exit") {
      console.log("You have chosen:", menuSelection);
      switch (menuSelection) {
        case "1":
          randomWordsAPI();
          break;
        default:
          menuSelection = "exit";
      }
      //Keeps looping until 0 is selected.
      menuSelection = this.displayMainMenuOptions();
    }
    //If 0 is seledcted the program will exit.
    alert(`Hope you had fun. Goodbye!`);
  }

  //Displays the main menu available options - Begin
  displayMainMenuOptions() {
    return prompt(`
   Generate random words!
   >----------------------------------------------------<
  
      * Type leave, type: exit
      1) Generate more Words
      2) Nothing happens yet!
      `);
  }
}
//Initializes the myMenuApp program
let promptMenu = new mainMenu();
promptMenu.start();
