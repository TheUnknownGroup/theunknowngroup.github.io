document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault()
    history.pushState(null, "", "/docs")
})

let sc = document.getElementById("scroll");
let up = document.getElementById("up");

up.addEventListener("click", (event) => {
    location.href='#h';

    event.preventDefault()
    history.pushState(null, "", "/docs")
})

sc.addEventListener("click", (event) => {
    location.href = '#example';

    event.preventDefault()
    history.pushState(null, "", "/docs")
})