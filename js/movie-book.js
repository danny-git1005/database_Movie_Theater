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

let sessions = $('.right_row_session');
$(sessions).on('click', function() {
    sessions.each(function() {
        $(this).removeClass('selected');
    })
    $(this).addClass('selected');
});

let types = $('.right_row_type');
$(types).on('click', function() {
    types.each(function() {
        $(this).removeClass('selected');
    })
    $(this).addClass('selected');
});
