
function convert() {
    var valNum = parseFloat(document.getElementById("temperature").value);
    var scale = document.getElementById("scale").value;
    var result = document.getElementById("result");

    if (scale === "fahrenheit") {
        var celsius = ((valNum - 32) * (5 / 9)).toFixed(2);
        var kelvin = (parseFloat(celsius) + 273.15).toFixed(2);
        result.innerHTML = celsius + " Celsius<br>" + kelvin + " Kelvin";
    } else if (scale === "celsius") {
        var fahrenheit = ((valNum * 9 / 5) + 32).toFixed(2);
        var kelvin = (parseFloat(valNum) + 273.15).toFixed(2);
        result.innerHTML = fahrenheit + " Fahrenheit<br>" + kelvin + " Kelvin";
    } else if (scale === "kelvin") {
        var celsius = (valNum - 273.15).toFixed(2);
        var fahrenheit = ((celsius * 9 / 5) + 32).toFixed(2);
        result.innerHTML = celsius + " Celsius<br>" + fahrenheit + " Fahrenheit";
    } else {
        result.innerHTML = "Invalid scale";
    }
}
