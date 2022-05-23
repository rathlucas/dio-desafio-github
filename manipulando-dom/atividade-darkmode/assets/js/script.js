const title = document.getElementById("title");
const btn = document.getElementById("btn");
const body = document.body;
const footer = document.getElementById("foo");

btn.addEventListener("click", function darkMode() {
    body.classList.toggle("body--dark-mode");
    btn.classList.toggle("container__btn--dark-mode");
    footer.classList.toggle("footer--dark-mode");

    if (title.textContent == "Light Mode ON") {
        title.textContent = "Dark Mode ON";
    } else {
        title.textContent = "Light Mode ON"
    }
})