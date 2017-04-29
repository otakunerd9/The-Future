// JavaScript File
var totalSteps = 7;

$("#myCarousel").carousel();
$("#myCarousel").on("slide.bs.carousel", function (e) {
    var step = $(e.relatedTarget).data("step");
    var percent = (parseInt(step) / totalsSteps) * 100;
    
    $(".progress-bar").css(width: percent + '%'});
    $(".progress-bar").text("step" + step);
    })
    }
