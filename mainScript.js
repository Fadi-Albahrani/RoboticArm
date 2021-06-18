//document.getElementById('onOffButton').style.backgroundColor = "red";

function onOff (){
    var button = document.getElementById('onOffButton');
    
    if (button.value == "off"){
        button.value = "on";
        button.style.backgroundColor = "green";
    }else {
        button.value = "off";
        button.style.backgroundColor = "red";
    }

}





// console.log(button.value);