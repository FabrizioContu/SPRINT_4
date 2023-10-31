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
function loadJokes() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://icanhazdadjoke.com", {
            headers: {
                "Accept": "application/json"
            }
        });
        const data = yield response.json();
        console.log(data.joke);
        if (jokes) {
            jokes.innerHTML = data.joke;
        }
        else {
            console.log("joke not found.");
        }
    });
}
loadJokes();
let button = document.getElementById("next");
button === null || button === void 0 ? void 0 : button.addEventListener("click", loadJokes);
//# sourceMappingURL=index.js.map