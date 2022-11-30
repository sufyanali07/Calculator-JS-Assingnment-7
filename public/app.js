//======================================


var display = document.getElementById("display");
function getvalue(a) {
    console.log(a);
    display.value += a; 
}

//======================================


function calculateval() {
    var a = eval(display.value);  
    console.log(a);
    display.value = a;
}

//=============FOR CLEAR=========================


function clearAll() {
    display.value = "";
}


//======================================