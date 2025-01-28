let userInputEl = document.getElementById("userInput");
let spinnerEl = document.getElementById("spinner");
let factEl = document.getElementById("fact");

function getFactOfEnteredNumber(event) {
  if (event.key === "Enter") {
    let userText = userInputEl.value;
    
    if (userText === "") {
      alert("Please Enter Number");
      return;
    }
    
    let options = {
      method: "GET",
    };
    let url = "https://apis.ccbp.in/numbers-fact?number=" + userText;
    
    spinnerEl.classList.remove("d-none");
    factEl.classList.add("d-none");

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        spinnerEl.classList.add("d-none");
        factEl.classList.remove("d-none");

        let { fact } = jsonData;
        factEl.textContent = fact;
      });
  }
}

userInputEl.addEventListener("keydown", getFactOfEnteredNumber);
