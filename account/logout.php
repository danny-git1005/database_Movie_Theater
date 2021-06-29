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

        case "logout":
            if(isset($_SESSION)){

                session_unset();
                header($_SERVER['SERVER_PROTOCOL'].'200');
                $Result['result'] = 'Logout';

                mysqli_close($con);
                echo json_encode($Result);

                break;
            }
    }

?>
