let triangleArea = angular.module("triangleArea", []);


triangleArea.controller('triangleController', function() {  
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

triangleArea.controller('mainTriangleController', function() {

    let triangle = this;


    triangle.outputArea = function (height, base) {

        let area = ''
        if (height === undefined || base === undefined) {
            return '';
        }

        area = 0.5 * height * base;

        return area;
    }

})

