(function () {

    'use strict';

    let pageTop;
    let containerTag = document.querySelector('#container');

    window.addEventListener('scroll', function(){
        pageTop = window.pageYOffset;

        switch(true){
            case pageTop < 768: containerTag.className = "title"; break;
            case pageTop < 1536: containerTag.className = "sunatya"; break;
            case pageTop < 2304: containerTag.className = "jhankaar"; break;
            case pageTop < 3072: containerTag.className = "sanfrancisco"; break;
            // case pageTop < 3840: containerTag.className = "pumpkinpatch"; break;
            // case pageTop < 4608: containerTag.className = "burlingame"; break;
            default: containerTag.className = "title";
        }
    });

})();