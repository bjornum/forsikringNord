//id for knappen modal 1 and popup 2(misc)
var theButton = document.getElementById('myButton');
// var theButton2 = document.getElementById('myButton2');

//to get modal 1 and popup 2(misc)
var modal = document.getElementById('myModal');
// var modal2 = document.getElementById('myModal2');

//to get the span element that close the modal1 and modal2(misc)
var span = document.getElementsByClassName("close")[0];
// var span = document.getElementsByClassName("close2")[0];


//Function to open modals, when button are clicked

//modal 1
theButton.onclick = function() {
    modal.style.display = "block";
}

// //modal 2
// theButton2.onclick =function() {
//     modal2.style.display ="block";
// }


//to close the x in the <span>

//modal 1
// span.onclick = function() {
//     modal.style.display = "none";
// }

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

miscOn.onclick =function () {
    miscFunction.alert.display="block";
}

 function miscOn(){
     alert(document.querySelectorAll('miscShow'));
 }

 var miscFunction = document.getElementById('miscShow');

// function mybutton2(){
//     alert(document.getElementById('miscUP').innerHTML);
// }

// var myButton2 = document.getElementById('miscUP')


// var buttonKNAPP = document.getElementById('enKnapp')

// function buttonPOP(){
//     alert('test');
// }