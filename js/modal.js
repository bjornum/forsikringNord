//id for knappen modal 1
var theButton = document.getElementById('myButton');

//Id for knapp modal 2 (misc)
var theButton2 = document.getElementById('myButton2');

//to get modal 1
var modal = document.getElementById('myModal');

//to get modal 2
var modal2 = document.getElementById('myModal2');

//function to open modal 1, when button is clicked
theButton.onclick = function() {
    modal.style.display = "block";
}

//function to open modal 2, when button is clicked
theButton2.onclick =function() {
    modal2.style.display ="block";
}

// the close x in the span
span.onclick = function() {
    modal.style.display = "none";
}

//close modal if pushed outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}