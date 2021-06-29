function get_user_info(web){

    if( web === "profile" )
    {
        tag_li = $(".btn_custom");
        tag_li[0].classList.add("displayNone");
        tag_li[1].classList.add("displayNone");
        console.log("work");
        $.ajax({
            type: "POST",
            url: "account/profile.php",
            dataType:'json',
            data:{'submit':'profile','username':$.cookie('username') , 'userid':$.cookie('userid')},
            success: function(response){  

                console.log(response);
                if ( response.userid )
                {
                    let info = $(".user_info_desc");

                    info[0].innerText = response.username;
                    info[1].innerText = response.email;
                }
                else
                {
                    alert(response.error);
                    if( $.cookie("username")){
                        $.cookie('username',"",{ expires: -1 });
                    }
                    if( $.cookie("userid")){
                        $.cookie('userid',"",{ expires: -1 });
                    }
                    location.href = "./index.html";
                }
                
            },
            error: function( XMLHttpRequest,response){
                alert("fail");
                console.log(response);
                console.log(XMLHttpRequest);
            }
        });

    }
    else{
        //$('.nav-item:contains("登入")').addClass("displayNone");
        let tag_li1 = $('.nav-item:contains("登入")');
        tag_li1[0].classList.add("displayNone");
        let tag_li2 = $('.nav-item:contains("註冊")');
        tag_li2[0].classList.add("displayNone");
        console.log("else");
        let user = $('.nav-item > .userWrapper').parent();
        user[0].classList.remove("displayNone");

        tag_i = $(".user_name");
        tag_i[0].innerText = $.cookie('username');
    }
    
}