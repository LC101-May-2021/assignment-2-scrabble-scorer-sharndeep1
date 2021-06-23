// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
		 }
 
	  }
	}
	return letterPoints;
  
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let scrabbleWord;
let scrabbleScore;

function initialPrompt() {
  console.log("Let's play some scrabble! Enter a word: \n");
  scrabbleWord = input.question("enter a word to score: ");
  let userChoice = scorerPrompt();
  //scrabbleScore = oldScrabbleScorer(scrabbleWord);
  //console.log(scrabbleScore);

  //simpleScore = simpleWordScore(scrabbleWord);
  
   simpleScore = scoringAlgorithms[userChoice].scorerFunction(scrabbleWord);
   console.log("algorithm name: ",scoringAlgorithms[userChoice].name);
   console.log("scorerFunction result: ",simpleScore);
   //vowelBonusScore = simpleVowelConsScore(scrabbleWord) ;
   //console.log(vowelBonusScore);
   /*vowelBonusScore = scoringAlgorithms[1].scorerFunction(scrabbleWord) ;
   console.log("algorithm name: ",scoringAlgorithms[1].name);
   console.log("scorerFunction result: ", vowelBonusScore);
   scrabbleScore =scoringAlgorithms[2].scorerFunction(scrabbleWord) ;
   console.log("algorithm name: ",scoringAlgorithms[2].name);
   console.log("scorerFunction result: ", scrabbleScore);*/
   
   newPointStructure = transform(oldPointStructure);
  //console.log(newPointStructure);
  

  
   //console.log("Let's play some scrabble! Enter a word:");
};

let simpleScore;
function simpleWordScore(word){
  let counter = 0;
  for(i=0;i< word.length;i++){
    if(word[i] !== " ")
     counter++;
  }
  return counter;
}
 /*const vowelConso = {
   1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L' , 'M',  'N' , 'P' ,'Q', 'R', 'S', 'T', 'V' ,'W' , 'X' ,'Y' ,'Z'],
   2: ['A','E','I','O','U']

  
 }
 */
let vowelBonusScore;
//let vowelword = ['A','I','E','O','U'];
count = 0
function simpleVowelConsScore(word){
word = word.toUpperCase();
  for(i=0 ; i< word.length ;i++){
    //if(vowelword.includes(word[i])) {
      if(word[i] === 'A'|| word[i] ==='I'|| word[i] === 'E'|| word[i] === 'O' || word[i] === 'U'){
      
      count = count+3 ;
}
else {
  count=  count+1;
}
}
return count;

  

}

/*const simpleScoreObj ={
  name: "simpleScore",
  description: "Each letter is worth 1 point",
  scorerFunction: function(scrabbleWord){ return simpleWordScore(scrabbleWord);
  }
}*/

const scoringAlgorithms = [
  {name: "simpleScore",
  description: "Each letter is worth 1 point",
  scorerFunction: function(scrabbleWord){ return simpleWordScore(scrabbleWord);
  }}, 
  {name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scorerFunction: function(scrabbleWord){ return simpleVowelConsScore(scrabbleWord);
  }},
  {name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scorerFunction: function(scrabbleWord){ return scrabbleScorer(scrabbleWord);
   //oldScrabbleScorer(scrabbleWord);
  
  }}
]

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use? \n");
  console.log("0 - Simple: One point per character");
console.log("1 - Vowel Bonus: Vowels are worth 3 points");
console.log("2 - Scrabble: Uses scrabble point system");
userChoice = input.question("Enter 0, 1, or 2: 0: ");
return userChoice;
  





}

function transform(word1){
  
  let newObj ={};
  for (const pointValue in word1) {
    let  keys = word1[pointValue];
    for(let point of keys){
      newObj[point.toLowerCase()] = pointValue;
      //console.log(word1[pointValue][point] );
    }
 
		}

//console.log(newObj);

return newObj;
}

let newPointStructure = transform(oldPointStructure);

function scrabbleScorer(word){
  let letterPoints = 0;
  for (let i = 0; i < word.length; i++) {
   for (const pointValue in newPointStructure) {
//console.log(newPointStructure);
     if (pointValue.includes(word[i])) {
      letterPoints += Number(newPointStructure[pointValue]);
      //console.log(pointValue);

     }
   }
}
trans =`Score for '${scrabbleWord}': ${letterPoints}`;
//console.log(trans);
return trans;



}
  


 
 
 
 
function runProgram() {
   initialPrompt();
   
   
   
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

