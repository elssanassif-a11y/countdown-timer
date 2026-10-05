let outputsec=document.getElementById("timer");
let startbtn=document.getElementById("start");
let stopbtn=document.getElementById("stop");
let resetbtn=document.getElementById("reset");
let interval;
startbtn.addEventListener("click",function(){
    clearInterval(interval);
    interval=setInterval(starttimer,1000);
})
stopbtn.addEventListener("click",function(){
    clearInterval(interval);
})
resetbtn.addEventListener("click",function(){
    clearInterval(interval);
    sec=10
    outputsec.innerHTML="10";

})




let sec=10;
function starttimer(){
    sec--
    if (sec>0){
    outputsec.innerHTML=sec;}
    if (sec<0){

    sec=0;
     outputsec.innerHTML="0";
     
    }
}
