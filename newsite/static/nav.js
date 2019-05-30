


window.onscroll = function() {stickyFunc()};

var nav = document.getElementById("nav"); // may need to chank identifiers
var sticky = nav.offsetTop;

function stickyFunc() {
    if (window.pageYOffset >= sticky) {
	nav.classList.add("sticky");
    }
    else {
	nav.classList.remove("sticky");
    }
}
