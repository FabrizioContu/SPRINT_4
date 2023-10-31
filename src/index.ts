let jokes = document.getElementById("joke");


async function loadJokes() {
   const response = await fetch("https://icanhazdadjoke.com", {
     headers: {
       "Accept": "application/json"
     }
   });
   const data = await response.json();
   console.log(data.joke);
   if (jokes) {
      jokes.innerHTML = data.joke;
    } else {
      console.log("joke not found.");
    }
 }
 
 loadJokes();
 
let button = document.getElementById("next");
button?.addEventListener("click", loadJokes);
