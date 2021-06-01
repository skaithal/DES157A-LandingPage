(function () {

    'use strict';

    let sunatya1 = document.getElementById('sunatya-1');
    let sunatya2 = document.getElementById('sunatya-2');
    let sunatya3 = document.getElementById('sunatya-3');
    let sunatya4 = document.getElementById('sunatya-4');
    let profile = document.getElementById('profile-pic');

    profile.addEventListener('click', function(){
        document.getElementById('ol-profile').className = 'overlay showing';
    });

    sunatya1.addEventListener('mouseover', function(){
        document.getElementById('sunatya').style.backgroundColor = '#F1BE71';
    });
    sunatya2.addEventListener('mouseover', function(){
        document.getElementById('sunatya').style.backgroundColor = '#676753';
    });
    sunatya3.addEventListener('mouseover', function(){
        document.getElementById('sunatya').style.backgroundColor = 'white';
    });
    sunatya4.addEventListener('mouseover', function(){
        document.getElementById('sunatya').style.backgroundColor = '#787375';
    });

    sunatya1.addEventListener('mouseout', function(){
        document.getElementById('sunatya').style.backgroundColor = '#ddc1c5';
    });

    sunatya2.addEventListener('mouseout', function(){
        document.getElementById('sunatya').style.backgroundColor = '#ddc1c5';
    });

    sunatya3.addEventListener('mouseout', function(){
        document.getElementById('sunatya').style.backgroundColor = '#ddc1c5';
    });

    sunatya4.addEventListener('mouseout', function(){
        document.getElementById('sunatya').style.backgroundColor = '#ddc1c5';
    });

    
    window.addEventListener('load', function(){
        document.getElementById('ol-usertesting').className = 'overlay showing';
    });

    document.addEventListener('keydown', function(event){
        if (event.key == 'Escape')
            document.querySelector('.showing').className = 'overlay hidden';
    });

    // const openBtns = document.querySelectorAll('.open');

    // //open
    // for (const eachBtn of openBtns){
    //     eachBtn.addEventListener('click', function(event){
    //         event.preventDefault();
    //         const thisBtn = event.target.id;
    //         document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
    //     })
    // }

    // //close
    // document.addEventListener('keydown', function(event) {
    //     if (event.key == 'Escape'){
    //         document.querySelector('.showing').className = 'overlay hidden';
    //     }
    // })


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