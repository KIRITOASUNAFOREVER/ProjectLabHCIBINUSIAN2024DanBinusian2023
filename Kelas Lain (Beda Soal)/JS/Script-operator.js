if($(document).ready()) {

    var slider = $("#cardSlider");

    $("#slide-left").click(moveSlider);
    $("#slide-right").click(moveSlider);

    function moveSlider() {
        var direction = $(this).data().direction;

        slider.animate({
            scrollLeft: getNextScrollPos(direction, slider.scrollLeft())
        }, 500);
    }

    function getNextScrollPos(direction, currScrollPos) {
        var newScrollPos;
        var sliderWidth = slider.width();

        if(direction == "left") {
            newScrollPos = currScrollPos - sliderWidth;
        } else if(direction == "right") {
            newScrollPos = currScrollPos + sliderWidth;
        }
        return newScrollPos;
    }
    
}

