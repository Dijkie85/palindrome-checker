(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("dijkie-palindrome");

let string = prompt("Enter a string for palindrome testing", "Racecar");
const button = document.querySelector("#palindromechecker");
let phrase = new Phrase(string);

if (phrase.isPalindrome()) {
  alert(`${phrase.content} is a palindrome!`);
} else {
  alert(`${phrase.content} is NOT a palindrome :(`);
}


},{"dijkie-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  
  this.content = content;
  
  this.processedContent = function() {
    return this.letters().toLowerCase();
  }
  
  this.letters = function() {
    const regexLetters = /[a-z]/gi
    return (this.content.match(regexLetters) || []).join("");
  };
  
  this.isPalindrome = function() {
    return (this.processedContent() === this.processedContent().reverse());
  };
}
},{}]},{},[1]);
