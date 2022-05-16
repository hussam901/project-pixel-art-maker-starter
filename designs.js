// Select color input
let color = document.querySelector("#colorPicker");
// Select size input
let height = document.querySelector("#inputHeight");
let width = document.querySelector("#inputWidth");
// When size is submitted by the user, call makeGrid()
let submit = document.querySelector("#sizePicker input[type= submit]");
submit.addEventListener("click",makeGrid);
let table = document.querySelector("#pixelCanvas");

function makeGrid(event) {
    table.innerHTML="";
    event.preventDefault();
    console.log("clicked");
    for(let i= 0;i< Number(height.value);i++){
        let tr = document.createElement("tr");
        for(let j= 0;j< Number(width.value);j++){
            let td = document.createElement("td");
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
