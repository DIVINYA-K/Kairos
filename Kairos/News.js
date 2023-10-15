        //Defining variables
        var question = document.querySelector('#question')
        var choicesElement = document.querySelector('#choices')
        var score = 0
        var userChoices = [];
        var quizQuestion = document.getElementById("quizQuestion"); 
        //Question Data is my array of questions and choices. This is my first set of Questions that is the same for everthing.
        var questionData = [
            {
                question: "How many Bentos would you like?",
                choices: [
                    {
                        type: 'text',
                        id: 'quantityInput',
                    }
                ]
                
            }, 
            {
                question: "Dietary Requirements?",
                choices: [
                    {
                        text: "Vegan",
                    },
                    {
                        text: "Vegetarian",
                    },
                    {
                        text: "Gluten Free",
                    },
                    {
                        text: "None",
                    },

                ]
                
            }, 
            {
                question: "Choose a Snack",
                choices: [ 
                    {
                        text: "Popcorn"
                    },
                    {
                        text: "Carrot Sticks"
                    },
                    {
                        text: "Nuts"
                    },
                    {
                        text: "Yougurt"
                    },
                    {
                        text: "Pea Crisps"
                    },
                    {
                        text: "Energy Bars"
                    },
                ]
            },
            {
                question: "Choose a main meal",
                choices: [
                    {
                        text: "Sushi",
                    },
                    {
                        text: "Wrap",
                    },
                    {
                        text: "Salad",
                    },
                    {
                        text: "Pizza",
                    },

                ]
            },
                   
        ]

        //This is my second questions data. These set of questions will only appear depending on which heading the user chooses in the previous question.

        var questionData2 = [
            {
                question: "Choose a main Sushi filling",
                choices: [ 
                    {
                        text: "Teriyaki Chicken"
                    },
                    {
                        text: "Salmon"
                    },
                    {
                        text: "Tuna"
                    },
                    {
                        text: "Tofu"
                    },
                    {
                        text: "Tempeh"
                    },
                    {
                        text: "Salmon GF Sushi"
                    },
                ]
            },
            {
                question: "Choose a main Wrap filling",
                choices: [ 
                    {
                        text: "Ham"
                    },
                    {
                        text: "Chicken"
                    },
                    {
                        text: "Egg"
                    },
                    {
                        text: "Tofu"
                    },
                    {
                        text: "Bean Burrito"
                    },
                    {
                        text: "Falafel GF"
                    },
                ]
            },
            {
                question: "Choose a type of Salad",
                choices: [ 
                    {
                        text: "Pasta Salad"
                    },
                    {
                        text: "Caesar Salad"
                    },
                    {
                        text: "Egg Salad"
                    },
                    {
                        text: "Quinoa"
                    },
                    {
                        text: "Pasta Veg"
                    },
                    {
                        text: "Cowboy Caviar GF"
                    },
                ]
            },
            {
                question: "Choose a main Pizza topping",
                choices: [ 
                    {
                        text: "Pepperoni"
                    },
                    {
                        text: "Plain Cheese"
                    },
                    {
                        text: "Olive"
                    },
                    {
                        text: "Veggie Vegan"
                    },
                    {
                        text: "Vegetable Veg"
                    },
                    {
                        text: "Pepperoni GF"
                    },
                ]
            }

        ]
        //This is declaring the variable questionState and setting it's initial value to 0.
        var questionState = 0

        //This is to make the first question in the Question Data array show in the inner HTML and then call the showChoices function.
        quizQuestion.innerHTML = questionData [questionState]['question'];
        showChoices();

        
        function showChoices() {
            //This clears the previous sets of choices before the new set for the next question shows up.
            choicesElement.innerHTML = "";
            
            questionData[questionState].choices.forEach(choice => {
                if (choice.type === 'text') {
                    
                    var quantityInput = document.createElement('input');
                    quantityInput.type = 'number';
                    quantityInput.style.height = '40px';
                    quantityInput.style.width = '40px';
                    quantityInput.style.fontSize = '20px';
                    quantityInput.id = choice.id;
                    choicesElement.appendChild(quantityInput);
        
                    
                    var nextButton = document.createElement('button');
                    nextButton.textContent = 'Next';
                    nextButton.addEventListener('click', function () {
                        var quantity = quantityInput.value;
                        if (quantity !== "") {
                            if (quantity > 0 && quantity < 5) {
                                userChoices.push('Quantity: ' + quantity);
                                questionState++;
                    
                                if (questionState < questionData.length) {
                                    quizQuestion.innerHTML = questionData[questionState].question;
                                    showChoices();
                                }
                            } else if (quantity < 0) {
                                alert ("Quantity Invalid")
                            }
                            
                            else {
                                alert("Please enter a quantity less than 5");
                            }
                        } else {
                            alert("Please enter a quantity.");
                        }
                    });
                       
        
                    choicesElement.appendChild(nextButton);
                } else {
                    var choiceButton = document.createElement('button');
                    choiceButton.textContent = choice.text;
                    choicesElement.appendChild(choiceButton);
                    choiceButton.addEventListener('click', function () {
                        var clickedChoice = choice.text;
                        choiceQuestion(clickedChoice);
                        questionState++;
        
                        if (questionState < questionData.length) {
                            quizQuestion.innerHTML = questionData[questionState].question;
                            showChoices();
                        }
                    });
                }
            });
        }

        
        function showChoices2() {
            var questionState = 0
            choicesElement.innerHTML = "";
            questionData2[questionState].choices.forEach(choice => {
                var choiceButton = document.createElement('button');
                choiceButton.textContent = choice.text;
                choicesElement.appendChild(choiceButton);
                choiceButton.addEventListener("click", function () {
                    var clickedChoice = choice.text;
                    userChoices.push(clickedChoice);
                    

                    quizQuestion.style.display = "none";
                    choicesElement.style.display = "none";
                      displayUserChoices();
                  });
                });
              }
              

        function showChoices3() {
            var questionState2 = 1
            choicesElement.innerHTML = "";
            questionData2[questionState2].choices.forEach(choice => {
                var choiceButton = document.createElement('button');
                choiceButton.textContent = choice.text;
                choicesElement.appendChild(choiceButton);
                choiceButton.addEventListener("click", function () {
                    var clickedChoice = choice.text;
                    userChoices.push(clickedChoice);
              
                    questionState++;
              
                    if (questionState < questionData2.length) {
                      quizQuestion.innerHTML = questionData2[questionState].question;
                      showChoices3();
                    } else {
                        quizQuestion.style.display = "none";
                        choicesElement.style.display = "none";
                      displayUserChoices();
                    }
                  });
                });
              }

        function showChoices4() {
            var questionState3 = 2
            choicesElement.innerHTML = "";
            questionData2[questionState3].choices.forEach(choice => {
                var choiceButton = document.createElement('button');
                choiceButton.textContent = choice.text;
                choicesElement.appendChild(choiceButton);
                choiceButton.addEventListener("click", function () {
                    var clickedChoice = choice.text;
                    userChoices.push(clickedChoice);
              
                    questionState++;
              
                    if (questionState < questionData2.length) {
                      quizQuestion.innerHTML = questionData2[questionState].question;
                      showChoices4();
                    } else {
                        quizQuestion.style.display = "none";
                        choicesElement.style.display = "none";
                      displayUserChoices();
                    }
                  });
                });
              }

        
        function showChoices5() {
            var questionState4 = 3
            choicesElement.innerHTML = "";
            questionData2[questionState4].choices.forEach(choice => {
                var choiceButton = document.createElement('button');
                choiceButton.textContent = choice.text;
                choicesElement.appendChild(choiceButton);
                choiceButton.addEventListener("click", function () {
                    var clickedChoice = choice.text;
                    userChoices.push(clickedChoice);
              
                    questionState++;
              
                    if (questionState < questionData2.length) {
                      quizQuestion.innerHTML = questionData2[questionState].question;
                      showChoices5();
                    } else {
                        quizQuestion.style.display = "none";
                        choicesElement.style.display = "none";
                      displayUserChoices();
                    }
                  });
                });
              }


        function choiceQuestion(clickedChoice) {
            userChoices.push(clickedChoice);
        
            if (clickedChoice === "Sushi") {
                var questionState = 0;
                quizQuestion.innerHTML = questionData2[questionState]['question'];
                showChoices2();
            } 
            else if (clickedChoice === "Wrap") {
                var questionState = 1;
                quizQuestion.innerHTML = questionData2[questionState]['question'];
                showChoices3();
            } 
            else if (clickedChoice === "Salad") {
                var questionState = 2;
                quizQuestion.innerHTML = questionData2[questionState]['question'];
                showChoices4();
            } 
            else if (clickedChoice === "Pizza") {
                var questionState = 3;
                quizQuestion.innerHTML = questionData2[questionState]['question'];
                showChoices5();
            }
            
        }
        

        function displayUserChoices(){
            var userChoicesContainer = document.getElementById("userChoicesContainer");
            userChoicesContainer.innerHTML = "<h2>You have picked:</h2>";
            userChoices.forEach(choice => {
                var choiceElement = document.createElement("p");
                choiceElement.textContent = choice;
                userChoicesContainer.appendChild(choiceElement);
            });
        }
        



        
    
    