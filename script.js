window.onscroll=function showHeader(){
let header=document.querySelector('.header')
if(window.pageYOffset>900){
    header.classList.add('header_fixed');
}
else{
    header.classList.remove('header_fixed');
}
}
window.onscroll=function showHeader(){
    if(window.pageYOffset>800){
        document.getElementById('textcont').style.display = 'block';
    }
    }