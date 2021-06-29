function get_user_book(){

    $.ajax({
        type: "POST",
        url: "api/user_ticket.php",
        dataType:'json',
        data:{'submit':'user_ticket','username':$.cookie('username') , 'userid':$.cookie('userid')},
        success: function(response){  

            //console.log(response);

            let parent = $('.page_content');

            for(i = 0; i < response.length; i++ )
            {
                let box = $("#box").clone();
                box.removeClass("displayNone");
                let image = box.find("#moive_image");
                let name = box.find("#movie_name");
                let date = box.find("#moive_date");
                let session = box.find("#moive_session");
                let hall = box.find("#movie_hall");
                let row = box.find("#moive_seatRow");
                let col = box.find("#moive_seatCol");
                let type = box.find("#moive_type");

                console.log(name);
                image.attr('src', response[i]["movie_img_href"]);
                // name.innerHTML = response[i]['movie_name'];
                name.text(response[i]['movie_name']);
                date.text(response[i]['date']);
                session.text(response[i]['session_time']);
                hall.text(response[i]['hall_num']);
                row.text(response[i]['row_num']);
                col.text(response[i]['col_num']);
                if(response[0]['fee'] === 300)
                {
                    type.text("全票");
                }
                else{
                    type.text("半票");
                }
                
                //console.log(i);
                box.appendTo(parent[0]);
            }
        },
        error: function( XMLHttpRequest,response){
            alert("fail");
            console.log(response);
            console.log(XMLHttpRequest);
        }
    });
}