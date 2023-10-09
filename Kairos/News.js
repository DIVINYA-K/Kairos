        var question = document.querySelector('#question')
        var choicesElement = document.querySelector('#choices')
        var score = 0
        var quizQuestion = document.getElementById("quizQuestion"); 
        var questionData = [
            {
                question: "Dietary Requirements",
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
            }
        ]


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
            }

        ]
        var questionState = 0

        quizQuestion.innerHTML = questionData [questionState]['question'];
        showChoices();

        function showChoices() {
            choicesElement.innerHTML = "";
            questionData[questionState].choices.forEach(choice => {
                var choiceButton = document.createElement('button');
                choiceButton.textContent = choice.text;
                choicesElement.appendChild(choiceButton);
                choiceButton.addEventListener ('click',function() {
                    var clickedChoice = choice.text;
                    choiceQuestion(clickedChoice);
                    questionState++;
                    if (questionState < questionData.length) {
                        quizQuestion.innerHTML = questionData[questionState].question;
                        showChoices()
                    }
                })
            });
        }

        

        function showChoices2() {
            var questionState = 0
            choicesElement.innerHTML = "";
            questionData2[questionState].choices.forEach(choice => {
                var choiceButton = document.createElement('button');
                choiceButton.textContent = choice.text;
                choicesElement.appendChild(choiceButton);
                questionState ++;
             
            });
        }


        function choiceQuestion(clickedChoice) {

                if (clickedChoice === "Sushi") {

                    var questionState = 0

                    quizQuestion.innerHTML = questionData2 [questionState]['question'];
                    showChoices2();
                    
                }
                else {
                    if (clickedChoice==="Wrap") {
                        var questionState = 1

                    quizQuestion.innerHTML = questionData2 [questionState]['question'];
                    showChoices2();
                    }
                }
                  {
                    if (clickedChoice==="Salad") {
                        var questionState = 2

                    quizQuestion.innerHTML = questionData2 [questionState]['question'];
                    showChoices2();
                    }
                }


        }
    
    