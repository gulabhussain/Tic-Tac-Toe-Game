// Gulab Hussain
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true //player x
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () =>{
 turnO = true;
 enableBoxes();
msgContainer.classList.add("hide");
} 
boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        if (turnO){
            box.innerText ="O";
            turnO = false ;
        } else {
            box.innerText = "X"
            turnO = true ;
        }
        box.disabled = true ;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled= true;
    };
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled= false;
        box.innerText = "";
    };
};

const showWinner = (winner) =>{
msg.innerText = `Congratulations, Winner is ${winner}`;
msg.style.Color="green"
msgContainer.classList.remove("hide");
newGameBtn.innerText="New Game."
};

const drawGame = () =>{      // for draw
    msg.innerText = "Game Was Draw.Play again.";
    msg.style.color = "blue";
    msgContainer.classList.remove("hide");
    newGameBtn.innerText="Play again."
};

const checkWinner = () => {
    let isDraw = true;  // maan ke chalte hain ki draw hai

    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner:", pos1Val);

                showWinner(pos1Val);
                disableBoxes(); // winner ke baad aur moves na ho
                return;
            }
        }
    }

    // check karo agar koi empty box bacha hai ya nahi
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false; // empty box hai matlab abhi game draw nahi
        }
    });

    if (isDraw) {
        drawGame();
        disableBoxes();
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


 const modeBtn = document.getElementById("mode-btn");
const body = document.body;

modeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    modeBtn.innerText = "☀️"; // sun icon
  } else {
    modeBtn.innerText = "🌙"; // moon icon
  }
});


//Gulab Hussain
