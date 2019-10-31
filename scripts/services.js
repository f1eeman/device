var services = document.querySelectorAll(".services-box > section");
    if (0 !== services.length) {
        var servicesNav = document.querySelector(".services-list"),
            servicesItem = document.querySelectorAll(".services-item");
        servicesNav.addEventListener("click", function(evt) {
            evt.preventDefault();
            var s = evt.target;
            if (s.classList.contains("services-link")) {
                for (var a = s.parentElement, o = 0; o < services.length; o++) services[o].classList.remove("description-active"), servicesItem[o].classList.remove("service-item-current");
                var d = ".description-" + s.id.split("-")[0];
                document.querySelector(d).classList.add("description-active"), a.classList.add("service-item-current");
            }
        })
    }