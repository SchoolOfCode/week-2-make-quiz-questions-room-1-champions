// questions.js

/*

const question1 = {
  question_text = "";
  question_type = "multiple_choice";
  options = ["this is answer 1", "this is answer 2", "this is answer 3", "this is answer 4"];
  correct_option = options[0/1/2/3];
  correct_explanation = "This question is right because..."
}

*/
/*

- Must be 10 multiple choice questions about Week 1 concepts...
- Must have 4 choices to choose from per question...
- Questions must be added to the questions array...

questions = Array of objects.

question_text = string, has text of question.
question_type = string with value "multiple_choice".
options = array of strings, each string is a possible answer, must be four strings in array. 
correct_option = number is the index of the correct answer in "options" array. Index 
correct_explanation = string, has text of explanation of why answer is correct.

*/
/*

question_text : "what is blah blah blah?",
question_type : "multiple_choice",
options : ["this is answer 1", "this is answer 2", "this is answer 3", "this is answer 4"],
correct_option : options[0/1/2/3],
correct_explanation : "This question is right because blahblah"

*/

const questions = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10", ];

const question1 = [
  {
  question_text: "What are the 4 elements of high performance recovery routine?",
  question_type: "multiple_choice",
  options: [
    "focus, warm-down, break, recovery", 
    "warm-up, focus, break, warm-down",
    "preparation, focus, warm-down, recovery",
    "hunger, preparation, challenge, recovery"
  ],
  correct_option: 2,
  correct_explanation: "This answer is right because preparation allows you to mentally transition into a working state. Warm-down allows you to transition from focus to recovery."
}]


const question2 = [
  {
  question_text : "What roles are in pair programming?",
  question_type : "multiple_choice",
  options : [
  "Biker and Driver", 
  "Hiker and Race car", 
  "Swimmer and Diver", 
  "Driver and Navigator"
],
  correct_option : options[3],
  correct_explanation : "This answer is right because the Driver writes the code, and the Navigator provides constant feedback."
}]

const question3 = {
  question_text : "Of these answers, which concepts are related to artificial neural networks? All of the concepts in the answer must be correct.",
  question_type : "multiple_choice",
  options : [
  "Neurons, Seed, Algorithm, Evolution",
  "Abstraction, Neurons, Mind, Patterns",
  "Neurons, Hidden Layers, Weights, Backpropagation.",
  "Wires, Bias, Generator, Discriminator."],
  correct_option : options[2],
  correct_explanation : "This question is right because all the concepts in this answer are correct."
}

const question4 = {
  question_text : "Which is the correct order for computational thinking?",
question_type : "multiple_choice",
options : [
  "Break it down, look for a pattern, understand the problem, write an algorithm, abstract.",
  "Break it down, abstract, write an algorithm, look for patterns, and understand the problem.", 
  "Understand the problem, break it down, look for patterns, abstract, and write an algorithm.", 
  "Abstract, understand the problem, write an algorithm, break it down, look for patterns."],
  correct_option : options[2],
  correct_explanation : "This question is right because you need to understand the problem first to solve the problem."

}

const question5 = {
  question_text : "Which of these is NOT a valuable attribute for a school of code bootcamper?",
  question_type : "multiple_choice",
  options : ["Communication skills.", "Lone wolf.", "Technical ability.", "Expert learners."],
  correct_option : options[1],
  correct_explanation : "This question is right because being a lone wolf doesn't help your fellow bootcampers improve."

}

const question6 = {
  question_text : "What is the main goal of providing positive feedback?",
  question_type : "multiple_choice",
  options : ["Shared improvement.", "Bringing down others.", "Pointing out mistakes.", "Looking smart."],
  correct_option : options[0],
  correct_explanation : "This question is right because negative feedback could bring more harm than good."
}

const question7 = {
  question_text : "What is the best mindset to have while on this course?",
  question_type : "multiple_choice",
  options : ["Perfect Mindset", "Growth Mindset", "Know-It-All Mindset", "Crab Mindset"],
  correct_option : options[1],
  correct_explanation : "This question is right because we need to develop ourselves and improve ourselves every day."
}

const question8 = {
  question_text : "What key points does the Agile Manifesto emphasise? All answers must be correct.",
  question_type : "multiple_choice",
  options : [
    "Flexiblity, collaboration, and improvement.", 
    "Contracts, collaboration, and documentation.",
    "Personal satisfaction, working alone, documentation.",
    "Documentation, flexibility and working alone."],
  correct_option : options[0],
  correct_explanation : "This question is right because it highlights the importance of people and communication in a project's success."
}

const question9 = {
  question_text : "What are the three 'rooms' in Disney Ideation?",
  question_type : "multiple_choice",
  options : [
    "Dreamer, Thinker, Critic",
    "Dreamer, Realist, Critic", 
    "Thinker, Builder, Architect", 
    "Thinker, Realist, Builder"],
  correct_option : options[1],
  correct_explanation : "This question is right, as it reflects the state of being 'curious', 'reflective', and then 'realistic'."
}

const question10 = {
  question_text : "What are the correct steps for solving a problem?",
  question_type : "multiple_choice",
  options : ["Plan, Program, Understand", "Problem, Program, Understand", "Understand, Build, Plan", "Problem, Plan, Program"],
  correct_option : options[3],
  correct_explanation : "This question is right because when there is a problem, you need to plan how to solve it, and then utilise that planning to create the code."
}

