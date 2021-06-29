function get_info(name,web){

    console.log("work");
    $.ajax({
        type:"POST",
        url: "api/movieinfo.php",
        datatype: "json",
        data:{ 'submit':'movieinfo' , 'name':name},
        success: function(response){
            console.log("success");
            //console.log(response);
 
            picture = document.querySelector("img");
            movie_name = document.getElementsByClassName("left_row_title");
            release = document.getElementsByClassName("right_row_desc");

            movie_name[0].innerText = response['movie_name'];
            movie_name[0].setAttribute("id",response['movieid']);
            picture.src = response['movie_img_href'];
            release[0].innerText = response['movie_release'];
            release[1].innerText = response['runtime'];
            release[2].innerText = response['director'];
            if ( web === "detail")
            {
                release[3].innerText = response['story'];
            }
        },
        error: function(XMLHttpRequest){
            console.log("fail");
            console.log(XMLHttpRequest);
        } 
    })
}
