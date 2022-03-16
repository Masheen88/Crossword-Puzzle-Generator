//Random Words API function - Begin
var element = document.getElementById("clickMe");
let words = [];
let wordsGenerated = false;
function getWords() {
  fetch("https://random-word-api.herokuapp.com/word?number=10")
    .then((response) => response.json())
    .then((data) => {
      console.log("Original words", data);

      do {
        for (let i = 0; i < 10; i++) {
          if (data[i].length >= 4 && data[i].length <= 6) {
            console.log(i, "Word is correct size:", data[i].length, data[i]);
            words.push(data[i]);
            console.log("Original words length", words.length);
          } else if (data[i].length < 4) {
            console.log(i, "Words are too short:", data[i]);
            // data.slice(data[i]);
          } else if (data[i].length > 8) {
            console.log(i, "Words are too long:", data[i]);
            // data.slice(data[i]);
          } else {
            // moreWords();
            console.log(words, words.length);
          }
        }
      } while (data.length < 9);
      if (words.length > 10) {
        words.slice(words, 2);
      }
      return;
    });
}

function moreWords() {
  fetch("https://random-word-api.herokuapp.com/word?number=10")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
