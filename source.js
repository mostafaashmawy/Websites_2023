let marsh=document.querySelector(".marsh");
let marshs=document.querySelector(".marshs");
let myon=document.querySelector(".myon");
let bike=document.querySelector(".bike");
let information=document.querySelector(".information");
let theinformation=document.querySelector(".theinformation");
let oninformation=document.querySelector(".oninformation");
marsh.addEventListener("mouseenter",function(){
    first();
});
marshs.addEventListener("mouseenter",function(){
    first();
});
function first(){
information.classList.replace('d-none','d-flex');
}

myon.addEventListener("mouseenter",function(){
    second();
});
function second(){
    theinformation.classList.replace('d-none','d-flex');
}

bike.addEventListener("mouseenter",function(){
    third();
});
function third(){
    oninformation.classList.remove('d-none');
   
}
marsh.addEventListener("mouseleave",function(){
    forth();
});
function forth(){
    information.classList.replace('d-flex','d-none');
}
marshs.addEventListener("mouseleave",function(){
    forth();
});
myon.addEventListener("mouseleave",function(){
    fifth();
});
function fifth(){
    theinformation.classList.replace('d-flex','d-none');
}
bike.addEventListener("mouseleave",function(){
    samba();
});
function samba(){
    oninformation.classList.add('d-none');
}