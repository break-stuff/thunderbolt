(function () {
    const $bottomNav = document.querySelector(".bottom-nav");
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
            let position = window.pageYOffset || document.documentElement.scrollTop;
            position > lastScrollTop ? $bottomNav.classList.add("hide-nav") : $bottomNav.classList.remove("hide-nav");
            lastScrollTop = position <= 0 ? 0 : position;
        }, { passive: true }
    );
})();