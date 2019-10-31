var writeToUsLink = document.querySelector(".write-us");
var writeToUsPopup = document.querySelector(".modal-write-us");
var writeToUsOverlay = document.querySelector(".modal-overlay")
var writeToUsClose = document.querySelector(".modal-write-us-close");
var writeToUsForm = writeToUsPopup.querySelector(".write-us-form");
var writeToUsName = writeToUsPopup.querySelector(".name");
var writeToUsEmail = writeToUsPopup.querySelector(".email");
var writeToUsText = writeToUsPopup.querySelector(".text");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

writeToUsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeToUsPopup.classList.add("modal-show");
    writeToUsOverlay.classList.add("overlay-show");

    if (storageName && storageEmail) {
        writeToUsName.value = storageName;
        writeToUsEmail.value = storageEmail;
        writeToUsText.focus();
    } else {
        writeToUsName.focus();
    }
});

writeToUsClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeToUsPopup.classList.remove("modal-show");
    writeToUsPopup.classList.remove("modal-error");
    writeToUsOverlay.classList.remove("overlay-show");
});

writeToUsForm.addEventListener("submit", function(evt) {
    if (!writeToUsName.value || !writeToUsEmail.value || !writeToUsText.value) {
        evt.preventDefault();
        writeToUsPopup.classList.remove("modal-error");
        writeToUsPopup.offsetWidth = writeToUsPopup.offsetWidth;
        writeToUsPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", writeToUsName.value);
            localStorage.setItem("email", writeToUsEmail.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27 && writeToUsPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        writeToUsPopup.classList.remove("modal-show");
        writeToUsPopup.classList.remove("modal-error");
        writeToUsOverlay.classList.remove("overlay-show");
    }
});