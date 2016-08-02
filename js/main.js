$(document).ready(function() {
    //scroll 
    $('.scroll-to').click(function() {
        $('html, body').animate({
            'scrollTop': $($.attr(this, 'href')).position().top
        }, 500);
        return false;
    });


    //slider 1
    $('.autoplay').slick({
        prevArrow: $('.prev-button'),
        nextArrow: $('.next-button'),
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    //next btn
    $('.next-button').on('click', function() {

    });


    //slider 2
    $('.your-class').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });


    //sticky menu
    var menu = $('.simple-menu');
    var menuPosition = menu.offset().top;

    $(window).on('scroll resize', function(e) {
        if (e.type === 'resize') {
            menuPosition = menu.offset().top;
        }
        var currentPosition = $(document).scrollTop();
        if (currentPosition >= menuPosition) {
            menu.addClass('sticky');
        } else {
            menu.removeClass('sticky');
        }

    });

    //galeria z filtrem
    var allFilterBtn = $('.filter-btn');
    var galleryImg = $('.filter-img').find('img');
    
    allFilterBtn.on('click', function(){
        var filterName = $(this).html();
        console.log(filterName);
        for(var i = 0; i < galleryImg.length; i++) {
            var tags = galleryImg[i].dataset.tag;
            console.log(tags);
            if (tags.indexOf(filterName) < 0) {
                console.log(galleryImg[i].parentElement);
                galleryImg[i].parentElement.classList.add('invisible');
            } else {
                galleryImg[i].parentElement.classList.remove('invisible');
            }
        }

    });


    //walidacja formularza 
    var form = $('.form-flex');
    var sendFormBtn = form.find('.purple-btn');

    sendFormBtn.on('click', function(event) {
        var email = $('[name=email]').val();
        var name = $('[name=firstname]').val();
        var message = form.find('textarea').val();

        if (name.length < 2) {
            event.preventDefault();
            console.log('Name must be longer than 2 letters');
        } else if (email.indexOf('@') == -1) {
            event.preventDefault();
            console.log('Incorrect email');
        } else if (message.length < 10) {
            event.preventDefault();
            console.log('Your message is too short. What would you like to tell us?');
        } else {
            name = "";
            email = "";
            message = "";
        }
    });




});
