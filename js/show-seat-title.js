function show_seat_title(ticket_info){

    console.log('work');
    let release = document.getElementsByClassName("seat_title");
    release[0].innerText = ticket_info.get('date');
    release[1].innerText = ticket_info.get('session');
    release[2].innerText = ticket_info.get('name');
}
