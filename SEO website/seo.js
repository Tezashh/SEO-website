const nav=document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
    nav.classList.toggle("fixed",window.scrollY>80);

});
const menu=document.querySelector("#menu");
const links=document.querySelector(".links");
menu.onclick=()=>{
    menu.classList.toggler("bi-x-lg");
    links.classList.toggle("open");
};
let myButton=document.querySelector("#back__top");
window.onscroll=() =>scrollFunction();
const scrollFunction=()=>{
    if(document.body.scrollTop >150 ||
        document.documentElement.scrollTop>150){
        myButton.style.display="block";
    }
    else{
        myButton.style.display="none";
    }
};
const topFunction=()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
};
new WOW().init();



