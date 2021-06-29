
function login(){
    console.log("work");
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    $.ajax({
        type: "POST",
        url: "account/login.php",
        dataType:'json',
        data:{'submit':'login','username':user , 'password':password},
        success: function(response){  

            //console.log(response.result);
            if ( response.userid )
            {
                alert(response.result);
                $.cookie('username',user);
                $.cookie('userid',response.userid);
                location.href = "./index.html";
            }
            else
            {
                alert(response.result);
                location.reload();
            }
        },
        error: function( XMLHttpRequest,response){
            alert("fail");
            console.log(response);
            console.log(XMLHttpRequest);
        }
    });
    
}
