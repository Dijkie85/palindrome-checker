let Phrase = require("dijkie-palindrome");

let string = prompt("Enter a string for palindrome testing", "Racecar");
const button = document.querySelector("#palindromechecker");
let phrase = new Phrase(string);

if (phrase.isPalindrome()) {
  alert(`${phrase.content} is a palindrome!`);
} else {
  alert(`${phrase.content} is NOT a palindrome :(`);
}

