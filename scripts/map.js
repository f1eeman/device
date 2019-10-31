var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var overlay = document.querySelector(".modal-overlay")
var close = document.querySelector(".modal-close");
var login = popup.querySelector(".login-user");
var password = popup.querySelector(".login-password");
var form = popup.querySelector(".login-form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-show");
    login.focus();
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});

form.addEventListener("submit", function() {
    if (!login.value || !password.value) {
        evt.preventDefault();
    }
});