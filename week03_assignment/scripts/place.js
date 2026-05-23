const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();

lastModified.textContent =
    `Last Modification: ${document.lastModified}`;



// W=35.74+0.6215T−35.75V0.16+0.4275TV0.16
// W = wind chill
// T = temperatura em °F
// V = velocidade do vento em mph

const temperature = 40;
const windSpeed = 5;

document.querySelector("#temperature").textContent = temperature;
document.querySelector("#windspeed").textContent = windSpeed;

function calculateWindChill(temp, speed) {
    return (
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(speed, 0.16) +
        0.4275 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

let windChill = "N/A";

if (temperature <= 50 && windSpeed > 3) {
    windChill = calculateWindChill(temperature, windSpeed) + "°F";
}

document.querySelector("#windchill").textContent = windChill;