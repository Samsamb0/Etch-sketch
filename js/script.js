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

  /*pickColor*/
  let choiceColor = document.querySelector("input");
  choiceColor.addEventListener("change", pickColor);
  /*reset*/
  let reset = document.getElementById("reset");
  reset.addEventListener("click", resetB);
  /*size*/
  let sizeBtn = document.getElementById("sSize");
  sizeBtn.addEventListener("click", changeSize);
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

function pickColor() {
  let hover = document.getElementsByClassName("hover");
  let color = document.querySelector("input").value;
  for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener("mouseover", function () {
      hover[i].style.backgroundColor = color;
    });
  }
}

function resetB() {
  let hover = document.querySelectorAll(".hover");
  for (let square of hover) {
    square.style.backgroundColor = "blue";
  }
}

function changeSize() {
  let size = document.getElementById("size").value;
  let board = document.querySelector("#grid-container");
  if (size <= 100) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let existingSquares = document.querySelectorAll(".hover");
    for (let i = 0; i < existingSquares.length; i++) {
      existingSquares[i].remove();
    }

    for (let i = 0; i < size * size; i++) {
      let square = document.createElement("div");
      square.style.backgroundColor = "blue";
      square.className = "hover";
      board.appendChild(square);
    }
  } else {
    funAlert();
  }
}
function funAlert() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Takes only number under or equal to 100!",
    footer: '<a href="">Why do I have this issue?</a>',
  });
}
