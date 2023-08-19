
function convert(){
    var valNum = parseFloat(document.getElementById("temperature").value);

    if (document.getElementById("scale").value == "fahrenheit"){
        document.getElementById("result").innerHTML = ((valNum-32)*(5/9)).toFixed(2) + " Celsius";
    } else {
        document.getElementById("result").innerHTML = ((valNum*(9/5))+32).toFixed(2) + " Fahrenheit";
    }
}