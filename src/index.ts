let jokes: HTMLElement | null = document.getElementById("joke");
let meteos: HTMLElement | null = document.getElementById("meteo");
let pattern: HTMLElement | null = document.getElementById("pattern");

const options = {
  headers: {
    Accept: "application/json",
  },
};

const jokeAPIs: string[] = [
  "https://api.chucknorris.io/jokes/random",
  "https://icanhazdadjoke.com",
];

const patternSvg: string[] = [
  "magicpattern-1",
  "magicpattern-2",
  "magicpattern-3",
];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

let randomAPIIndex: number = 0;

async function loadJokes() {
  randomAPIIndex = getRandomInt(2);
  const currentAPI = jokeAPIs[randomAPIIndex];

  const response = await fetch(currentAPI, options);
  const data = await response.json();

  if (jokes) {
    jokes.innerHTML = data.value || data.joke;
  }
}
loadJokes();

let randomPatternIndex: number = 0;

function loadPattern() {
  pattern?.classList.remove(
    "magicpattern-1",
    "magicpattern-2",
    "magicpattern-3"
  );

  randomPatternIndex = getRandomInt(3);
  const currentPattern = patternSvg[randomPatternIndex];

  pattern?.classList.add(currentPattern);
}
loadPattern();

async function loadWeather() {
  const responseW = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1"
  );
  const dataW = await responseW.json();
  console.log(dataW.current.temperature_2m);
  if (meteos) {
    meteos.innerHTML = `${dataW.current.temperature_2m} °C`;
  }
}
loadWeather();

let button = document.getElementById("next") as HTMLElement;
button?.addEventListener("click", loadJokes);
button?.addEventListener("click", loadPattern);

const reportAcudits = [{}];

function clientImpression(id: number) {
  reportAcudits.push({
    joke: jokes?.innerHTML,
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
