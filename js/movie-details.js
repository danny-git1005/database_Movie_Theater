$('.rank i').on('click', function(){
    let onStar = parseInt($(this).data('value'),10);
    let stars = $(this).parent().children('i.star');

    for (i = stars.length - 1; i >= 0; i--) {
        $(stars[i]).removeClass('lightup');
    }

    for (i = stars.length - 1; i >= 5 - onStar; i--) {
        $(stars[i]).addClass('lightup');
    }
    $('.left_row_score').text($(this).data('value'));
})
