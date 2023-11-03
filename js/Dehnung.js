document.addEventListener('DOMContentLoaded',function(){
var buttonD = document.getElementById('btnActionT');
     
buttonD.addEventListener('click', function UmrechnenL() 
{
   var D = document.getElementById('ummIn');
   
   var MproM = D.value/100000;
   var Proz = D.value/100;
   var Prom = D.value/1000;

   document.getElementById('mmOut').value = MproM;
   document.getElementById('ppmOut').value =D.value;
   document.getElementById('meOut').value =D.value;
   document.getElementById('ProzOut').value =Proz;
   document.getElementById('PromOut').value =Prom;
   
});
});
