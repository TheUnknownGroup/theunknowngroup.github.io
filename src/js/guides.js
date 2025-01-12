const side = document.getElementById("side");

function update() {
    if (window.innerWidth <= 1330) {
        side.style.visibility = "hidden";
    } else {
        side.style.visibility = "visible";
    }
    console.log(window.innerWidth);
}

update();

window.addEventListener("resize", update);