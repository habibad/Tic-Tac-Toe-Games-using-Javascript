let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");
let para = document.querySelector(".para");
let isTrue = true;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (isTrue) {
            box.innerText = "O";
            console.log("the box is clicked");
            isTrue = false;
        } else {
            box.innerText = "X";
            console.log("the box is clicked2");
            isTrue = true;
        }
        box.style.pointerEvents = "none"; // Disable further clicks
        checkWinner();
    });
});

const checkWinner = () => {
    let winnerFound = false;

    winPattern.forEach((pattern) => {
        // Get the values of the boxes based on the winning pattern
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        // Check if all three positions are filled and match
        if (pos1value !== "" && pos1value === pos2value && pos2value === pos3value) {
            winnerFound = true; // Mark that a winner is found
            highlightWinningBoxes(pattern); // Highlight the matching pattern
        }
    });

    if (winnerFound) {
        // Update the winner announcement if at least one pattern matches
        para.innerText = `Winner is: ${isTrue ? "X" : "O"}`;
        para.style.display = "block";
        disableAllBoxes(); // Disable all boxes after a win
    }
};

const highlightWinningBoxes = (pattern) => {
    pattern.forEach((index) => {
        boxes[index].style.backgroundColor = "lightgreen"; // Highlight the winning boxes
    });
};

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none"; // Disable further clicks on all boxes
    });
};

resetButton.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""; // Clear the box content
        box.style.pointerEvents = "auto"; // Re-enable clicks
        box.style.backgroundColor = ""; // Reset background color
    });
    para.innerText = ""; // Clear winner message
    para.style.display = "none"; // Hide the winner paragraph
    isTrue = true; // Reset turn to "O"
});
