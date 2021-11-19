let buttons = document.querySelectorAll('.question-btn');
console.log(buttons);


//buttons.forEach(function(button){
   // console.log(button)
//});
function hideAllQuestionText(){
   let questionTexts = document.querySelectorAll('.question-text');
   console.log(questionTexts);
   questionTexts.forEach(function(questionText){
      questionText.style.display = 'none';
   });

}

function printMe(button){
    button.addEventListener('click', function(){


        //select the nearest question-txt
        let currentElement = this,
        questionWrapperElement = currentElement.parentNode.parentNode,
        questionTextElement = questionWrapperElement.querySelector('.question-text');
  

     console.log (questionTextElement);

       
      //hide all question text
       hideAllQuestionText();

       //apply display: block to the element

       questionTextElement.style.display = 'block';

    });

}

buttons.forEach(printMe);