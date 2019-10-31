var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var overlay = document.querySelector(".modal-overlay")
var close = document.querySelector(".modal-close");
var form = popup.querySelector(".login-form");
var login = popup.querySelector(".login-user");
var password = popup.querySelector(".login-password");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login")
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function(evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27 && popup.classList.contains("modal-show")) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("overlay-show");
    }
});