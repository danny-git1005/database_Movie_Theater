<?php
   
    header("Content-type:application/json");
    $connect = include($_SERVER['DOCUMENT_ROOT']."/Movie-Theater/account/connect.php");
    $Result = array();

    if(!isset($_POST['submit']))
    {
        exit("error");
    }
    $name = base64_encode($_POST['username']);
    $password = base64_encode($_POST['password']);
    $email = base64_encode($_POST['email']);

    $con = mysqli_connect($connect['server'],$connect['db_username'],$connect['db_password'],$connect['db_database']);
    
    if(!$con)
    {
        die("can't connect".mysqli_error());
    }
    // $sql="CREATE TABLE IF NOT EXISTS `user` (
    //     `userid` INT NOT NULL AUTO_INCREMENT,
    //     `username` VARCHAR(45) NULL UNIQUE,
    //     `password` VARCHAR(45) NOT NULL,
    //     `email` VARCHAR(45) NOT NULL,
    //     PRIMARY key (`userid`))";

    // $result0 = mysqli_query($con , $sql);
    // echo $result0;
    // if(!$result0)
    // {
    //     echo "error:";
    // }
    
    $sql_1="select * from movie.user WHERE username = '$name';";
    
    $result1 = mysqli_query($con , $sql_1);
    $row = mysqli_fetch_array($result1);
    $Result['result'] = $result1;
    
    if($row != NULL)
    {   
        if($row['username'] == $name)
        {
            header($_SERVER['SERVER_PROTOCOL'] . " 200");
            $Result['result'] = "account exit";
        }
    }
    else
    {
        $q="insert into user (userid,username,password,email) value (null,'$name','$password','$email');";
        $result=mysqli_query($con,$q);

        if(!$result)
        {
            die("error:".mysqli_error($result));
        }
        else
        { 
            header($_SERVER['SERVER_PROTOCOL'] . " 200");
            $Result['result'] = "success"; 
        }

    }
    mysqli_close($con);
    echo json_encode($Result);
?>

