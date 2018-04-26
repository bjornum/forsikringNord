var collaps = document.getElementsByClassName('dropmenu');
var i;

for(i = 0; i < collaps.length; i++) {
    collaps[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var dropcontent = this.nextElementSibling;
        if (dropcontent.style.display === "block") {
            dropcontent.style.display = "none";
        } else {
            dropcontent.style.display ="block";
        }
    });
}