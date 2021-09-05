$(document).ready(function(){
    $("#mycarousel").carousel({interval:2000});
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
    

    $("#login-button").click(function(){
       $("#loginModal").modal("show");
    });

    $("#reserve-button").click(function(){
        $("#reservemodal").modal("show");
    });

    $("#dismiss-modal,#dismiss-modal-button").click(function(){
        $("#loginModal").modal("hide");
        $("#reservemodal").modal("hide");
    });
});