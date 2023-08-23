const arr =["😀","😀","😁","😂","😍","😁","😂","😍","😎","😘","🥰","🙄","🙄","😎","😘","🥰" ] ;
var sh = arr.sort(()=>(Math.random()>0.5)?2:-1);
var c = 0 ;
for(var i=0;i<sh.length;i++){
    let box=document.createElement('div') ;
    box.className ='item' ;
    box.innerHTML=sh[i] ;
    box.onclick = function(){
    this.classList.add('bo')
    setTimeout(function(){
        if(document.querySelectorAll('.bo').length>1){
            if(document.querySelectorAll('.bo')[0].innerHTML==
               document.querySelectorAll('.bo')[1].innerHTML){
              
              
              document.querySelectorAll('.bo')[0].classList.add('bm') 
              document.querySelectorAll('.bo')[1].classList.add('bm') 
              document.querySelectorAll('.bo')[1].classList.remove('bo') 
              document.querySelectorAll('.bo')[0].classList.remove('bo') 
              if(document.querySelectorAll('.bm').length==arr.length){
                alert('win')
              }
            }
            else{
            document.querySelectorAll('.bo')[1].classList.remove('bo') 
            document.querySelectorAll('.bo')[0].classList.remove('bo') }
        }
    },500)
}
    document.querySelector('.game').appendChild(box) ;
} 

// document.getElementById("hh").onclick = window.location.reload() ;