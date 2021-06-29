<?php
    
    header("Content-Type:application/json");
    include($_SERVER['DOCUMENT_ROOT']."/Movie-Theater/account/connect.php");

    $connect = include($_SERVER['DOCUMENT_ROOT']."/Movie-Theater/account/connect.php");
    $con = mysqli_connect($connect['server'],$connect['db_username'],$connect['db_password'],$connect['db_database']);
    $Result = array();

    session_start();

    if(!$con)
    {
        die("can't connect".mysqli_error());
    }

    if(!isset($_POST['submit']))
    {
        exit("wrong");
    }

    switch ($_POST['submit'])
    {
        case "profile":

            $name = $_POST['username'];
            $id = $_POST['userid'];
            
            
            $sql = "select * from user where userid =$id ";
            $result0 = mysqli_query($con,$sql);
            $row = mysqli_fetch_array($result0);
            if($row)
            {
                header($_SERVER['SERVER_PROTOCOL'].'200');
                $Result['username'] = base64_decode($row['username']);
                $Result['email'] = base64_decode($row['email']);
                $Result['userid'] = $row['userid'];
            }
            // else
            // {
            //     header($_SERVER['SERVER_PROTOCOL'].'200');
            //     $Result['error'] = "Unauthurizaed !";
            // }

            break;
    }
    
    mysqli_close($con);
    echo json_encode($Result);


?>
