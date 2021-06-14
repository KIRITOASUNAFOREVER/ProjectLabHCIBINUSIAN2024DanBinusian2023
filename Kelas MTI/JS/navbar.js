$(document).ready(function() {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0]
    const toggleButton = document.getElementsByClassName("toggle-button")[0]

    toggleButton.addEventListener("click", function() {
    
        navbarLinks.classList.toggle("active")
    })

})