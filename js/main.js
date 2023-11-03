    document.addEventListener('DOMContentLoaded',function(){

      var button = window.getElementById('btnAction');

     
      button.addEventListener('click', function Umrechnen() 
      {
         var Newton = document.getElementById('NewtonIn');     
         var kp = Newton.value * 0.101972 ;
         var kgf = Newton.value * 0.101972;
         var lbf = Newton.value * 0.224089;
         var ozf = Newton.value * 3.596943;
         var pdl = Newton.value * 7.233013;
 
         document.getElementById('kpOut').value =kp;
         document.getElementById('lbfOut').value =lbf;
         document.getElementById('ozf').value =ozf;
         document.getElementById('pdl').value =pdl;
         
      })
   
   });
