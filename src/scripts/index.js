(function () {
    const $bottomNav = document.querySelector(".bottom-nav");
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
            let position = window.pageYOffset || document.documentElement.scrollTop;
            position > lastScrollTop ? $bottomNav.setAttribute('aria-expanded', false) : $bottomNav.setAttribute('aria-expanded', true);
            lastScrollTop = position <= 0 ? 0 : position;
        }, { passive: true }
    );
})();