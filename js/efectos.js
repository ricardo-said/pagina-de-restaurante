$(document).ready(function(){

    //EFECTO MENU
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top:'0'

        }, 3000 + (index * 500));
    });
//EFECTO HEADER
    if($(Window).width() > 800){
        $('header .texto').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .texto').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    //SCROLL ELEMENTO MENU
    
    var acercaDe= $('#acerca-de').offset().top;
    var menu = $('#menu').offset().top;
    var galeria = $('#galeria').offset().top;
    var ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe -150
        },500);
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu 
        },500);
    });
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        },500);
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        },500);
    });
    
});