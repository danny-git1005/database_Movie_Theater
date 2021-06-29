function book_ticket(ticket_info){

    console.log("book_work");
    let userid = $.cookie('userid');
    let name = ticket_info.get('name');
    let date = ticket_info.get('date');
    let session = ticket_info.get('session');
    let type = ticket_info.get('type');
    let number = ticket_info.get('number');
    let movieid = ticket_info.get('movieid');
    let seat = [];
    let sum = 0;
    for ( let i = 0; sum<number ; i++)
    {
        if( $('.seat_row').eq(i).hasClass("hidden"))
            continue;
        else
        {
            for( let j = 0 ; j<6 ; j++)
            {
                if( $('.seat_row').eq(i).children('.seat_column').eq(j).hasClass('green'))
                {
                    let X = 0 ;
                    if( i > 3)
                        x = i;
                    else 
                        x = i+1;
                    sum++;
                    seat.push(x , j+1);
                }
            }
        }
    }
    console.log(seat);
    $.ajax({
        type:"POST",
        url: "api/book_ticket.php",
        datatype: "json",
        data:{ 'submit':'book_ticket','name':name,'date':date , 'session': session , 'type':type , 'number':number , 'user_id':userid , "movie_id": movieid , 'seat': seat},
        success: function(response){
            console.log("book_success");
            //console.log(response);
            alert("訂票成功"); 
            window.location.assign('./movielist.html');
        },  
        error: function(XMLHttpRequest){
            console.log("book_fail");
            console.log(XMLHttpRequest);
        } 
    })
}
