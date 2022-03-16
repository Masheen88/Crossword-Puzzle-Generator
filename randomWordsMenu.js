import { randomWordsAPI } from "./RandomWords.js";
//Random Words Main Menu - Begin
class mainMenu {
  constructor() {
    this.selectedSection = null;
    this.words = 
  }
  //Displays the mainMenu when requesting to start - Begin
  start() {
    //Displays the mainMenu until a selected has been made.
    let menuSelection = this.displayMainMenuOptions();
    while (menuSelection != "2") {
      //  console.log("You have chosen:", menuSelection);
      switch (menuSelection) {
        case "1":
          randomWordsAPI();
          break;
        default:
          "2";
          menuSelection = "2";
      }
      //Keeps looping until 'exit' is typed in.
      menuSelection = this.displayMainMenuOptions();
    }
    //If 'exit' is input the program will exit.
    alert(`Hope you had fun. Goodbye!`);
  }
  //Displays the main menu available options - Begin
  displayMainMenuOptions() {
    return prompt(`
     Generate random words!
     >----------------------------------------------------<  
        * Type exit to leave
        1) Generate more Words
        2) View Words.
     ------------------------------------------------------>
     Generated words will be displayed after typing exit.
        `).toLowerCase();
  }
}
//Initializes the myMenuApp program
let promptMenu = new mainMenu();
promptMenu.start();

class gameMenu extends mainMenu {
  constructor() {
      super.words
  }
}
