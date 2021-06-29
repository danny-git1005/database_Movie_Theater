function signup(){

    let user = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("wrok");
    $.ajax({
        type: "POST",
        url: "account/signup.php",
        datatype:"json",
        data:{ 'submit':"signup" , 'username':user , 'email':email , 'password':password },
        success: function(response){
                //alert('sucess');
                alert(response.result);
               if( response.result === "success" ){
                location.href = "./index.html";
               }
               else
               {
                   location.reload();
               }
        },
        error: function( XMLHttpRequest , response){
            alert("fail");
            console.log(response.result);
            console.log(XMLHttpRequest);
        }      
        
    });

}
