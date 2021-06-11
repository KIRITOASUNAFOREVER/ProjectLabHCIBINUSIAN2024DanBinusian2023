$(function(){
    
    var auto = true;
    
    var pause = 3000;
    
    var $this = $('.DiscoverBox');
    var discoverContent = $this.children('.DiscoverContent');

    var slidesCont = discoverContent.children('.sliderImages');
    var sliderMain = discoverContent.children('.sliderMain');
    var pager = sliderMain.children('.pager');

    var slides = slidesCont.children('.slide');
    var arrowsCont = sliderMain.children('.sliderContent');

    var prevSlide = arrowsCont.children('.prev');
    var nextSlide = arrowsCont.children('.next');
    
    var slidesCount = slides.length;
    
    var currentSlide = slides.first();
    var currentSlideIndex = 1;
    
    var autoPlay = null;

    slides.not(':first').css('display', 'none');
    currentSlide.addClass('active');

    function fadeNext() {
        currentSlide.removeClass('active').fadeOut(700);
    
        if(currentSlideIndex == slidesCount) {
            currentSlide = slides.first();
            currentSlide.delay(500).addClass('active').fadeIn(1000);
            currentSlideIndex = 1;
        } else {
            currentSlideIndex++;
            currentSlide = currentSlide.next();
            currentSlide.delay(500).addClass('active').fadeIn(1000);
        }
    
        pager.text(currentSlideIndex+' / '+slidesCount);
    }
    
    function fadePrev() {
        currentSlide.removeClass('active').fadeOut(1000);
    
        if(currentSlideIndex == 1) {
            currentSlide = slides.last();
            currentSlide.delay(500).addClass('active').fadeIn();
            currentSlideIndex = slidesCount;
        } else {
            currentSlideIndex--;
            currentSlide = currentSlide.prev();
            currentSlide.delay(500).addClass('active').fadeIn(1000);
        }
    
        pager.text(currentSlideIndex+' / '+slidesCount);
    }

    function AutoPlay() {
        clearInterval(autoPlay);
    
        if(auto == true)
            autoPlay = setInterval(function() {fadeNext()}, pause);
    }

    $(nextSlide).click(function(e) {
        e.preventDefault();
        fadeNext();
        AutoPlay();
    });
    
    $(prevSlide).click(function(e) {
        e.preventDefault();
        fadePrev();
        AutoPlay();
    });
    
    AutoPlay();
})

