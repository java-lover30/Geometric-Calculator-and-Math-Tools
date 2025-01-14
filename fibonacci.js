let fibonacci = angular.module("fibonacci", []);

fibonacci.controller('fibonacciController', function() {
    let modalControl = this;

    modalControl.openModal = function(){
        $('#firstModal').modal('show');
    }

  
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


fibonacci.controller('mainFibonacciController', function() { 
    let fibonacciCalculator = this;


    
    fibonacciCalculator.outputFib = function (input){
        let output = ''
        if (input === undefined || input < 2) {
            return '';
        }


        output = [0,1];

        for (let i = 2; i <input ; i++) {
            output[i]=output[i-1] + output[i-2];
        }
        
        return output;
        
    }
    


});

