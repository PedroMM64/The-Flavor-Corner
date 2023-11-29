document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("header");
    var menuIcon = document.getElementById("menu-icon");
    var mobileNav = document.getElementById("mobile-nav");
    
    menuIcon.addEventListener("click", function () {
        mobileNav.style.display = (mobileNav.style.display === "flex") ? "none" : "flex";
    });

    window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };
});
