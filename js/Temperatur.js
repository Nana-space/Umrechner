document.addEventListener('DOMContentLoaded',function(){
    var buttonT = document.getElementById('btnActionT');
     
    buttonT.addEventListener('click', function UmrechnenL() 
    {
       var C = document.getElementById('CelsiusIn');
       var Faktor =273.15;
       
       var Kelvin = C.value*1+273.15
       var Fahrenheit = C.value*1.8+32;
       var Rankine = C.value*1.8+491.67;
       var Reaumur = 0.8* C.value;
    
       document.getElementById('KOut').value = Kelvin;
       document.getElementById('fOut').value =Fahrenheit;
       document.getElementById('RaOut').value =Rankine;
       document.getElementById('ReOut').value =Reaumur;
       
    });
    })