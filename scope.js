//  Episode 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

//------------------------
//Notes.
// Output :
// Miss Scarlet as scenario is a global variable, being declared above the function defintions
//

//  Episode 2
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//------------------------
//Notes.
//Output
// It's an attemopted overwrite if Professor Plum
// This is not allowed as ot's a contstant and Javascript will object to this.


//Episode 3

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict); // Part 1
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict); //  Part 2
//------------------------
//Notes.
//Part 1 :   The output is First verdict:  The murderer is Mrs. Peacock.
//           This is because se is passed back in the function declareMurderer
//Part 2 :   The output is Second Verdict : Professor Plum.
//

//   Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);     // part 1
// console.log(`Suspect three is ${suspectThree}.`); // part 2

//------------------------
//Notes.
// Part 1:
// The output is "Miss Scarlet, Professor Plum, Colonel Mustard"
// This is because suspectThree has been overwritten being returned from the declareAllSuspects function
//
// Part 2
// The output is Mrs. Peacock
// This is because the first definition of suspectThree is

//Episode 5
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
//console.log(verdict);
//------------------------
//Notes.
// The output is Revolver.
// This is because the weapon key of the global scenario object was changed in the changewWeapon
// constant definition
//
// // Episode 6
// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
//console.log(verdict);
//------------------------
//Notes.
//  Initially the murderer is set to Colonel Mustard
//  The changeMurderer function  will set the murderer to Mr Green
//  The plotTwist function then overwites the murderer to be Mrs. White

//
//Episode 7
// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
//console.log(verdict);

//------------------------
//Notes.
// The output is Mr. Green
// Initially the murderer is Professor Plum. Set in the initial instance of murderer at te top of the code.
// The function changeMurderer changes it to Mr Green. No other assignmentsa are made in this function.
// Miss Scorlet is not assigned the murderer in unexpectedOutcome as the variable is local to the function definiton.
// Likewise in plotTwist - the murderer is kept within the function definition and is thus local.


//Episode 8
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
//------------------------------------------------
// Notes.
// The output weapon is a candle stick.
// Set initialy set to Lead Pipe
// In changeScenario, the  murderer is set to Mrs Peacock and room to Dining room.
// in Plot twist by passing the parameter of Dining room the murderer is changed to Col. Mustard
// going back - in unexpectedOutcome using Col. Mustard  the weapon is changed to candle Stick



//Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//------------------------
//Notes.
// The murderer is Professor Plum
// A new local copy of murderer is declared and only has scope around the if block.
