$(document).ready(function(){

        var $menu = $("nav.navbar");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 1020 && $menu.hasClass("navbar") ){
                $menu.removeClass("navbar").addClass("sticky");
            } else if($(this).scrollTop() <= 1020 && $menu.hasClass("sticky")) {
                $menu.removeClass("sticky").addClass("navbar");
            }
        });//scroll
    });