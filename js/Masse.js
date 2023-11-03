document.addEventListener('DOMContentLoaded',function(){

    var button = document.getElementById('btnActionM');

   
    button.addEventListener('click', function Umrechnen() 
    {
       var G = document.getElementById('GIn');     
       var oT = G.value * 31.103477 ;
       var oA = G.value * 28.349523;
       var p  = G.value * 453.592370;
       var c  = G.value * 45359.237;
       var hw = G.value * 50802.345;
       var st = G.value * 907185000;
       var lt = G.value * 1016470000;


       document.getElementById('oTOut').value =oT;
       document.getElementById('oAOut').value =oA;
       document.getElementById('pOut').value =p;
       document.getElementById('cOut').value =c;
       document.getElementById('hwOut').value =hw;
       document.getElementById('stOut').value =st;
    })
 
 });