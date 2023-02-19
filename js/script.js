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
}
