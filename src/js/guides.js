const side = document.getElementById("side");

function update() {
    if (window.innerWidth <= 1330) {
        side.style.visibility = "hidden";
    } else {
        side.style.visibility = "visible";
    }
}

update();

window.addEventListener("resize", update);