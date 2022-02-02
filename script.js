document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((txt) => txt.json())
    .then((data) => {
      //Work with JSON data
      const control = Array.from(document.getElementById("control").children);
      control.forEach((element) => {
        element.addEventListener("click", () => {
          control.forEach((elementElse) => {
            if(elementElse != element){
              elementElse.style.fontWeight = 300;
              elementElse.style.color = 'inherit';
            }
            else{
              element.style.fontWeight = 500;
              element.style.color = 'white';
            }
          })
          const index = control.indexOf(element);
          stat(index, data);
        });
      });
    })
    .catch((err) => {
      //Handle error
    });
});

function stat(index, data) {
  const display = document.getElementsByClassName("record");
  switch (index) {
    case 0: //daily
      for (let i = 0; i < display.length; i++) {
        display[i].firstElementChild.innerText =
          data[i]["timeframes"]["daily"]["current"] + "hrs";
        display[i].lastElementChild.innerText =
          "Yesterday - " + data[i]["timeframes"]["daily"]["previous"];
      }
      break;
    case 1: //weekly
      for (let i = 0; i < display.length; i++) {
        display[i].firstElementChild.innerText =
          data[i]["timeframes"]["weekly"]["current"] + "hrs";
        display[i].lastElementChild.innerText =
          "Last week - " + data[i]["timeframes"]["weekly"]["previous"];
      }
      break;
    case 2: //monthly
      for (let i = 0; i < display.length; i++) {
        display[i].firstElementChild.innerText =
          data[i]["timeframes"]["monthly"]["current"] + "hrs";
        display[i].lastElementChild.innerText =
          "Last month - " + data[i]["timeframes"]["monthly"]["previous"];
        break;
      }
  }
}
