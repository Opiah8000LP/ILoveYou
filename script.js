const text = document.getElementById("love");

function shakeText() {
    text.classList.remove("shake");

    // force reflow so animation restarts
    void text.offsetHeight;

    text.classList.add("shake");
}

document.addEventListener("click", shakeText);
