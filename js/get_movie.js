function get_movie(num){

    $.ajax({
        type:"POST",
        url: "api/movielist.php",
        datatype: "json",
        data:{ 'submit':'movie'  },
        success: function(response){
            
            let tag_div = $('.card');
            console.log(tag_div);
            for(var i= (num-1)*8 ; i<num*8;i++)
            {
                let img = document.createElement("img");
                let div1 = document.createElement("div");
                let div2 = document.createElement("div");
                
                img.className = "card_photo" ;
                img.src = response[i]['movie_img_href'];
                div1.className = "card_nameCh";
                div1.innerHTML = response[i]["movie_name"];

                tag_div[i%8].appendChild(img)
                tag_div[i%8].appendChild(div1);
                tag_div[i%8].appendChild(div2);

            }
        },
        error: function(XMLHttpRequest){
            console.log("fail");
            console.log(XMLHttpRequest);
        } 
    })
}
