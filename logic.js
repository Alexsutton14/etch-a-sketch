const mainContainer = document.getElementById("container");
const rowsInput = document.getElementById("rows-input");
const resetButton = document.getElementById("reset-button");
const maxRows = 100;

function changeColor(cellId){
    cell = document.getElementById(cellId);
    cell.style.backgroundColor = "black";
}

function buildGrid(){
    let rows = rowsInput.value;
    //Ends function if input is not a number
    if(isNaN(rows)){
        console.log("Input NaN");
        return null;
    }
    //limits input to maxRows value
    if (rows > maxRows){
        rows = maxRows;
        rowsInput.value = maxRows;
    }
    //calculate % size to assign cells and rows for even spacing
    let split = 100/rows;
    //removes any children to main container before rebuilding grid
    var oldRows = document.getElementsByClassName("grid-row");
    for(let r=0; r < oldRows.length;){
        oldRows[r].remove();
    } 
    //creates as many rows as requested
    for(let i=0; i < rows; i++){
        let rowNumber = i;
        let newDiv = document.createElement("div");
        newDiv.className = "grid-row";
        newDiv.style.height = `${split}%`;

        //creates same number of cells as rows
        for(let n=0; n< rows; n++){
            let cellId = `${rowNumber}-${n}`;
            let newCell = document.createElement("div");
            newCell.className = "cell";
            newCell.id = cellId;
            newCell.addEventListener("mouseover", function(){changeColor(cellId);});
            //adds cell to current row
            newDiv.appendChild(newCell);
        }
        //adds current row to main container div
        mainContainer.appendChild(newDiv);
    }
}
rowsInput.value = 16;
buildGrid();
resetButton.addEventListener("click", function(){buildGrid(rowsInput.value)});