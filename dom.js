const btn = document.getElementById("changeColor")

document.body.style.backgroundColor="pink";

function changeBackground1(){
    document.body.style.backgroundColor="purple";
    document.getElementById("heading").style.color="white";
}
function changeBackground2(){
    document.body.style.backgroundColor="pink";
    document.getElementById("heading").style.color="black";
}

let count=0;
function increment(){
    count +=1;
    document.getElementById("count").innerText=count;
}
function decrement(){
    count-=1;
    document.getElementById("count").innerText=count;
}
function reset(){
    count=0;
    document.getElementById("count").innerText=count;
}
