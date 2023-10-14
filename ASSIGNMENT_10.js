var rows = document.getElementById("rows");
var columns = document.getElementById("columns");
var matrix = [];
function show() {
    // CREATING THE FIRST MATRIX
    var r = parseInt(rows.value);
    var c = parseInt(columns.value);
    for (var i = 0; i < r; i++) {
        matrix[i] = [];
        for (var j = 0; j < c; j++) {
            matrix[i][j] = +prompt("Enter the value in row " + (i + 1) + " and column " + (j + 1));
        }
    }
    // DISPLAYING THE FIRST MATRIX
    var display1 = document.getElementById("display1");
    display1.innerHTML = "";
    for (var i = 0; i < r; i++) {
        display1.innerHTML += "[ ";
        for (var j = 0; j < c; j++) {
            display1.innerHTML += matrix[i][j].toString();
            display1.innerHTML += " "; //TO ADD A SPACE BETWEEN TWO ELEMENTS
        }
        display1.innerHTML += " ]";
        display1.innerHTML += "<br>"; //TO PRINT NEXT ROW ON NEXT LINE
    }
}
// FUNCTION TO DISPLAY THE TRANSPOSE OF THE FIRST MATRIX
function transpose() {
    var display2 = document.getElementById("display2");
    display2.innerHTML = "";
    var r = parseInt(rows.value);
    var c = parseInt(columns.value);
    for (var i = 0; i < c; i++) {
        display2.innerHTML += "[ ";
        for (var j = 0; j < r; j++) {
            display2.innerHTML += matrix[j][i].toString(); //THIS WILL CHANGE (ith,jth) ELEMENT TO (jth,ith) ELEMENT i.e TRANSPOSE  
            display2.innerHTML += " ";
        }
        display2.innerHTML += " ]";
        display2.innerHTML += "<br>";
    }
}
//# sourceMappingURL=ASSIGNMENT_26.js.map