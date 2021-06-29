$(".btn_book").on("click",function(){
    let moviename = new URLSearchParams(window.location.search);
    let date = $('#date_box').val();
    let session = $('.right_row_session.selected').text();
    let type = $('.right_row_type.selected').text();
    let number = $('.right_row_number').val();
  
    // if( !date || !session || !type || !number   )
    // {
    //     let string = " 請填寫 ";

    //     if (!session)
    //     {
            
    //     }
    //     alert( " 請將訂票資訊填寫完整 " );
    // }
    
    let url = "./movie-book-seat.html?name="+moviename.get("name")+"&movieid="+moviename.get("id")+"&date="+date+"&session="+session+"&type="+type+"&number="+number;
    window.location.href = url;

})