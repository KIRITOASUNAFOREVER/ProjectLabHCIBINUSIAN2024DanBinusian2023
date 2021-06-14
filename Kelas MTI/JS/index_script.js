$(document).ready(function() {

    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    let width = 0;
    let interval;

    function autoSlide() {

        interval = setInterval(function() {

            if(width < 200) {

                width += 100;
            }
    
            else {
    
                width = 0;
            }
    
            $("figure").css("left", -width + "%");

        }, 3000);
    }

    autoSlide();
    
    toggleButton.addEventListener("click", function() {
    
        navbarLinks.classList.toggle("active");
    });

    $(".btn-prev").click(function() {

        if(width >= 100) {

            width -= 100;
        }

        else {

            width = 200;
        }

        $("figure").css("left", -width + "%");

        clearInterval(interval);
        autoSlide();
    });

    $(".btn-next").click(function() {

        if(width < 200) {

            width += 100;
        }

        else {

            width = 0;
        }

        $("figure").css("left", -width + "%");

        clearInterval(interval);
        autoSlide();
    });
});