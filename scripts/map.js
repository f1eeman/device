var mapLink = document.querySelector(".index-column__image-box");
var mapPopup = document.querySelector(".modal-map");
var mapOverlay = document.querySelector(".modal-overlay")
var mapClose = document.querySelector(".modal-map-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show-map");
    mapOverlay.classList.add("overlay-show");
});

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show-map");
    mapOverlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27 && mapPopup.classList.contains("modal-show-map")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show-map");
        mapPopup.classList.remove("modal-error");
        mapOverlay.classList.remove("overlay-show");
    }
});