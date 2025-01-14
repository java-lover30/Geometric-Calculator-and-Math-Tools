let circleArea = angular.module("circleArea", []);


circleArea.controller('circleController', function() {
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


circleArea.controller('mainCircleController', function() {

    let circle = this;


    circle.outputArea = function (radius) {

        let area = ''
        if (radius === undefined) {
            return '';
        }

        area = 2 * Math.PI * radius;

        return area;
    }

})

