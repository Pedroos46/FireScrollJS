document.addEventListener("DOMContentLoaded", (event) => {

    square = document.getElementById("squareScroll2");
    document.onwheel = (e) => {
        if (fireScroll.isTrackpad(e) === true) {
            square.textContent = "You're using the trackpad👀"
        }
        if (fireScroll.isTrackpad(e) === false) {
            square.textContent = "You're using the mouse🐭"
        }
        if (fireScroll.isTrackpad(e) === null) {
            square.textContent = "mmmm🤔"
        }
    };

});


document.getElementById("squareScroll").addEventListener("onwheel")