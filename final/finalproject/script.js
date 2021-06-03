(function () {

    'use strict';

    let sunatya1 = document.getElementById('sunatya-1');
    let sunatya2 = document.getElementById('sunatya-2');
    let sunatya3 = document.getElementById('sunatya-3');
    let sunatya4 = document.getElementById('sunatya-4');

    let pp1 = document.getElementById('pp-1');
    let pp2 = document.getElementById('pp-2');
    let pp3 = document.getElementById('pp-3');
    let pp4 = document.getElementById('pp-4');

    let sf1 = document.getElementById('sf-1');
    let sf2 = document.getElementById('sf-2');
    let sf3 = document.getElementById('sf-3');
    let sf4 = document.getElementById('sf-4');
    
    let bg1 = document.getElementById('bg-1');
    let bg2 = document.getElementById('bg-2');
    let bg3 = document.getElementById('bg-3');
    let bg4 = document.getElementById('bg-4');

    // let j1 = document.getElementById('jhankaar-1');
    // let j2 = document.getElementById('jhankaar-2');
    // let j3 = document.getElementById('jhankaar-3');
    // let j4 = document.getElementById('jhankaar-4');


/* Sunatya */
    sunatya1.addEventListener('mouseover', function(){
        document.getElementById('sunatya').style.backgroundColor = '#F1BE71';
        document.getElementById('sunatya').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(8px 8px 8px white';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(8px 8px 8px white';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(8px 8px 8px white';
        
    });
    sunatya2.addEventListener('mouseover', function(){
        document.getElementById('sunatya').style.backgroundColor = '#676753';
        document.getElementById('sunatya').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(8px 8px 8px rgba(223, 146, 23, 0.65))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(8px 8px 8px rgba(223, 146, 23, 0.65))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(8px 8px 8px rgba(223, 146, 23, 0.65))';
    });
    sunatya3.addEventListener('mouseover', function(){
        document.getElementById('sunatya').style.backgroundColor = 'white';
        document.getElementById('sunatya').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(8px 8px 8px rgba(223, 146, 23, 0.65))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(8px 8px 8px rgba(223, 146, 23, 0.65))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(8px 8px 8px rgba(223, 146, 23, 0.65))';
    });
    sunatya4.addEventListener('mouseover', function(){
        document.getElementById('sunatya').style.backgroundColor = '#787375';
        document.getElementById('sunatya').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(8px 8px 8px rgba(223, 146, 23, 0.65))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(8px 8px 8px rgba(223, 146, 23, 0.65))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(8px 8px 8px rgba(223, 146, 23, 0.65))';
    });

    sunatya1.addEventListener('mouseout', function(){
        document.getElementById('sunatya').style.backgroundColor = '#ddc1c5';
        document.getElementById('sunatya').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });

    sunatya2.addEventListener('mouseout', function(){
        document.getElementById('sunatya').style.backgroundColor = '#ddc1c5';
        document.getElementById('sunatya').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });

    sunatya3.addEventListener('mouseout', function(){
        document.getElementById('sunatya').style.backgroundColor = '#ddc1c5';
        document.getElementById('sunatya').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });

    sunatya4.addEventListener('mouseout', function(){
        document.getElementById('sunatya').style.backgroundColor = '#ddc1c5';
        document.getElementById('sunatya').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });



/* Pumpkin Patch */
    pp1.addEventListener('mouseover', function(){
        document.getElementById('pumpkinpatch').style.backgroundColor = '#A47576';
        document.getElementById('pumpkinpatch').style.transition = 'all 2s';
        document.getElementById('pp-img-1').style.filter = 'drop-shadow(8px 8px 8px #90241F';
        document.getElementById('pp-img-2').style.filter = 'drop-shadow(8px 8px 8px #90241F';
        document.getElementById('pp-img-3').style.filter = 'drop-shadow(8px 8px 8px #90241F';
    });
    pp2.addEventListener('mouseover', function(){
        document.getElementById('pumpkinpatch').style.backgroundColor = '#90241F';
        document.getElementById('pumpkinpatch').style.transition = 'all 2s';
        document.getElementById('pp-img-1').style.filter = 'drop-shadow(8px 8px 8px #D17148';
        document.getElementById('pp-img-2').style.filter = 'drop-shadow(8px 8px 8px #D17148';
        document.getElementById('pp-img-3').style.filter = 'drop-shadow(8px 8px 8px #D17148';
    });
    pp3.addEventListener('mouseover', function(){
        document.getElementById('pumpkinpatch').style.backgroundColor = '#D17148';
        document.getElementById('pumpkinpatch').style.transition = 'all 2s';
        document.getElementById('pp-img-1').style.filter = 'drop-shadow(8px 8px 8px #B2B7D5';
        document.getElementById('pp-img-2').style.filter = 'drop-shadow(8px 8px 8px #B2B7D5';
        document.getElementById('pp-img-3').style.filter = 'drop-shadow(8px 8px 8px #B2B7D5';
    });
    pp4.addEventListener('mouseover', function(){
        document.getElementById('pumpkinpatch').style.backgroundColor = '#B2B7D5';
        document.getElementById('pumpkinpatch').style.transition = 'all 2s';
        document.getElementById('pp-img-1').style.filter = 'drop-shadow(8px 8px 8px #A47576';
        document.getElementById('pp-img-2').style.filter = 'drop-shadow(8px 8px 8px #A47576';
        document.getElementById('pp-img-3').style.filter = 'drop-shadow(8px 8px 8px #A47576';
    });

    pp1.addEventListener('mouseout', function(){
        document.getElementById('pumpkinpatch').style.backgroundColor = '#D59585';
        document.getElementById('pumpkinpatch').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });

    pp2.addEventListener('mouseout', function(){
        document.getElementById('pumpkinpatch').style.backgroundColor = '#D59585';
        document.getElementById('pumpkinpatch').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });

    pp3.addEventListener('mouseout', function(){
        document.getElementById('pumpkinpatch').style.backgroundColor = '#D59585';
        document.getElementById('pumpkinpatch').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });

    pp4.addEventListener('mouseout', function(){
        document.getElementById('pumpkinpatch').style.backgroundColor = '#D59585';
        document.getElementById('pumpkinpatch').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });


/* SF */
    sf1.addEventListener('mouseover', function(){
        document.getElementById('sanfrancisco').style.backgroundColor = '#773026';
        document.getElementById('sanfrancisco').style.transition = 'all 2s';
        document.getElementById('sf-img-2').style.filter = 'drop-shadow(0px 4px 4px #C6684E';
        document.getElementById('sf-img-1').style.filter = 'drop-shadow(0px 4px 4px #C6684E';
        document.getElementById('sf-img-3').style.filter = 'drop-shadow(0px 4px 4px #C6684E';
    });
    sf2.addEventListener('mouseover', function(){
        document.getElementById('sanfrancisco').style.backgroundColor = '#C6684E';
        document.getElementById('sanfrancisco').style.transition = 'all 2s';
        document.getElementById('sf-img-2').style.filter = 'drop-shadow(0px 4px 4px #773026';
        document.getElementById('sf-img-1').style.filter = 'drop-shadow(0px 4px 4px #773026';
        document.getElementById('sf-img-3').style.filter = 'drop-shadow(0px 4px 4px #773026';
    });
    sf3.addEventListener('mouseover', function(){
        document.getElementById('sanfrancisco').style.backgroundColor = '#A54835';
        document.getElementById('sanfrancisco').style.transition = 'all 2s';
        document.getElementById('sf-img-2').style.filter = 'drop-shadow(0px 4px 4px #665878';
        document.getElementById('sf-img-1').style.filter = 'drop-shadow(0px 4px 4px #665878';
        document.getElementById('sf-img-3').style.filter = 'drop-shadow(0px 4px 4px #665878';
    });
    sf4.addEventListener('mouseover', function(){
        document.getElementById('sanfrancisco').style.backgroundColor = '#665878';
        document.getElementById('sanfrancisco').style.transition = 'all 2s';
        document.getElementById('sf-img-2').style.filter = 'drop-shadow(0px 4px 4px #A54835';
        document.getElementById('sf-img-1').style.filter = 'drop-shadow(0px 4px 4px #A54835';
        document.getElementById('sf-img-3').style.filter = 'drop-shadow(0px 4px 4px #A54835';
    });

    sf1.addEventListener('mouseout', function(){
        document.getElementById('sanfrancisco').style.backgroundColor = '#B3A7BA';
        document.getElementById('sanfrancisco').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });

    sf2.addEventListener('mouseout', function(){
        document.getElementById('sanfrancisco').style.backgroundColor = '#B3A7BA';
        document.getElementById('sanfrancisco').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });

    sf3.addEventListener('mouseout', function(){
        document.getElementById('sanfrancisco').style.backgroundColor = '#B3A7BA';
        document.getElementById('sanfrancisco').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });

    sf4.addEventListener('mouseout', function(){
        document.getElementById('sanfrancisco').style.backgroundColor = '#B3A7BA';
        document.getElementById('sanfrancisco').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });


/* Burlingame */
    bg1.addEventListener('mouseover', function(){
        document.getElementById('burlingame').style.backgroundColor = '#788797';
        document.getElementById('burlingame').style.transition = 'all 2s';
        document.getElementById('bg-img-2').style.filter = 'drop-shadow(0px 4px 4px #A05B46';
        document.getElementById('bg-img-1').style.filter = 'drop-shadow(0px 4px 4px #A05B46';
        document.getElementById('bg-img-3').style.filter = 'drop-shadow(0px 4px 4px #A05B46';
    });

    bg2.addEventListener('mouseover', function(){
        document.getElementById('burlingame').style.backgroundColor = '#776D73';
        document.getElementById('burlingame').style.transition = 'all 2s';
        document.getElementById('bg-img-2').style.filter = 'drop-shadow(0px 4px 4px #774437';
        document.getElementById('bg-img-1').style.filter = 'drop-shadow(0px 4px 4px #774437';
        document.getElementById('bg-img-3').style.filter = 'drop-shadow(0px 4px 4px #774437';
    });

    bg3.addEventListener('mouseover', function(){
        document.getElementById('burlingame').style.backgroundColor = '#774437';
        document.getElementById('burlingame').style.transition = 'all 2s';
        document.getElementById('bg-img-2').style.filter = 'drop-shadow(0px 4px 4px #A05B46';
        document.getElementById('bg-img-1').style.filter = 'drop-shadow(0px 4px 4px #A05B46';
        document.getElementById('bg-img-3').style.filter = 'drop-shadow(0px 4px 4px #A05B46';
    });

    bg4.addEventListener('mouseover', function(){
        document.getElementById('burlingame').style.backgroundColor = '#A05B46';
        document.getElementById('burlingame').style.transition = 'all 2s';
        document.getElementById('bg-img-2').style.filter = 'drop-shadow(0px 4px 4px #788797';
        document.getElementById('bg-img-1').style.filter = 'drop-shadow(0px 4px 4px #788797';
        document.getElementById('bg-img-3').style.filter = 'drop-shadow(0px 4px 4px #788797';
    });

    bg1.addEventListener('mouseout', function(){
        document.getElementById('burlingame').style.backgroundColor = '#BCCCDE';
        document.getElementById('burlingame').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });

    bg2.addEventListener('mouseout', function(){
        document.getElementById('burlingame').style.backgroundColor = '#BCCCDE';
        document.getElementById('burlingame').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });

    bg3.addEventListener('mouseout', function(){
        document.getElementById('burlingame').style.backgroundColor = '#BCCCDE';
        document.getElementById('burlingame').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });

    bg4.addEventListener('mouseout', function(){
        document.getElementById('burlingame').style.backgroundColor = '#BCCCDE';
        document.getElementById('burlingame').style.transition = 'all 2s';
        document.getElementById('sunatya-img-2').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-1').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
        document.getElementById('sunatya-img-3').style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    });

/* Jhankaar */
    // j1.addEventListener('mouseover', function(){
    //     document.getElementById('jhankaar').style.backgroundColor = '#394972';
    //     document.getElementById('jhankaar').style.transition = 'all 2s';
    // });
    // j2.addEventListener('mouseover', function(){
    //     document.getElementById('jhankaar').style.backgroundColor = '#CD784B';
    //     document.getElementById('jhankaar').style.transition = 'all 2s';
    // });
    // j3.addEventListener('mouseover', function(){
    //     document.getElementById('jhankaar').style.backgroundColor = '#D44A2D';
    //     document.getElementById('jhankaar').style.transition = 'all 2s';
    // });
    // j4.addEventListener('mouseover', function(){
    //     document.getElementById('jhankaar').style.backgroundColor = '#756c6c';
    //     document.getElementById('jhankaar').style.transition = 'all 2s';
    // });

    // j1.addEventListener('mouseout', function(){
    //     document.getElementById('jhankaar').style.backgroundColor = '#9297AD';
    //     document.getElementById('jhankaar').style.transition = 'all 2s';
    // });

    // j2.addEventListener('mouseout', function(){
    //     document.getElementById('jhankaar').style.backgroundColor = '#9297AD';
    //     document.getElementById('jhankaar').style.transition = 'all 2s';
    // });

    // j3.addEventListener('mouseout', function(){
    //     document.getElementById('jhankaar').style.backgroundColor = '#9297AD';
    //     document.getElementById('jhankaar').style.transition = 'all 2s';
    // });

    // j4.addEventListener('mouseout', function(){
    //     document.getElementById('jhankaar').style.backgroundColor = '#9297AD';
    //     document.getElementById('jhankaar').style.transition = 'all 2s';
    // });

})();