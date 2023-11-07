"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let jokes = document.getElementById("joke");
let meteos = document.getElementById("meteo");
let pattern = document.getElementById("pattern");
const options = {
    headers: {
        Accept: "application/json",
    },
};
const jokeAPIs = [
    "https://api.chucknorris.io/jokes/random",
    "https://icanhazdadjoke.com",
];
const patternSvg = [
    "magicpattern-1",
    "magicpattern-2",
    "magicpattern-3",
];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let randomAPIIndex = 0;
function loadJokes() {
    return __awaiter(this, void 0, void 0, function* () {
        randomAPIIndex = getRandomInt(2);
        const currentAPI = jokeAPIs[randomAPIIndex];
        const response = yield fetch(currentAPI, options);
        const data = yield response.json();
        if (jokes) {
            jokes.innerHTML = data.value || data.joke;
        }
    });
}
loadJokes();
let randomPatternIndex = 0;
function loadPattern() {
    pattern === null || pattern === void 0 ? void 0 : pattern.classList.remove("magicpattern-1", "magicpattern-2", "magicpattern-3");
    randomPatternIndex = getRandomInt(3);
    const currentPattern = patternSvg[randomPatternIndex];
    pattern === null || pattern === void 0 ? void 0 : pattern.classList.add(currentPattern);
}
loadPattern();
function loadWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        const responseW = yield fetch("https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1");
        const dataW = yield responseW.json();
        console.log(dataW.current.temperature_2m);
        if (meteos) {
            meteos.innerHTML = `${dataW.current.temperature_2m} °C`;
        }
    });
}
loadWeather();
let button = document.getElementById("next");
button === null || button === void 0 ? void 0 : button.addEventListener("click", loadJokes);
button === null || button === void 0 ? void 0 : button.addEventListener("click", loadPattern);
const reportAcudits = [{}];
function clientImpression(id) {
    reportAcudits.push({
        joke: jokes === null || jokes === void 0 ? void 0 : jokes.innerHTML,
        score: id,
        date: Date(),
    });
    console.table(reportAcudits);
    reportJokes();
}
function reportJokes() {
    const reportJokes = reportAcudits.map((el) => el);
    console.log(reportJokes);
}
reportJokes();
//# sourceMappingURL=index.js.map