document.addEventListener('DOMContentLoaded',function(){

    var button = document.getElementById('btnActionDr');

   
    button.addEventListener('click', function Umrechnen() 
    {
       var Nm = document.getElementById('NmIn');     
       var lbf = Nm.value * 0.7375621 ;
       var pfi = Nm.value * 8.8507458;
       var off = Nm.value * 11.800994;
       var ofi = Nm.value * 141.61193;
       var pf = Nm.value * 0.04214011;

       document.getElementById('lbfFtOut').value =lbf;
       document.getElementById('pfiOut').value =pfi;
       document.getElementById('offOut').value =off;
       document.getElementById('ofiOut').value =ofi;
       document.getElementById('pfOut').value =pf;
    })
 
 });