const mainContainer = document.getElementById("container");

function changeColor(cellId){
    cell = document.getElementById(cellId);
    cell.style.backgroundColor = "black";
}

function buildGrid(rows){
    //calculate % size to assign cells and rows for even spacing
    let split = 100/rows;

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
            newCell.style.width = `${split}%`;
            newCell.addEventListener("mouseover", function(){changeColor(cellId);});
            //adds cell to current row
            newDiv.appendChild(newCell);
        }
        //adds current row to main container div
        mainContainer.appendChild(newDiv);
    }
}
buildGrid(16);