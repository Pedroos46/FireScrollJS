document.addEventListener("DOMContentLoaded", (event) => {

    const square2 = document.getElementById("squareScroll2");
    document.onwheel = (e) => {
        let isTrackpad = fireScroll.isTrackpad(e);
        if (isTrackpad === true) {
            square2.textContent = "You're using the trackpad 👀"
        }
        if (isTrackpad === false) {
            square2.textContent = "You're using the mouse 🐭"
        }
        if (isTrackpad === null) {
            square2.textContent = "mmmm🤔"
        }
    };

    const square = document.getElementById("squareScroll");
    square.addEventListener("wheel", (e) => {
        let isTrackpad = fireScroll.isTrackpad(e);
        if (isTrackpad === true) {
            square.textContent = "You're using the trackpad 👀"
        }
        if (isTrackpad === false) {
            square.textContent = "You're using the mouse 🐭"
        }
        if (isTrackpad === null) {
            square.textContent = "mmmm🤔"
        }
    });
});

