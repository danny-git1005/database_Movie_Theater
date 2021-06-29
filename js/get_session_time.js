function get_session(name){

    $.ajax({
        type:"POST",
        url: "api/session_time.php",
        datatype: "json",
        data:{ 'submit':'session_time','name':name},
        success: function(response){
            console.log("session_success");
            //console.log(name);
            //console.log(response);
 
            picture = document.querySelector("img");
            movie_name = document.getElementsByClassName("left_row_title");
            release = document.getElementsByClassName("right_row_desc");
            show_time = document.getElementsByClassName("right_row_session");

            movie_name[0].innerText = response[0]['movie_name'];
            picture.src = response[0]['movie_img_href'];
            release[0].innerText = response[0]['hall_num'];
            release[1].innerText = response[0]['runtime'];
            release[2].innerText = response[0]['director'];
            show_time[0].innerText = response[0]['session_time'];
            show_time[1].innerText = response[1]['session_time'];
            show_time[2].innerText = response[2]['session_time'];
            show_time[3].innerText = response[3]['session_time'];
            show_time[4].innerText = response[4]['session_time'];
            show_time[5].innerText = response[5]['session_time'];
            show_time[6].innerText = response[6]['session_time'];
            show_time[7].innerText = response[7]['session_time'];
        },
        error: function(XMLHttpRequest){
            console.log("session_fail");
            console.log(XMLHttpRequest);
        } 
    })
}