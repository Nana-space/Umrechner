document.addEventListener('DOMContentLoaded',function(){
var buttonL = document.getElementById('btnActionL');
 
buttonL.addEventListener('click', function UmrechnenL() 
{
   var MM = document.getElementById('mmIn');
   var M = document.getElementById('mIn');
   var KM = document.getElementById('kmIn'); 
   
   if (MM.value != 0){
    M.value = MM.value/1000;
    KM.value = M.value/1000;
   }
   else if (M.value != 0){
   MM.value = M.value/1000
   KM.value = M.value*1000 
   }
   else if (KM.value != 0){
    M.value=KM.value/1000
    MM.value= KM.value/1000000
   }
   if (KM == MM == M == null){
    alert("Bitte geben Sie eine Zahl ein");
   }

   var inch = MM.value * 25.400 ;
   var ft = MM.value * 304.8;
   var yard = M.value * 0.9144;
   var mileS = KM.value * 1.60934;
   var mileN = KM.value * 1.852;

   document.getElementById('inOut').value =inch;
   document.getElementById('ftOut').value =ft;
   document.getElementById('yardOut').value =yard;
   document.getElementById('mileS').value =mileS;
   document.getElementById('mileN').value =mileN;
   
});
})
