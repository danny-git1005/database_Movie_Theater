$(".logout_book").on('click',function(){
    console.log('work');

    $.ajax({
        type: "POST",
        url: "account/logout.php",
        dataType:'json',
        data:{'submit':'logout'},
        success: function(response){  

            if ( response.result )
            {
                alert(response.result+" success");
                $.cookie('username',"",{ expires: -1 });
                $.cookie('userid',"",{ expires: -1 });
                location.href = "./index.html";
            }
            
        },
        error: function( XMLHttpRequest,response){
            alert("fail");
            console.log(response);
            console.log(XMLHttpRequest);
        }
    });
})