function initialisation() {
  let board = document.querySelector("#grid-container");
  board.style.gridTemplateColumns = "repeat(16, 1fr)";
  board.style.gridTemplateRows = "repeat(16, 1fr)";
  board.style.width = "500px";
  board.style.height = "500px";
  board.style.display = "grid";

  for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    square.className = "hover";
    board.appendChild(square);
  }
  /*for (let i = 0; i < 256; i++) {
    let square = "<div class='hover'></div>";
    board.innerHTML += square;
    document.querySelectorAll(".hover")[i].style.backgroundColor = "blue";
  }*/
  /*buttons black*/
  let black = document.getElementById("black");
  black.addEventListener("click", hoverB);
  /*buttons rgb*/
  let rgb = document.getElementById("rgb");
  rgb.addEventListener("click", hoverRgb);
}
function hoverB() {
  let hover = document.getElementsByClassName("hover");
  for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener("mouseover", function () {
      hover[i].style.backgroundColor = "black";
    });
  }
}

function hoverRgb() {
  let hover = document.getElementsByClassName("hover");
  for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener("mouseover", function () {
      hover[i].style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
  }
}
