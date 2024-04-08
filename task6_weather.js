
function suggestTransportation(weatherCondition) {
    if (weatherCondition === "sunny") {
        return "You can use a bicycle or walk.";
    } else if (weatherCondition === "rainy") {
        return "It's rainy, consider taking a car or using public transportation.";
    } else if (weatherCondition === "windy") {
        return "It's windy, you may want to use public transportation or drive cautiously.";
    } else if (weatherCondition === "snowy") {
        return "It's snowy, consider using a car or public transportation if available.";
    } else {
        return "Weather condition not recognized. Please check again.";
    }
}


const weatherCondition = "sunny";
const suggestion = suggestTransportation(weatherCondition);
console.log(suggestion);
