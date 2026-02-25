const container = document.querySelector(".container");
const submitBtn = document.querySelector("#submit");
const clearBtn = document.querySelector("#clear");
const inputSize = document.querySelector("#size");

clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const allBoxes = document.querySelectorAll(".grid-item");
    allBoxes.forEach((box) => {
        box.style.backgroundColor = "rgb(255 228 196)";
        box.textContent = ''
    });
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const newSize = inputSize.value;
    
    if (newSize > 0 && newSize <= 100) {
        alert("done");
        container.textContent = "";
        inputSize.value = "";
  
        createGrid(newSize);
    } else if (inputSize !== null) {
        alert("Please enter a valid number between 1-100")
    }

})

function createGrid(size){
    const canvasSize = size * size;
    const basis = 100/size

    for (let i=0; i < canvasSize; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add(`grid-item`);
        //   gridBox.textContent = "1";
        gridBox.style.width = `${basis}%`
        gridBox.style.height = `${basis}%`
        gridBox.style.backgroundColor = "rgb(255 228 196)";
        container.append(gridBox);

        gridBox.addEventListener("mouseenter", () => {
            gridBox.style.backgroundColor = randomColor();
        })
    }

}

function randomColor(){
    // let randomNumber = Math.floor(Math.random() * 256);
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}



createGrid(16)