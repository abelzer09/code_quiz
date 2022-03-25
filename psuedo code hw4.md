# html

1. start screen with title, rules, start button, timer.
2. question screen container with wuestion text, buttons, timer. feed back based on answer selected.
3. end of game container with final score, form to enter initials and submit button.
4. high score page.


# javescript

1. delcare variables to reference GOM elements in your HTML.
    -start quiz button
    -start screen element
    -timer element 
    -high score element
    -question element
    -question title element
    -answer choice element

2. Create an array of objects that hold all quetions. (create seperate questions)    
    -Answer choices
    -question text
    -correct answer

3. create startQuiz function trigerred by the startQuiz button
    -hide start screen
    -unhide questions screen
    -starts timer 
    -grab first question in array

4. Create function to getQuestion() 
    -renders title choices and buttons

5. Create function to check if answer is correct 
    -if the answer is correct your going to move on to the next question
    -if the asnwer is wrong your going to have to decrement the timer
    -keep track of score/points
    - increment index in array of question to move on

6. create function to end the quiz
    - hide the question element
    -unhide end of quiz element
    -unhide final score element, form, submit button

7. Create function to save high scores to local Storage.


Start with one question to make sure it works no requirement for how many questions you have.
