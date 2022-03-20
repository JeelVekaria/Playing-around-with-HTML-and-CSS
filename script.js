// Takes care of color changing square

var sc=0;
function switchColor(){
    if(sc==0){
        document.getElementById("gtsc").src = "img/blue.png";
    }
    if(sc==1){
        document.getElementById("gtsc").src = "img/green.png";
    }
    if(sc==2){
        document.getElementById("gtsc").src = "img/yellow.png";
    }
    if(sc==3){
        document.getElementById("gtsc").src = "img/red.png";
        sc=-1;
    }
    sc++;
}
// Clicking red box
function red() {
    alert("You clicked the red box! You will now be redirrected to another website.");
  }
// Clicking cat
function cat(){
    alert("You clicked the cat!")
}

// Text changing button
var flipflop=0;
function imagechange(){
    if(flipflop%2==0){
        document.getElementById("changeText").innerHTML = "This is shown for the second time";
        document.getElementById("changeText").style.color="blue";
        document.getElementById("changeText").style.backgroundColor="black";
        document.getElementById("changeText").style.fontSize="20px";
    }
    else{
        document.getElementById("changeText").innerHTML = "This is shown for the third time";
        document.getElementById("changeText").style.color="green";
        document.getElementById("changeText").style.backgroundColor="white";
        document.getElementById("changeText").style.fontSize="25px";
    }
    flipflop++;
    if(flipflop==8){
        document.getElementById("changeText").style.display="none";
    }
    if(flipflop==10){
        document.getElementById("changeText").style.display="block";
    }
}

var car = {
    type:"Vroom Journy", 
    speed:"20",
    name:"Dodge",
    recommanded:"yes"
};

// This line also works
// myInterval = setInterval(requestTime, 500);
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function requestTime(){
    const d = new Date();
    ele = document.getElementById("timeShown");
    ele.innerHTML = months[d.getMonth()]+" "+days[d.getDay()]+"<br>"+d.getHours() + ":" + d.getMinutes() + ":";
    if(d.getSeconds()<10){
        ele.innerHTML += "0"+d.getSeconds();
    }
    else{
        ele.innerHTML += d.getSeconds();
    }
    setInterval(requestTime,1000);
}


var s = false;

function showHide(){
    if(s){
        document.getElementById("timeShown").style.display="none";
    }
    else{
        document.getElementById("timeShown").style.display="block";

    }
    s = !s;
}