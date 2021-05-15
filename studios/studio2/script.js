(function () {

    'use strict';


    const openBtns = document.querySelectorAll('.open');

    //open
    for (const eachBtn of openBtns){
        eachBtn.addEventListener('click', function(event){
            event.preventDefault();
            const thisBtn = event.target.id;
            document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
        })
    }

    //close
    document.addEventListener('keydown', function(event) {
        if (event.key == 'Escape'){
            document.querySelector('.showing').className = 'overlay hidden';
        }
    })










    // let pageTop;
    // let containerTag = document.querySelector('#container');

    // window.addEventListener('scroll', function(){
    //     pageTop = window.pageYOffset;

    //     switch(true){
    //         case pageTop < 768: containerTag.className = "title"; break;
    //         case pageTop < 1536: containerTag.className = "sunatya"; break;
    //         case pageTop < 2304: containerTag.className = "jhankaar"; break;
    //         case pageTop < 3072: containerTag.className = "sanfrancisco"; break;
    //         // case pageTop < 3840: containerTag.className = "pumpkinpatch"; break;
    //         // case pageTop < 4608: containerTag.className = "burlingame"; break;
    //         default: containerTag.className = "title";
    //     }
    // });

})();