Let celsius = document.getElementById('celsius');
Let fahrenheit = document.getElementById('fahrenheit');

celsius.oninput = () => {
    Let output = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
};

fahrenheit.oninput = () => {
    Let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFoat(output.toFixed(2));
};







