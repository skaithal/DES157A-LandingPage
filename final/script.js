(function () {

    'use strict';


    const openBtns = document.querySelectorAll('.open');

    //open
    for (const eachBtn of openBtns){
        eachBtn.addEventListener('click', function(event){
            event.preventDefault();
            let thisBtn = eachBtn.id;
            document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
        })
    }

    //close
    document.addEventListener('keydown', function(event) {
        if (event.key == 'Escape'){
            document.querySelector('.showing').className = 'overlay hidden';
        }
    })

})();