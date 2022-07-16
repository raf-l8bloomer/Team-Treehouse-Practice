// 1. Create a multidimensional array to hold quiz questions and answers

const quiz = [
 ['What color is the sky?','blue'],
 ['What is the most important skincare step?','sunscreen'],
 ['What state is Las Vegas in?','nevada']
]

// 2. Store the number of questions answered correctly




/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

let correct = 0;
let answer;
let correctQ = [];
let wrongQ= [];

for (let i = 0; i < quiz.length; i ++){
  answer = prompt(`${quiz[i][0]}`);
  if ( answer == quiz[i][1]) {
    correct++;
    correctQ.push(`${quiz[i][0]}`);
  } else {
  wrongQ.push(`${quiz[i][0]}`);
  }
}

html = (
  `
  <h1>You have answered correctly ${correct} out of 3. </h1>
 CORRECT QUESTIONS: <li> ${correctQ.join(', ')}</li>
 <li> WRONG QUESTIONS: ${wrongQ.join(', ')}</li>
  
  `
);

// 4. Display the number of correct answers to the user

document.querySelector('main').innerHTML = html;