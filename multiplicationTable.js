let multiTable = angular.module("multiTable", []);

// Control for modal
multiTable.controller('multiTableController', function() {
    let modalControl = this;

    // Function to open modal
    modalControl.openModal = function(){
        $('#firstModal').modal('show');
    }

    // Function to redirect based on user input
    modalControl.redirectPage = function(){
        let userInput = Number(modalControl.userInput);

        if(userInput === 1){
            console.log("triggered")
            window.location.href = "TriangularArea.html"
        } else if(userInput === 2) {
            window.location.href = "RectangularArea.html";
        } else if(userInput === 3) {
            window.location.href = "CircularArea.html";
        } else {
            alert("Invalid input. Please enter 1, 2, or 3.");

        }
    }
});

// Control for getting multiplication table
multiTable.controller('mainMultiTableController', function() {

    let multi = this;


    multi.outputMulti = function (size){

        let output = [];
        for (let i = 1; i <= size; i++) {
            let row = []; // Initialize an empty string for the row

            for (let j = 1; j <= size; j++) {
                row.push (i * j); // Append the product to the row, separated by a tab
            }

            output.push(row) // Print the entire row
        }

        return output;
    }

})

