//VARIABLES
var password="TPMXQQA";
var login=document.getElementById("login");
var text=document.getElementById("textIn");

var IP="127.004.831";
var ComName="RaMoOsNe";
var loginInput=document.getElementById("loginCompany1");
var loginInput2=document.getElementById("loginCompany2");
var loginSubmit=document.getElementById("loginCompanySubmit");
var loginText=document.getElementById("loginCompanyName");
var companyDashBoard = document.getElementsByClassName('companyDashBoard');

//FUNCTION
function startGame(){
    window.location.replace('src/pages/screen.html')
}

function companyPasswordCheck(){
    var InputLogin=loginInput.value;
    var InputLogin2=loginInput2.value;
    if(InputLogin == IP){
        console.log("IP correct");
        if(InputLogin2 == ComName){
            loginText.innerHTML="Welcome Stefan";
            for (var o=0;o<companyDashBoard.length;o++){
                console.log("Command Run");
                companyDashBoard[o].style.opacity = ( companyDashBoard[o].style.opacity == "0" ? "1" : "0");
                companyDashBoard[o].style.zIndex = "10";
              }
        }else{
            loginText.innerHTML="Incorrect";
        }
    }else{
        loginText.innerHTML="Incorrect";
    }
}