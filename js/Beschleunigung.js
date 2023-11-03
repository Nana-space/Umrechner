document.addEventListener('DOMContentLoaded',function(){
    var buttonB = document.getElementById('btnActionB');
         
    buttonB.addEventListener('click', function UmrechnenL() 
    {
       var B = document.getElementById('mpsIn');
       
       var fps = B.value*3.28084;
       var ips = B.value*39.37007;
       var yps = B.value*1.09361;
       var mps = B.value*0.000621;
    
       document.getElementById('fpsOut').value = fps;
       document.getElementById('ipsOut').value =ips;
       document.getElementById('ypsOut').value =yps;
       document.getElementById('mpsOut').value =mps;
       
    });
    });