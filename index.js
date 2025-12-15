function textBlink() {
    const text = document.getElementById("info");
    while (true) {
        while (Number(text.style.opacity.split("%"))[0] != 0) {
            text.style.opacity = `${Number(text.style.opacity) - 5}`;
        }
        while (Number(text.style.opacity.split("%"))[0] != 0) {
            text.style.opacity = `${Number(text.style.opacity) + 5}`;
        }
    }
}

function textContinue() {
    const sentences = document.getElementsByClassName("hidden")
}