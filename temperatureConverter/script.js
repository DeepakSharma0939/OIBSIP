function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;
  
    if (fromUnit === toUnit) {
      result = temperatureInput;
    } else if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        result = (temperatureInput * 9/5) + 32;
      } else {
        result = temperatureInput + 273.15;
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        result = (temperatureInput - 32) * 5/9;
      } else {
        result = (temperatureInput - 32) * 5/9 + 273.15;
      }
    } else {
      if (toUnit === "celsius") {
        result = temperatureInput - 273.15;
      } else {
        result = (temperatureInput - 273.15) * 9/5 + 32;
      }
    }
  
    document.getElementById("result").textContent = `Converted Temperature:  ${result.toFixed(2)} ${toUnit}`;
  }
  