let boxes = document.querySelectorAll(".box");
let resets = document.querySelector(".reset");
let news = document.querySelector(".new");
let msgco = document.querySelector(".msgc");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;
const WinPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO == true){
            box.innerText = "X";
            turnO = false;
        } else {
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgco.classList.remove("msgc");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of WinPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                return true; 
            }
        }
    }
    return false;
};

const showWinner = (winner) => {
    msg.innerText = "Congratulations, the winner is " + winner;
    msgco.classList.remove("msgc");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const reset = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgco.classList.add("msgc");
};

news.addEventListener("click", reset);
resets.addEventListener("click", reset);
