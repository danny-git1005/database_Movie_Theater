let ticket = new URLSearchParams(window.location.search);
let seats = $('.seat');
let tickets = ticket.get('number');
seats.on('click', function() {
    if (!( ($(this).hasClass('red')) || ($(this).hasClass('green')) )) {
        let count = 0;
        seats.each(function () {
            if ($(this).hasClass('green')) {
                count += 1;
            }
        });
        if (count < tickets) {
            $(this).addClass('green');
        }
    } else if ($(this).hasClass('green')) {
        $(this).removeClass('green');
    }
});