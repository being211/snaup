$(function () {
    $(".gnb_inner>ul>li").mouseover(function () {
        $(this).children(".sub").stop.slideDown();
    });
});

$(function () {
    $(".gnb_inner>ul>li").mouseout(function () {
        $(this).children(".sub").stop.slideUp();
    });
});