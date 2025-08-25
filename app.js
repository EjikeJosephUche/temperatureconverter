
const TemperatureConverter = {
  // Celsius Conversions
  celsiusToFahrenheit: function (celsius) {
    return (celsius * 9) / 5 + 32;
  },

  celsiusToKelvin: function (celsius) {
    return celsius + 273.15;
  },

  // Fahrenheit Conversions
  fahrenheitToCelsius: function (fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },

  fahrenheitToKelvin: function (fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9 + 273.15;
  },

  // Kelvin Conversions
  kelvinToCelsius: function (kelvin) {
    return kelvin - 273.15;
  },

  kelvinToFahrenheit: function (kelvin) {
    return ((kelvin - 273.15) * 9) / 5 + 32;
  }
};

// console.log("25°C to °F:", TemperatureConverter.celsiusToFahrenheit(25));
// console.log("25°C to K:", TemperatureConverter.celsiusToKelvin(25));
// console.log("77°F to °C:", TemperatureConverter.fahrenheitToCelsius(77));
// console.log("77°F to K:", TemperatureConverter.fahrenheitToKelvin(77));
// console.log("300K to °C:", TemperatureConverter.kelvinToCelsius(300));
// console.log("300K to °F:", TemperatureConverter.kelvinToFahrenheit(300));
