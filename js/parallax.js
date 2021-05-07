$(document).ready(function(){
    $(window).scroll(function(){
        var anchoDeVentana = $(window).width();

        if(anchoDeVentana > 800){
            var movimientoDeScroll = $(window).scrollTop();

            $('header .texto').css({
                'transform' : 'translate(0px,'+movimientoDeScroll/3+'%)'
            });

            $('#tarjeta').css({
                'transform' : 'translate(0px,-'+movimientoDeScroll/3+'%)'
            });

            if( movimientoDeScroll > 270){
                $('header .texto').css({
                    'opacity': '40%',

                    
                });
            }
            else{
                $('header .texto').css({
                    'opacity': '1'
                });
            }
        }
    });
});