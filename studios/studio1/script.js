(function(){
    'use strict';
    console.log("reading js");

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const phone_Id = document.querySelector('#phone-id');
    const pop_up = document.querySelector('#recipient');
    const inner_screen = document.querySelector('#inner-screen');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const my_id = document.querySelector('#my-identity').value;
        const your_id = document.querySelector('#your-identity').value;
        const noun = document.querySelector('#noun').value;
        const verb = document.querySelector('#verb').value;
        const adjective = document.querySelector('#adjective').value;
        const formData = document.querySelectorAll("input[type=text]");

        let myText;
        if(my_id && your_id && noun && verb && adjective){ 
            myText = `${my_id}, you don't have to be so ridiculously ${adjective}. Where are my diamond ${noun}? Bible, I'll ${verb} through your billion dollar Bentley if you don't respond to me in 2 seconds.`; 
        } 
        else { myText = "Please give me words so I can make your Mad Lib!"; }

        madlib.innerHTML = myText;
        phone_Id.innerHTML = `${my_id}'s iPhone`; 
        pop_up.innerHTML = `${your_id}`;
        

        switch(my_id){
            case 'Kim': inner_screen.style.backgroundColor = "#EB3F5E"; break; // pink
            case 'Khloe': inner_screen.style.backgroundColor = "#008148"; break; // green
            case 'Kourtney': inner_screen.style.backgroundColor = "#F29E4C"; break; // orange
            case 'Kylie': inner_screen.style.backgroundColor = "#730071"; break; // purple
            case 'Kendall': inner_screen.style.backgroundColor = "#48A9A6"; break; // blue
            case 'Kris': inner_screen.style.backgroundColor = "#E6AF2E"; break; // gold
        }
        


        for(let eachField of formData) {
            eachField.value = "";
        }


    });
    
}());