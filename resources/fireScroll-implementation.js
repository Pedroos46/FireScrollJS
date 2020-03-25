document.addEventListener("DOMContentLoaded", (event) => {

    let square2 = document.getElementById("squareScroll2");
    document.onwheel = (e) => {
        if (fireScroll.isTrackpad(e) === true) {
            square2.textContent = "You're using the trackpad 👀"
        }
        if (fireScroll.isTrackpad(e) === false) {
            square2.textContent = "You're using the mouse 🐭"
        }
        if (fireScroll.isTrackpad(e) === null) {
            square2.textContent = "mmmm🤔"
        }

    };

    let square = document.getElementById("squareScroll");
    square.addEventListener("wheel", (e) => {
        if (fireScroll.isTrackpad(e) === true) {
            square.textContent = "You're using the trackpad 👀"
        }
        if (fireScroll.isTrackpad(e) === false) {
            square.textContent = "You're using the mouse 🐭"
        }
        if (fireScroll.isTrackpad(e) === null) {
            square.textContent = "mmmm🤔"
        }
    });
});


