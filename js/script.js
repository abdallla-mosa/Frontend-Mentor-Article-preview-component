const sharbtn=document.querySelector('.sharBtn'),
    sharContent=document.querySelector('.sharContent'),
    sharBtn2=document.querySelector('.sharContent .sharBtn2');

    sharbtn.onclick=function(){
         sharContent.classList.toggle('active')   
         };
         sharBtn2.onclick=function(){
         sharContent.classList.remove('active')   
         };


