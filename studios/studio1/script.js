(function(){
    'use strict';

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const adj = document.querySelector('#adj').value;
        const verb = document.querySelector('#verb').value;
        const formData = document.querySelectorAll("input[type=text]");

        let myText;
        if(noun1 && noun2 && adj && verb){ myText = `Here are the words: ${noun1}, ${noun2}, ${adj}, and ${verb}`; } 
        else { myText = "Please give me words so I can make your Mad Lib!"; }

        madlib.innerHTML = myText; 

        for(var eachField of formData) {
            eachField.value = "";
        }


    });
    
}());