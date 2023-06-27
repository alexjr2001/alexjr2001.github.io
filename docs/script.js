$(document).ready(function(){ 
    $(window).scroll(function(){   //We make the header static during the scroll navigation
        if(this.scrollY>20){
            $('header').addClass('stay');
            $('.subheader').addClass('stay');
            $('.icon-tabler-menu-2').addClass('in-white');

        }
        else{
            $('header').removeClass('stay');
            $('.subheader').removeClass('stay');
            $('.icon-tabler-menu-2').removeClass('in-white');
        }
    })

    $('.menu-btn').click(function(){               //We display the menu in case it is medium or small screen (Responsive)
        $(".secondNav").toggleClass("active");
        $(".icon-menu").toggleClass("hide");
        $(".icon-cancel").toggleClass("active");
    });

    $(".secondNav div a").click(function(){         //We destroy classes to hide the menu displayed
        $(".icon-menu").removeClass("hide");
        $(".icon-cancel").removeClass("active");
        $(".secondNav").removeClass("active");
    })
});

var typed = new Typed(".Special-description",{      //Making an animation where it seems that is automatically typing
    strings: ["DEVELOPER","CS STUDENT","PROGRAMMER","EXPERT NOT JUST AT C++", "POLYGLOT",],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:100,
    loop: true,
});