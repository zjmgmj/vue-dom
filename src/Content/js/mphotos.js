define("photojs",["jquery","photomin", "baguetteBoxjs"],function () {
    var currentWidth = 1100;
    photo = function() {
        var winWidth = $(window).width();
        var conWidth;
        if(winWidth < 660) {
            conWidth = winWidth - 10;
            col = 2
        } else if(winWidth < 880) {
            conWidth = 660;
            col = 3
        } else if(winWidth < 1000) {
            conWidth = 880;
            col = 4;
        } else {
            conWidth = 1200;
            col = 5;
        }
        currentWidth = conWidth;
        $('#container').width(conWidth);
        $('#container').BlocksIt({
            numOfCol: col,
            offsetX: 8,
            offsetY: 8
        });
    };
    photo();
    baguetteBox.run('.baguetteBoxOne');
    baguetteBox.run('.baguetteBoxTwo');
    baguetteBox.run('.baguetteBoxThree', {
        animation: 'fadeIn',
    });
    baguetteBox.run('.baguetteBoxFour', {
        buttons: false
    });
    baguetteBox.run('.baguetteBoxFive');
    $(window).resize(function() {
        photo();
    });
})