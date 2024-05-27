let playGameBtn = document.querySelector(".play-game-btn");
let playBox = document.querySelector(".play-box");
let box = document.querySelectorAll(".box");
let temp = true;
let winner = document.querySelector("h1");
let main = document.querySelector(".main");
playGameBtn.addEventListener("click", () => {
  box.forEach((val) => {
    val.disabled = false;
    val.innerText = "";
    temp = true;
    winner.style.display = "none";
    i = 0;
  });
});
box.forEach((val) => {
  val.addEventListener("click", () => {
    if (temp) {
      val.innerText = "X";
      temp = false;
      val.disabled = true;
    } else {
      val.innerText = "O";
      temp = true;
      val.disabled = true;
    }
    checkWin();
  });
});
function disableBox() {
  box.forEach((val) => {
    val.disabled = true;
  });
}

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let i = 0;
let checkWin = () => {
  i++;
  // console.log(`i is: ${i}`);

  for (let pattern of winPattern) {
    // console.log(pattern);
    // console.log(pattern[0], pattern[1], pattern[2]);
    pos1 = box[pattern[0]].innerText;
    // console.log(`pos1: ${pos1}`);
    pos2 = box[pattern[1]].innerText;
    // console.log(`pos2: ${pos2}`);
    pos3 = box[pattern[2]].innerText;
    // console.log(`pos3: ${pos3}`);
    if (pos1 == pos2 && pos2 == pos3 && pos1 == pos3 && i<=9) {
      // console.log(`win : ${pos1}, ${pos2}, ${pos3}`);
      if (pos1 == "X") {
        winner.innerText = "Winner is X";
        winner.style.display = "block";

        disableBox();
      } else if (pos1 == "O") {
        winner.innerText = "Winner is O";
        winner.style.display = "block";

        disableBox();
      }
    } else {
      if (i >= 9) {
        winner.innerText = "DRAW";
        winner.style.display = "block";
      }
    }
  }
};
